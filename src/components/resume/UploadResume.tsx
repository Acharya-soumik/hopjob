'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useSession } from 'next-auth/react';
import { processPdf } from '@/app/actions/processPdf';

export default function UploadResume() {
  const { data: session } = useSession();
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !session?.user?.id) return;

    if (file.type !== 'application/pdf') {
      setError('Please upload a PDF file');
      return;
    }

    setIsUploading(true);
    setError(null);

    try {
      const filename = `${session.user.id}/${Date.now()}-${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(filename, file);

      if (uploadError) throw uploadError;

      // Create resume record in database
      const { data: resume, error: dbError } = await supabase
        .from('resumes')
        .insert({
          user_id: session.user.id,
          filename,
          original_name: file.name,
          status: 'pending',
        })
        .select()
        .single();

      if (dbError) throw dbError;

      // Start PDF processing
      if (resume) {
        processPdf(resume.id);
      }

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg">
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileUpload}
        className="hidden"
        id="resume-upload"
        disabled={isUploading}
      />
      <label htmlFor="resume-upload">
        <div className="flex flex-col items-center cursor-pointer">
          <Upload className="w-12 h-12 mb-4 text-gray-400" />
          <Button disabled={isUploading}>
            {isUploading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Uploading...
              </>
            ) : (
              'Upload Resume'
            )}
          </Button>
        </div>
      </label>
      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
      <p className="mt-2 text-sm text-gray-500">
        Upload your resume in PDF format
      </p>
    </div>
  );
} 