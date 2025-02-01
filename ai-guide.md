# HopJob

A comprehensive platform for job seekers combining AI-powered resume analysis, DSA practice, and community features.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/hopjob.git

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local

# Start the development server
pnpm dev
```

Visit `http://localhost:3000` to see the application.

## 🛠 Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Supabase, Edge Functions (Cloudflare Workers)
- **AI Integration**: OpenAI API
- **Authentication**: NextAuth.js, Supabase Auth
- **Testing**: Playwright, Vitest, Storybook
- **Deployment**: Vercel, GitHub Actions
- **Monitoring**: Sentry

## 📁 Project Structure

```
/src
├── app/                  # Next.js 13+ App Router pages
│   ├── (auth)/          # Authentication routes
│   ├── resume/          # Resume analysis
│   ├── community/       # Community features
│   └── dsa/            # DSA platform
├── components/
│   ├── ui/             # Shadcn UI components
│   └── core/           # Custom components
├── lib/                # Utilities and API clients
├── hooks/              # Custom React hooks
├── types/              # TypeScript definitions
└── styles/             # Global styles
```

## 🔑 Environment Variables

```env
# Authentication
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# OpenAI
OPENAI_API_KEY=your_openai_key

# Discord OAuth (Optional)
DISCORD_CLIENT_ID=your_discord_client_id
DISCORD_CLIENT_SECRET=your_discord_client_secret

# Monitoring
SENTRY_DSN=your_sentry_dsn
```

## 🎯 Core Features

### Resume Analysis

The AI-powered resume analysis system provides:

- PDF upload and parsing
- ATS compatibility checking
- Skill gap analysis
- Improvement suggestions
- Position-specific tailoring

### DSA Platform

An integrated DSA learning environment with:

- Company-specific question filters
- Pattern recognition
- Mock interview simulator
- Progress tracking
- AI-powered hints

### Community Features

Foster a supportive developer community through:

- Discord integration
- Real-time chat
- Event calendar
- Reputation system
- Knowledge sharing

## 🗄️ Database Schema

### Questions Table

```sql
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
```

### Submissions Table

```sql
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
```

## 🔒 Security Implementation

### Row Level Security (RLS)

```sql
-- Profiles table security policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = user_id);
```

### Protected Routes

```typescript
// middleware.ts
import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {
      const path = req.nextUrl.pathname;
      if (path.startsWith('/protected')) {
        return !!token;
      }
      return true;
    },
  },
});
```

## 🧪 Testing

```bash
# Run unit tests
pnpm test

# Run E2E tests
pnpm test:e2e

# Run component tests
pnpm test:components
```

## 📦 Deployment

### Production Checklist

- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] SSL certificates valid
- [ ] CDN configured
- [ ] Monitoring tools active
- [ ] Backup system verified
- [ ] Rate limiting enabled
- [ ] Error tracking configured
- [ ] Analytics implemented

### Deployment Command

```bash
# Production build
pnpm build

# Deploy to Vercel
vercel --prod
```

## 🚨 Error Handling

```typescript
interface APIError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

const ERROR_CODES = {
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  RATE_LIMITED: 'RATE_LIMITED',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
} as const;
```

## 🔄 API Rate Limiting

```typescript
interface RateLimitConfig {
  window: number;   // time window in seconds
  max: number;      // maximum requests per window
  userId: string;
  resource: string;
}
```

## 📊 Monitoring

### Health Checks

```typescript
interface HealthCheck {
  service: string;
  status: 'healthy' | 'degraded' | 'down';
  latency: number;
  lastChecked: Date;
}
```

### Logging

```typescript
interface LogEntry {
  level: 'debug' | 'info' | 'warn' | 'error';
  message: string;
  timestamp: Date;
  context: Record<string, unknown>;
  traceId?: string;
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- OpenAI for providing the AI capabilities
- Supabase for the backend infrastructure
- Vercel for hosting and deployment
- The open-source community for various tools and libraries

## 📞 Support

For support, email support@hopjob.com or join our [Discord community](https://discord.gg/hopjob).