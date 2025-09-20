import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-red-600 text-4xl font-bold">404</span>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Post Not Found
          </h1>
          
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist or may have been removed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/berita"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Link>
            
            <Link
              href="/"
              className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
