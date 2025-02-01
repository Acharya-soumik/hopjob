'use server';

import { supabase } from '@/lib/supabase';
import PDFParser from 'pdf-parse';

export async function processPdf(resumeId: string) {
  try {
    // Get resume details
    const { data: resume, error: resumeError } = await supabase
      .from('resumes')
      .select('*')
      .eq('id', resumeId)
      .single();

    if (resumeError || !resume) throw resumeError;

    // Download PDF from storage
    const { data: fileData, error: downloadError } = await supabase.storage
      .from('resumes')
      .download(resume.filename);

    if (downloadError || !fileData) throw downloadError;

    // Parse PDF
    const buffer = await fileData.arrayBuffer();
    const pdfData = await PDFParser(buffer);

    // Extract text content
    const text = pdfData.text;

    // Basic analysis
    const analysis = {
      wordCount: text.split(/\s+/).length,
      sections: detectSections(text),
      keywords: extractKeywords(text),
      suggestions: generateSuggestions(text),
    };

    // Update resume record with analysis
    const { error: updateError } = await supabase
      .from('resumes')
      .update({
        status: 'completed',
        analysis_result: analysis,
      })
      .eq('id', resumeId);

    if (updateError) throw updateError;

    return { success: true, analysis };
  } catch (error: any) {
    console.error('PDF processing error:', error);
    
    // Update resume status to error
    await supabase
      .from('resumes')
      .update({
        status: 'error',
      })
      .eq('id', resumeId);

    return { success: false, error: error.message };
  }
}

function detectSections(text: string) {
  const commonSections = [
    'education',
    'experience',
    'skills',
    'projects',
    'certifications',
    'awards',
  ];

  const sections: Record<string, { start: number; content: string }> = {};

  commonSections.forEach(section => {
    const regex = new RegExp(`\\b${section}\\b`, 'gi');
    const match = regex.exec(text);
    if (match) {
      sections[section] = {
        start: match.index,
        content: text.slice(match.index, match.index + 500), // Get next 500 chars as preview
      };
    }
  });

  return sections;
}

function extractKeywords(text: string) {
  const keywords = new Set<string>();
  const techKeywords = [
    'javascript', 'typescript', 'python', 'java', 'react', 'node.js',
    'aws', 'docker', 'kubernetes', 'sql', 'nosql', 'mongodb',
    'rest api', 'graphql', 'ci/cd', 'git', 'agile', 'scrum',
  ];

  techKeywords.forEach(keyword => {
    if (text.toLowerCase().includes(keyword.toLowerCase())) {
      keywords.add(keyword);
    }
  });

  return Array.from(keywords);
}

function generateSuggestions(text: string) {
  const suggestions: string[] = [];
  const lowercaseText = text.toLowerCase();

  // Basic checks
  if (text.length < 2000) {
    suggestions.push('Consider adding more detail to your resume');
  }

  if (!lowercaseText.includes('github.com')) {
    suggestions.push('Add links to your GitHub profile or project repositories');
  }

  if (!lowercaseText.includes('linkedin.com')) {
    suggestions.push('Include your LinkedIn profile');
  }

  // Check for action verbs
  const actionVerbs = ['developed', 'implemented', 'created', 'managed', 'led'];
  const hasActionVerbs = actionVerbs.some(verb => lowercaseText.includes(verb));
  if (!hasActionVerbs) {
    suggestions.push('Use more action verbs to describe your experiences');
  }

  return suggestions;
} 