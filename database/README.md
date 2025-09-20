# Blog Database Setup

This directory contains the database schema and setup instructions for the Mega Plywood blog system.

## Database Options

The blog system supports two database options:

### 1. Neon DB (PostgreSQL)
- Serverless PostgreSQL database
- Good for development and small to medium applications
- Easy setup and scaling

### 2. Supabase
- Open source Firebase alternative
- Built-in authentication and real-time features
- Good for applications that need additional features

## Setup Instructions

### For Neon DB

1. Create a Neon account at [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Set environment variables:
   ```bash
   DATABASE_TYPE=neon
   DATABASE_URL=postgresql://username:password@hostname:port/database
   ```
5. Run the schema:
   ```bash
   psql $DATABASE_URL -f schema.sql
   ```

### For Supabase

1. Create a Supabase account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Settings > API to get your URL and anon key
4. Set environment variables:
   ```bash
   DATABASE_TYPE=supabase
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=your-anon-key
   ```
5. Run the schema in the SQL Editor:
   - Copy the contents of `schema.sql`
   - Paste into the SQL Editor in your Supabase dashboard
   - Execute the query

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Database Configuration
DATABASE_TYPE=neon  # or 'supabase'

# For Neon DB
DATABASE_URL=postgresql://username:password@hostname:port/database

# For Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Database Schema

The blog system uses a single table `blog_posts` with the following structure:

- `id`: UUID primary key
- `title`: Post title (max 255 characters)
- `slug`: URL-friendly version of title (unique)
- `content`: Full post content (HTML)
- `excerpt`: Short description (optional)
- `featured_image`: URL to featured image (optional)
- `author`: Author name
- `published_at`: Publication timestamp
- `created_at`: Creation timestamp
- `updated_at`: Last update timestamp
- `tags`: Array of tags
- `status`: 'draft' or 'published'

## Sample Data

The schema includes sample blog posts to get you started. You can modify or remove these as needed.

## Features

- ✅ Responsive design
- ✅ SEO-friendly URLs
- ✅ Tag system
- ✅ Author information
- ✅ Reading time calculation
- ✅ Featured images
- ✅ Draft/Published status
- ✅ Search functionality (ready for implementation)
- ✅ Related posts (ready for implementation)

## Next Steps

1. Install dependencies: `npm install`
2. Set up your database using one of the methods above
3. Configure environment variables
4. Run the development server: `npm run dev`
5. Visit `/berita` to see the blog in action

## Customization

You can customize the blog system by:

- Modifying the database schema
- Updating the UI components
- Adding new features like comments, categories, etc.
- Integrating with a CMS for easier content management
