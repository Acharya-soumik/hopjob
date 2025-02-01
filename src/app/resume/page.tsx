import UploadResume from '@/components/resume/UploadResume';
import ResumeList from '@/components/resume/ResumeList';

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Resume Analysis</h1>
      <div className="mb-8">
        <UploadResume />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Your Resumes</h2>
        <ResumeList />
      </div>
    </div>
  );
} 