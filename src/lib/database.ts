// Database configuration for both Neon DB and Supabase
// Set DATABASE_TYPE environment variable to 'neon' or 'supabase'

import { createClient } from '@supabase/supabase-js'
import { Pool } from 'pg'

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

export interface DatabaseConfig {
  type: 'neon' | 'supabase'
  url: string
  key?: string // For Supabase
}

// Get database configuration from environment variables
export function getDatabaseConfig(): DatabaseConfig {
  const type = process.env.DATABASE_TYPE as 'neon' | 'supabase'
  
  if (type === 'supabase') {
    return {
      type: 'supabase',
      url: process.env.SUPABASE_URL!,
      key: process.env.SUPABASE_ANON_KEY!
    }
  } else {
    return {
      type: 'neon',
      url: process.env.DATABASE_URL!
    }
  }
}

// Supabase client
let supabaseClient: any = null

export function getSupabaseClient() {
  if (!supabaseClient) {
    const config = getDatabaseConfig()
    if (config.type === 'supabase') {
      supabaseClient = createClient(config.url, config.key!)
    }
  }
  return supabaseClient
}

// Neon DB client
let neonClient: Pool | null = null

export function getNeonClient() {
  if (!neonClient) {
    const config = getDatabaseConfig()
    if (config.type === 'neon') {
      neonClient = new Pool({
        connectionString: config.url,
        ssl: {
          rejectUnauthorized: false
        }
      })
    }
  }
  return neonClient
}

// Generic database operations
export class BlogDatabase {
  private config: DatabaseConfig

  constructor() {
    this.config = getDatabaseConfig()
  }

  async getAllPosts(): Promise<BlogPost[]> {
    if (this.config.type === 'supabase') {
      return this.getAllPostsSupabase()
    } else {
      return this.getAllPostsNeon()
    }
  }

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    if (this.config.type === 'supabase') {
      return this.getPostBySlugSupabase(slug)
    } else {
      return this.getPostBySlugNeon(slug)
    }
  }

  async getPublishedPosts(): Promise<BlogPost[]> {
    if (this.config.type === 'supabase') {
      return this.getPublishedPostsSupabase()
    } else {
      return this.getPublishedPostsNeon()
    }
  }

  // Supabase implementations
  private async getAllPostsSupabase(): Promise<BlogPost[]> {
    const supabase = getSupabaseClient()
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('published_at', { ascending: false })

    if (error) {
      console.error('Error fetching posts:', error)
      return []
    }

    return data || []
  }

  private async getPostBySlugSupabase(slug: string): Promise<BlogPost | null> {
    const supabase = getSupabaseClient()
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single()

    if (error) {
      console.error('Error fetching post:', error)
      return null
    }

    return data
  }

  private async getPublishedPostsSupabase(): Promise<BlogPost[]> {
    const supabase = getSupabaseClient()
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false })

    if (error) {
      console.error('Error fetching published posts:', error)
      return []
    }

    return data || []
  }

  // Neon implementations
  private async getAllPostsNeon(): Promise<BlogPost[]> {
    const client = getNeonClient()
    try {
      const result = await client.query(
        'SELECT * FROM blog_posts ORDER BY published_at DESC'
      )
      return result.rows
    } catch (error) {
      console.error('Error fetching posts:', error)
      return []
    }
  }

  private async getPostBySlugNeon(slug: string): Promise<BlogPost | null> {
    const client = getNeonClient()
    try {
      const result = await client.query(
        'SELECT * FROM blog_posts WHERE slug = $1 AND status = $2',
        [slug, 'published']
      )
      return result.rows[0] || null
    } catch (error) {
      console.error('Error fetching post:', error)
      return null
    }
  }

  private async getPublishedPostsNeon(): Promise<BlogPost[]> {
    const client = getNeonClient()
    try {
      const result = await client.query(
        'SELECT * FROM blog_posts WHERE status = $1 ORDER BY published_at DESC',
        ['published']
      )
      return result.rows
    } catch (error) {
      console.error('Error fetching published posts:', error)
      return []
    }
  }
}

// Export singleton instance
export const blogDb = new BlogDatabase()
