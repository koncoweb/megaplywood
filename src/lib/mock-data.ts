// Mock data for blog posts - placeholder until database is integrated
export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  featured_image?: string
  author: string
  published_at: string
  created_at: string
  updated_at: string
  tags: string[]
  status: 'draft' | 'published'
}

// Mock blog posts data
export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Welcome to Mega Plywood Indonesia News',
    slug: 'welcome-to-mega-plywood-indonesia-news',
    content: `
      <h1>Welcome to Our News Section</h1>
      <p>We are excited to launch our new news and blog section where we will share the latest updates about our plywood products, industry insights, and company news.</p>
      
      <h2>What You Can Expect</h2>
      <ul>
        <li>Latest product updates and specifications</li>
        <li>Industry trends and market insights</li>
        <li>Company news and announcements</li>
        <li>Tips for choosing the right plywood for your projects</li>
      </ul>
      
      <p>Stay tuned for regular updates and valuable content from our team of experts.</p>
      
      <h2>Our Commitment</h2>
      <p>At Mega Plywood Indonesia, we are committed to providing high-quality plywood products and excellent customer service. Our news section will keep you informed about our latest developments and industry insights.</p>
    `,
    excerpt: 'We are excited to launch our new news and blog section where we will share the latest updates about our plywood products, industry insights, and company news.',
    author: 'Mega Plywood Team',
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    tags: ['announcement', 'company', 'news'],
    status: 'published'
  },
  {
    id: '2',
    title: 'Understanding Plywood Grades and Quality Standards',
    slug: 'understanding-plywood-grades-quality-standards',
    content: `
      <h1>Understanding Plywood Grades and Quality Standards</h1>
      <p>When choosing plywood for your construction or furniture projects, understanding the different grades and quality standards is crucial for making the right decision.</p>
      
      <h2>Plywood Grades Explained</h2>
      <p>Plywood is typically graded based on the quality of the face and back veneers. The most common grading system includes:</p>
      <ul>
        <li><strong>A Grade:</strong> Smooth, paintable surface with minimal defects</li>
        <li><strong>B Grade:</strong> Solid surface with some small defects</li>
        <li><strong>C Grade:</strong> Some knots and defects, suitable for structural use</li>
        <li><strong>D Grade:</strong> Large knots and defects, typically used for sheathing</li>
      </ul>
      
      <h2>Quality Standards</h2>
      <p>At Mega Plywood Indonesia, we ensure all our products meet international quality standards including:</p>
      <ul>
        <li>ISO 9001:2015 Quality Management System</li>
        <li>FSC (Forest Stewardship Council) certification</li>
        <li>CE marking for European markets</li>
        <li>JAS (Japanese Agricultural Standard) certification</li>
      </ul>
      
      <h2>Choosing the Right Grade</h2>
      <p>The grade you choose depends on your specific application:</p>
      <ul>
        <li><strong>Furniture making:</strong> A or B grade for visible surfaces</li>
        <li><strong>Construction:</strong> C or D grade for structural applications</li>
        <li><strong>Exterior use:</strong> Marine grade or treated plywood</li>
      </ul>
      
      <p>Contact us today to learn more about our quality standards and find the perfect plywood for your project.</p>
    `,
    excerpt: 'Learn about plywood grades and quality standards to make informed decisions for your construction and furniture projects.',
    author: 'Technical Team',
    published_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    tags: ['plywood', 'quality', 'standards', 'grades'],
    status: 'published'
  },
  {
    id: '3',
    title: 'Sustainable Forestry Practices in Indonesia',
    slug: 'sustainable-forestry-practices-indonesia',
    content: `
      <h1>Sustainable Forestry Practices in Indonesia</h1>
      <p>At Mega Plywood Indonesia, we are committed to sustainable forestry practices that protect our environment while providing high-quality plywood products.</p>
      
      <h2>Our Commitment to Sustainability</h2>
      <p>We believe in responsible forest management and have implemented several initiatives:</p>
      <ul>
        <li>Selective logging practices that preserve forest ecosystems</li>
        <li>Reforestation programs to maintain forest cover</li>
        <li>Community engagement and local employment</li>
        <li>Certification compliance with international standards</li>
      </ul>
      
      <h2>Environmental Benefits</h2>
      <p>Our sustainable practices provide numerous environmental benefits:</p>
      <ul>
        <li>Carbon sequestration through managed forests</li>
        <li>Biodiversity conservation</li>
        <li>Soil protection and water conservation</li>
        <li>Reduced environmental impact</li>
      </ul>
      
      <h2>Certification and Compliance</h2>
      <p>We maintain several important certifications:</p>
      <ul>
        <li>FSC (Forest Stewardship Council) certification</li>
        <li>PEFC (Programme for the Endorsement of Forest Certification)</li>
        <li>ISO 14001 Environmental Management System</li>
      </ul>
      
      <p>By choosing our products, you are supporting sustainable forestry practices and environmental conservation in Indonesia.</p>
    `,
    excerpt: 'Learn about our commitment to sustainable forestry practices and environmental conservation in Indonesia.',
    author: 'Sustainability Team',
    published_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    tags: ['sustainability', 'forestry', 'environment', 'conservation'],
    status: 'published'
  },
  {
    id: '4',
    title: 'Indonesian Plywood Export Market Trends 2024',
    slug: 'indonesian-plywood-export-market-trends-2024',
    content: `
      <h1>Indonesian Plywood Export Market Trends 2024</h1>
      <p>The Indonesian plywood industry continues to show strong growth in international markets, with increasing demand from key regions around the world.</p>
      
      <h2>Key Market Trends</h2>
      <p>Several important trends are shaping the Indonesian plywood export market:</p>
      <ul>
        <li>Growing demand from construction sectors in Asia-Pacific</li>
        <li>Increased focus on sustainable and certified products</li>
        <li>Rising prices due to supply chain challenges</li>
        <li>Expansion into new markets in Africa and Latin America</li>
      </ul>
      
      <h2>Top Export Destinations</h2>
      <p>Our main export markets include:</p>
      <ul>
        <li><strong>Japan:</strong> High-quality construction plywood</li>
        <li><strong>South Korea:</strong> Furniture and interior applications</li>
        <li><strong>Middle East:</strong> Construction and infrastructure projects</li>
        <li><strong>Europe:</strong> Sustainable and certified products</li>
      </ul>
      
      <h2>Future Outlook</h2>
      <p>The outlook for 2024 remains positive, with expected growth in:</p>
      <ul>
        <li>Premium grade plywood products</li>
        <li>Specialized applications (marine, fire-resistant)</li>
        <li>Eco-friendly and sustainable options</li>
      </ul>
      
      <p>Mega Plywood Indonesia is well-positioned to capitalize on these trends with our high-quality products and sustainable practices.</p>
    `,
    excerpt: 'Explore the latest trends in Indonesian plywood exports and market opportunities for 2024.',
    author: 'Market Research Team',
    published_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    tags: ['export', 'market', 'trends', 'indonesia'],
    status: 'published'
  },
  {
    id: '5',
    title: 'Choosing the Right Plywood for Your Construction Project',
    slug: 'choosing-right-plywood-construction-project',
    content: `
      <h1>Choosing the Right Plywood for Your Construction Project</h1>
      <p>Selecting the appropriate plywood for your construction project is crucial for ensuring durability, safety, and cost-effectiveness.</p>
      
      <h2>Factors to Consider</h2>
      <p>When choosing plywood, consider these important factors:</p>
      <ul>
        <li><strong>Application:</strong> Structural, sheathing, or finishing</li>
        <li><strong>Environment:</strong> Indoor, outdoor, or marine conditions</li>
        <li><strong>Load requirements:</strong> Weight and stress the plywood will bear</li>
        <li><strong>Budget:</strong> Balance between quality and cost</li>
      </ul>
      
      <h2>Common Applications</h2>
      <p>Different types of plywood are suitable for various applications:</p>
      <ul>
        <li><strong>Structural plywood:</strong> For load-bearing applications</li>
        <li><strong>Exterior plywood:</strong> For outdoor construction</li>
        <li><strong>Marine plywood:</strong> For water-resistant applications</li>
        <li><strong>Decorative plywood:</strong> For visible surfaces and furniture</li>
      </ul>
      
      <h2>Quality Indicators</h2>
      <p>Look for these quality indicators when selecting plywood:</p>
      <ul>
        <li>Proper certification marks</li>
        <li>Consistent thickness throughout the sheet</li>
        <li>Minimal voids or gaps in the core</li>
        <li>Smooth, defect-free surface</li>
      </ul>
      
      <p>Contact our technical team for personalized recommendations based on your specific project requirements.</p>
    `,
    excerpt: 'Learn how to choose the right plywood for your construction project with our comprehensive guide.',
    author: 'Technical Team',
    published_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
    created_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    tags: ['construction', 'plywood', 'guide', 'selection'],
    status: 'published'
  }
]

// Mock database functions
export class MockBlogDatabase {
  async getAllPosts(): Promise<BlogPost[]> {
    return mockBlogPosts
  }

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    return mockBlogPosts.find(post => post.slug === slug) || null
  }

  async getPublishedPosts(): Promise<BlogPost[]> {
    return mockBlogPosts.filter(post => post.status === 'published')
  }
}

// Export singleton instance
export const mockBlogDb = new MockBlogDatabase()
