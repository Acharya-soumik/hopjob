'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useSession } from 'next-auth/react';
import { FileText, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Resume {
  id: string;
  original_name: string;
  status: string;
  created_at: string;
}

export default function ResumeList() {
  const { data: session } = useSession();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!session?.user?.id) return;

    const fetchResumes = async () => {
      try {
        const { data, error } = await supabase
          .from('resumes')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setResumes(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResumes();
  }, [session?.user?.id]);

  if (isLoading) {
    return (
      <div className="flex justify-center p-8">
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        Error loading resumes: {error}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {resumes.map((resume) => (
        <div
          key={resume.id}
          className="flex items-center justify-between p-4 border rounded-lg"
        >
          <div className="flex items-center space-x-4">
            <FileText className="w-6 h-6 text-gray-400" />
            <div>
              <h3 className="font-medium">{resume.original_name}</h3>
              <p className="text-sm text-gray-500">
                Uploaded {new Date(resume.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 text-sm rounded-full ${
              resume.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
              resume.status === 'completed' ? 'bg-green-100 text-green-800' :
              'bg-red-100 text-red-800'
            }`}>
              {resume.status}
            </span>
            <Button variant="outline" size="sm">
              View Analysis
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
} 