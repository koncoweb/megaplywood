import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { mockBlogDb } from '@/lib/mock-data'
import { formatDate, getReadingTime, getFeaturedImageUrl } from '@/lib/blog-utils'
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await mockBlogDb.getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Link
          href="/berita"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to News
        </Link>
      </div>

      {/* Article Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Featured Image */}
            <div className="relative h-64 md:h-96 w-full">
              <Image
                src={getFeaturedImageUrl(post)}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="p-8">
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center justify-between text-gray-600 mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center space-x-6 mb-4 md:mb-0">
                  <div className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{formatDate(post.published_at)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{getReadingTime(post.content)} min read</span>
                  </div>
                </div>
                
                <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </button>
              </div>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Author Bio */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {post.author.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {post.author}
                    </h3>
                    <p className="text-gray-600">
                      Content writer at Mega Plywood Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Related Posts or Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">
                Interested in Our Plywood Products?
              </h2>
              <p className="text-lg opacity-90 mb-6">
                Contact us for more information about our high-quality plywood products and services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/products"
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Generate static params for better performance (optional)
export async function generateStaticParams() {
  const posts = await mockBlogDb.getPublishedPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
