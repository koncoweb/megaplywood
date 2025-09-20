import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/lib/mock-data'
import { formatDate, generateExcerpt, getReadingTime, getFeaturedImageUrl } from '@/lib/blog-utils'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const cardClasses = featured 
    ? "md:col-span-2 lg:col-span-2" 
    : ""

  return (
    <article className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${cardClasses}`}>
      {/* Featured Image */}
      <div className={`relative w-full ${featured ? 'h-64' : 'h-48'}`}>
        <Image
          src={getFeaturedImageUrl(post)}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.tags[0] || 'News'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className={`font-bold text-gray-800 mb-3 line-clamp-2 ${featured ? 'text-2xl' : 'text-xl'}`}>
          {post.title}
        </h2>
        
        <p className={`text-gray-600 mb-4 ${featured ? 'line-clamp-4' : 'line-clamp-3'}`}>
          {post.excerpt || generateExcerpt(post.content)}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {formatDate(post.published_at)}
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {getReadingTime(post.content)} min read
          </div>
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, featured ? 4 : 3).map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > (featured ? 4 : 3) && (
              <span className="text-gray-400 text-xs">
                +{post.tags.length - (featured ? 4 : 3)} more
              </span>
            )}
          </div>
        )}

        {/* Read More Button */}
        <Link
          href={`/berita/${post.slug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          Read More
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </article>
  )
}
