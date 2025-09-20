# Database Integration Guide

## Current Status
The blog system is currently using **mock data** to avoid dependency issues. The application should now run without any database setup.

## When Ready to Integrate Database

### Step 1: Install Database Dependencies
```bash
npm install @supabase/supabase-js pg
npm install --save-dev @types/pg
```

### Step 2: Choose Your Database

#### Option A: Neon DB
1. Create account at [neon.tech](https://neon.tech)
2. Create new project
3. Copy connection string
4. Set environment variables:
   ```bash
   DATABASE_TYPE=neon
   DATABASE_URL=postgresql://username:password@hostname:port/database
   ```

#### Option B: Supabase
1. Create account at [supabase.com](https://supabase.com)
2. Create new project
3. Get URL and anon key from Settings > API
4. Set environment variables:
   ```bash
   DATABASE_TYPE=supabase
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=your-anon-key
   ```

### Step 3: Update Code
1. Replace imports in blog pages:
   ```typescript
   // Change from:
   import { mockBlogDb } from '@/lib/mock-data'
   
   // To:
   import { blogDb } from '@/lib/database'
   ```

2. Update function calls:
   ```typescript
   // Change from:
   const posts = await mockBlogDb.getPublishedPosts()
   
   // To:
   const posts = await blogDb.getPublishedPosts()
   ```

### Step 4: Run Database Schema
Execute the SQL from `database/schema.sql` in your chosen database.

### Step 5: Test
Visit `/berita` to see your blog with real database data.

## Files to Update When Integrating
- `src/app/berita/page.tsx`
- `src/app/berita/[slug]/page.tsx`
- `src/components/BlogCard.tsx`

## Current Mock Data
The system includes 5 sample blog posts about plywood topics. You can modify the mock data in `src/lib/mock-data.ts` or replace it with real database integration when ready.
