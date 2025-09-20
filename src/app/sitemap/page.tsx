import React from 'react'
import Link from 'next/link'
import { Map, ArrowRight, Calendar, Globe } from 'lucide-react'

export default function SitemapPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  const siteStructure = [
    {
      title: 'Home',
      url: '/',
      description: 'Main landing page of Mega Plywood Indonesia',
      priority: 'High'
    },
    {
      title: 'About Us',
      url: '/about',
      description: 'Learn about our company history and mission',
      priority: 'High'
    },
    {
      title: 'Contact',
      url: '/contact',
      description: 'Get in touch with our team',
      priority: 'High'
    },
    {
      title: 'Plywood History',
      url: '/history',
      description: 'Discover the history of plywood manufacturing',
      priority: 'Medium'
    },
    {
      title: 'Our Products',
      url: '/products',
      description: 'Explore our range of plywood products',
      priority: 'High'
    },
    {
      title: 'Product Specifications',
      url: '/specifications',
      description: 'Detailed specifications of our plywood products',
      priority: 'High'
    },
    {
      title: 'Services',
      url: '/services',
      description: 'Our plywood-related services and support',
      priority: 'High'
    },
    {
      title: 'Free Samples',
      url: '/samples',
      description: 'Request free plywood samples',
      priority: 'High'
    },
    {
      title: 'Projects Portfolio',
      url: '/projects-portofolio',
      description: 'View our completed projects and portfolio',
      priority: 'High'
    },
    {
      title: 'News & Blog',
      url: '/berita',
      description: 'Latest news and insights from our industry',
      priority: 'High'
    },
    {
      title: 'Privacy Policy',
      url: '/privacy',
      description: 'Our privacy policy and data protection practices',
      priority: 'Low'
    },
    {
      title: 'Terms & Conditions',
      url: '/terms',
      description: 'Terms of service and conditions of use',
      priority: 'Low'
    }
  ]

  const blogPosts = [
    {
      title: 'Welcome to Mega Plywood Indonesia News',
      url: '/berita/welcome-to-mega-plywood-indonesia-news',
      description: 'Introduction to our news section'
    },
    {
      title: 'Understanding Plywood Grades and Quality Standards',
      url: '/berita/understanding-plywood-grades-quality-standards',
      description: 'Comprehensive guide to plywood grading'
    },
    {
      title: 'Sustainable Forestry Practices in Indonesia',
      url: '/berita/sustainable-forestry-practices-indonesia',
      description: 'Our commitment to sustainable forestry'
    },
    {
      title: 'Indonesian Plywood Export Market Trends 2024',
      url: '/berita/indonesian-plywood-export-market-trends-2024',
      description: 'Market insights and trends for 2024'
    },
    {
      title: 'Choosing the Right Plywood for Your Construction Project',
      url: '/berita/choosing-right-plywood-construction-project',
      description: 'Guide to selecting appropriate plywood'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Map className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sitemap
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Navigate through all pages of Mega Plywood Indonesia website
            </p>
            <p className="text-sm opacity-75 mt-4">
              Last updated: {currentDate}
            </p>
          </div>
        </div>
      </div>

      {/* Sitemap Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Pages */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Globe className="w-6 h-6 mr-2 text-blue-600" />
              Main Website Pages
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {siteStructure.map((page, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <Link 
                        href={page.url}
                        className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors flex items-center"
                      >
                        {page.title}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">{page.description}</p>
                      <p className="text-xs text-gray-500 mt-2">URL: {page.url}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      page.priority === 'High' 
                        ? 'bg-green-100 text-green-800' 
                        : page.priority === 'Medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {page.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Blog Posts */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-blue-600" />
              Blog Posts & News Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <Link 
                    href={post.url}
                    className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors flex items-center"
                  >
                    {post.title}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <p className="text-gray-600 text-sm mt-1">{post.description}</p>
                  <p className="text-xs text-gray-500 mt-2">URL: {post.url}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SEO Information */}
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              SEO Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">XML Sitemap</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Our XML sitemap is automatically generated and updated. It includes all pages with proper priority and change frequency settings.
                </p>
                <Link 
                  href="/sitemap.xml"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View XML Sitemap →
                </Link>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Robots.txt</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Our robots.txt file guides search engine crawlers on which pages to index and which to avoid.
                </p>
                <Link 
                  href="/robots.txt"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View Robots.txt →
                </Link>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
