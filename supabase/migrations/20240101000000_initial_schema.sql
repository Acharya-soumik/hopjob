-- Create questions table
CREATE TABLE questions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  difficulty TEXT CHECK (difficulty IN ('easy','medium','hard')),
  patterns TEXT[],
  companies TEXT[],
  solution TEXT,
  hints TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create submissions table
CREATE TABLE submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  question_id UUID REFERENCES questions(id),
  code TEXT NOT NULL,
  language TEXT NOT NULL,
  status TEXT,
  runtime_ms INTEGER,
  memory_kb INTEGER,
  submitted_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Questions are viewable by everyone"
  ON questions FOR SELECT
  USING (true);

CREATE POLICY "Submissions are viewable by the owner"
  ON submissions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Submissions can be inserted by authenticated users"
  ON submissions FOR INSERT
  WITH CHECK (auth.uid() = user_id); 