# Vercel Deployment Guide

## Prerequisites
- Vercel account (free tier available)
- GitHub repository with your code
- Domain name (optional, Vercel provides free subdomain)

## Deployment Steps

### 1. Prepare Your Repository
Make sure your code is pushed to GitHub with all the latest changes.

### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import your repository

### 3. Configure Environment Variables
In Vercel dashboard, go to your project settings and add these environment variables:

#### Required Variables:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

#### Optional (for database integration later):
```
DATABASE_TYPE=neon
DATABASE_URL=your-neon-connection-string
# OR
DATABASE_TYPE=supabase
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 4. Build Settings
Vercel will automatically detect Next.js and use these settings:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 5. Deploy
Click "Deploy" and wait for the build to complete.

## Post-Deployment Checklist

### ✅ Verify All Pages Work
Test these URLs after deployment:
- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/products` - Products page
- `/services` - Services page
- `/berita` - Blog listing
- `/berita/[slug]` - Individual blog posts
- `/privacy` - Privacy policy
- `/terms` - Terms & conditions
- `/sitemap` - Human-readable sitemap
- `/sitemap.xml` - XML sitemap
- `/robots.txt` - Robots.txt

### ✅ SEO Verification
- Check `/sitemap.xml` loads correctly
- Check `/robots.txt` loads correctly
- Verify all internal links work
- Test responsive design on mobile

### ✅ Performance Check
- Run Lighthouse audit
- Check Core Web Vitals
- Verify images load correctly
- Test page load speeds

## Custom Domain Setup (Optional)

### 1. Add Domain in Vercel
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### 2. Update Environment Variables
Update `NEXT_PUBLIC_SITE_URL` to your custom domain:
```
NEXT_PUBLIC_SITE_URL=https://www.megaplywoodindonesia.com
```

### 3. Redeploy
Trigger a new deployment to update sitemap and robots.txt with the new domain.

## Troubleshooting

### Common Issues:

#### 1. 404 Errors
- Check that all page files exist in `src/app/`
- Verify file naming conventions (page.tsx, not Page.tsx)
- Check for typos in route names

#### 2. Build Failures
- Check for TypeScript errors: `npm run build`
- Verify all imports are correct
- Check for missing dependencies

#### 3. Environment Variables Not Working
- Ensure variables are set in Vercel dashboard
- Check variable names match exactly
- Redeploy after adding new variables

#### 4. Images Not Loading
- Verify image paths are correct
- Check that images exist in `public/` folder
- Use Next.js Image component for optimization

### Performance Optimization:
- Images are automatically optimized by Vercel
- Static assets are cached globally
- Pages are pre-rendered for better SEO
- Automatic HTTPS is enabled

## Monitoring

### Vercel Analytics (Optional)
Enable Vercel Analytics in your project settings for:
- Page views and user behavior
- Performance metrics
- Real user monitoring

### Error Tracking
Consider adding error tracking services like:
- Sentry
- LogRocket
- Bugsnag

## Maintenance

### Regular Updates:
1. Keep dependencies updated
2. Monitor build logs for warnings
3. Check Core Web Vitals regularly
4. Update content as needed

### Database Integration:
When ready to add a database:
1. Set up Neon DB or Supabase
2. Add environment variables in Vercel
3. Update code to use real database instead of mock data
4. Test thoroughly before going live

## Support
- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Vercel Community: https://github.com/vercel/vercel/discussions
