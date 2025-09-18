import { Metadata } from 'next'
import { Users, Award, Target, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - MegaPlywood Indonesia Trusted Distributor',
  description: 'Learn more about MegaPlywood Indonesia, a trusted plywood distributor with years of experience in the Indonesian plywood industry.',
  keywords: ['about megaplywood', 'plywood company', 'trusted distributor', 'company history', 'vision mission'],
}

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Guaranteed Quality',
      description: 'We are committed to providing plywood products with the highest quality standards'
    },
    {
      icon: Users,
      title: 'Best Service',
      description: 'Our professional team is ready to serve your plywood needs with friendly and responsive service'
    },
    {
      icon: Target,
      title: 'Competitive Pricing',
      description: 'We offer competitive prices without sacrificing product quality'
    },
    {
      icon: Globe,
      title: 'Wide Reach',
      description: 'Serving customers throughout Indonesia with a wide distribution network'
    }
  ]

  const milestones = [
    { year: '2010', title: 'Company Establishment', description: 'MegaPlywood Indonesia was founded with the vision of becoming a trusted plywood distributor' },
    { year: '2015', title: 'Network Expansion', description: 'Expanding distribution network throughout Indonesia' },
    { year: '2018', title: 'ISO Certification', description: 'Obtained ISO 9001:2015 certification for quality management system' },
    { year: '2020', title: 'Digital Transformation', description: 'Launched digital platform for easy ordering' },
    { year: '2024', title: 'Product Expansion', description: 'Added various plywood variants for more specific needs' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              MegaPlywood Indonesia - Trusted Plywood Distributor
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                MegaPlywood Indonesia was founded with the vision of becoming a trusted plywood distributor that provides high-quality products at competitive prices. Since 2010, we have served thousands of customers throughout Indonesia.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With years of experience in the plywood industry, we understand customer needs and are committed to providing the best solutions. Our professional team is ready to help you choose the right products for your construction or furniture projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/products" className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 text-center">
                  View Our Products
                </a>
                <a href="/contact" className="border-2 border-black hover:bg-black text-black hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 text-center">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-gray-800 to-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-4xl">MP</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  MEGA PLYWOOD
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  INDONESIA
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-black">1000+</p>
                    <p className="text-sm text-gray-600">Satisfied Customers</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-black">14+</p>
                    <p className="text-sm text-gray-600">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              Principles that form the foundation in every service we provide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Important milestones in the journey of MegaPlywood Indonesia
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-gray-700 to-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{milestone.year}</span>
                </div>
                <div className="ml-8 flex-1">
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To become the leading plywood distributor in Indonesia known for product quality, best service, and continuous innovation in meeting construction and furniture needs.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700">
                Providing high-quality plywood at competitive prices, providing the best service to customers, and contributing to Indonesia's sustainable infrastructure development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Thousands of Satisfied Customers
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Get high-quality plywood products with the best service from our professional team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/products" className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              View Products
            </a>
            <a href="/contact" className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
