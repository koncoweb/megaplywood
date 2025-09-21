// Blog utility functions
import { BlogPost } from './mock-data'

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim()
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function generateExcerpt(content: string, maxLength: number = 150): string {
  // Remove HTML tags and get plain text
  const plainText = content.replace(/<[^>]*>/g, '')
  
  if (plainText.length <= maxLength) {
    return plainText
  }
  
  return plainText.substring(0, maxLength).trim() + '...'
}

export function getReadingTime(content: string): number {
  // Average reading speed: 200 words per minute
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

export function extractTags(content: string): string[] {
  // Simple tag extraction - you can enhance this based on your needs
  const tagRegex = /#(\w+)/g
  const matches = content.match(tagRegex)
  return matches ? matches.map(tag => tag.substring(1)) : []
}

export function validateBlogPost(post: Partial<BlogPost>): string[] {
  const errors: string[] = []
  
  if (!post.title || post.title.trim().length === 0) {
    errors.push('Title is required')
  }
  
  if (!post.content || post.content.trim().length === 0) {
    errors.push('Content is required')
  }
  
  if (!post.author || post.author.trim().length === 0) {
    errors.push('Author is required')
  }
  
  if (post.title && post.title.length > 200) {
    errors.push('Title must be less than 200 characters')
  }
  
  if (post.content && post.content.length > 50000) {
    errors.push('Content must be less than 50,000 characters')
  }
  
  return errors
}

export function sanitizeContent(content: string): string {
  // Basic HTML sanitization - you might want to use a library like DOMPurify for production
  return content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '') // Remove iframe tags
    .replace(/on\w+="[^"]*"/gi, '') // Remove event handlers
    .replace(/javascript:/gi, '') // Remove javascript: protocols
}

export function getFeaturedImageUrl(post: BlogPost): string {
  if (post.featured_image) {
    return post.featured_image
  }
  
  // Default featured image based on tags or content
  const defaultImages = {
    'plywood': '/images/static/products/indonesian-meranti-plywood-distributor.png',
    'construction': '/images/static/gallery/packaging-min.jpeg',
    'furniture': '/images/static/products/indonesian-blockboard-plywood-distributor.png',
    'default': '/images/static/hero/megaplywood-indonesian-plywood-sml.png'
  }
  
  // Check if any tags match our default categories
  for (const tag of post.tags) {
    if (defaultImages[tag.toLowerCase() as keyof typeof defaultImages]) {
      return defaultImages[tag.toLowerCase() as keyof typeof defaultImages]
    }
  }
  
  return defaultImages.default
}
