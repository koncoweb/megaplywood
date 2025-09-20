-- Database schema for blog posts
-- Compatible with both Neon DB (PostgreSQL) and Supabase

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    featured_image VARCHAR(500),
    author VARCHAR(100) NOT NULL,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    tags TEXT[] DEFAULT '{}',
    status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published'))
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at);
CREATE INDEX IF NOT EXISTS idx_blog_posts_tags ON blog_posts USING GIN(tags);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_blog_posts_updated_at 
    BEFORE UPDATE ON blog_posts 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data
INSERT INTO blog_posts (title, slug, content, excerpt, author, published_at, tags, status) VALUES
(
    'Welcome to Mega Plywood Indonesia News',
    'welcome-to-mega-plywood-indonesia-news',
    '<h1>Welcome to Our News Section</h1><p>We are excited to launch our new news and blog section where we will share the latest updates about our plywood products, industry insights, and company news.</p><h2>What You Can Expect</h2><ul><li>Latest product updates and specifications</li><li>Industry trends and market insights</li><li>Company news and announcements</li><li>Tips for choosing the right plywood for your projects</li></ul><p>Stay tuned for regular updates and valuable content from our team of experts.</p>',
    'We are excited to launch our new news and blog section where we will share the latest updates about our plywood products, industry insights, and company news.',
    'Mega Plywood Team',
    NOW(),
    ARRAY['announcement', 'company', 'news'],
    'published'
),
(
    'Understanding Plywood Grades and Quality Standards',
    'understanding-plywood-grades-quality-standards',
    '<h1>Understanding Plywood Grades and Quality Standards</h1><p>When choosing plywood for your construction or furniture projects, understanding the different grades and quality standards is crucial for making the right decision.</p><h2>Plywood Grades Explained</h2><p>Plywood is typically graded based on the quality of the face and back veneers. The most common grading system includes:</p><ul><li><strong>A Grade:</strong> Smooth, paintable surface with minimal defects</li><li><strong>B Grade:</strong> Solid surface with some small defects</li><li><strong>C Grade:</strong> Some knots and defects, suitable for structural use</li><li><strong>D Grade:</strong> Large knots and defects, typically used for sheathing</li></ul><h2>Quality Standards</h2><p>At Mega Plywood Indonesia, we ensure all our products meet international quality standards including:</p><ul><li>ISO 9001:2015 Quality Management System</li><li>FSC (Forest Stewardship Council) certification</li><li>CE marking for European markets</li><li>JAS (Japanese Agricultural Standard) certification</li></ul><p>Contact us today to learn more about our quality standards and find the perfect plywood for your project.</p>',
    'Learn about plywood grades and quality standards to make informed decisions for your construction and furniture projects.',
    'Technical Team',
    NOW() - INTERVAL '1 day',
    ARRAY['plywood', 'quality', 'standards', 'grades'],
    'published'
),
(
    'Sustainable Forestry Practices in Indonesia',
    'sustainable-forestry-practices-indonesia',
    '<h1>Sustainable Forestry Practices in Indonesia</h1><p>At Mega Plywood Indonesia, we are committed to sustainable forestry practices that protect our environment while providing high-quality plywood products.</p><h2>Our Commitment to Sustainability</h2><p>We believe in responsible forest management and have implemented several initiatives:</p><ul><li>Selective logging practices that preserve forest ecosystems</li><li>Reforestation programs to maintain forest cover</li><li>Community engagement and local employment</li><li>Certification compliance with international standards</li></ul><h2>Environmental Benefits</h2><p>Our sustainable practices provide numerous environmental benefits:</p><ul><li>Carbon sequestration through managed forests</li><li>Biodiversity conservation</li><li>Soil protection and water conservation</li><li>Reduced environmental impact</li></ul><p>By choosing our products, you are supporting sustainable forestry practices and environmental conservation in Indonesia.</p>',
    'Learn about our commitment to sustainable forestry practices and environmental conservation in Indonesia.',
    'Sustainability Team',
    NOW() - INTERVAL '2 days',
    ARRAY['sustainability', 'forestry', 'environment', 'conservation'],
    'published'
);
