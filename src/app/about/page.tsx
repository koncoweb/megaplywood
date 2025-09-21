import { Metadata } from 'next'
import Image from 'next/image'
import { Users, Award, Target, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Mega Plywood Indonesia Leading Manufacturer',
  description: 'Learn more about Mega Plywood Indonesia, a leading plywood manufacturer founded in 2016, located in Central Java, serving customers worldwide with quality javanese wood plywoods.',
  keywords: ['about mega plywood', 'plywood manufacturer', 'indonesian plywood', 'central java plywood', 'javanese wood', 'company history', 'vision mission'],
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
    { year: '2016', title: 'Company Establishment', description: 'Mega Plywood was founded as a leading plywood manufacturer in Indonesia' },
    { year: '2018', title: 'Central Java Production', description: 'Established production facility in Central Java for javanese wood plywoods' },
    { year: '2020', title: 'Global Expansion', description: 'Expanded to serve customers worldwide with various wood types' },
    { year: '2022', title: 'Quality Certification', description: 'Obtained international quality standards for plywood production' },
    { year: '2024', title: 'Digital Platform', description: 'Launched comprehensive online platform for customer engagement' }
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
                Mega Plywood is a leading Plywood Manufacturer in Indonesia. Mega Plywood focuses on providing quality Indonesian Plywood with various types of specifications. Mega Plywood is able to provide various types of plywood to all customers from all over the world and Indonesia, so whatever amount of plywood you request, we can fulfill it.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2016, Our Company Focuses on providing Plywood Needs in several Region of Indonesia and globally for industrial Citizen plywood needs.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We Are Located in Central Java, so we can easily produce best javanese wood plywoods. In central Java, you can find various types of wood such as: Albizia Falcata, Meranti, Havea Brasiliensis, Mahogany, Tectona Grandis and Pine wood.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                As Indonesian Plywood Manufacture, But we also Produce other kinds of plywoods other than javanese woods material.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                In this website we will explain our various kinds of plywood production to meet your company&apos;s needs. We are ready to hold face-to-face or online discussions to reach a mutual agreement regarding the plywood production you need.
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
                <div className="w-32 h-32 relative mx-auto mb-6">
                  <Image
                    src="/images/static/logos/logo-megaplywoodindonesia.png"
                    alt="MegaPlywood Indonesia"
                    fill
                    className="object-contain"
                  />
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
                    <p className="text-2xl font-bold text-black">8+</p>
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
              Wood Types We Use
            </h2>
            <p className="text-lg text-gray-600">
              Premium quality wood materials from Central Java forests
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {['Albizia Falcata', 'Meranti', 'Hevea Brasiliensis', 'Mahogany', 'Tectona Grandis', 'Pine Wood'].map((wood, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-black rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">🌳</span>
                </div>
                <p className="text-sm font-medium text-gray-900">{wood}</p>
              </div>
            ))}
          </div>

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

      {/* Central Java Production Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Central Java Production Hub
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Located in the heart of Central Java, we have direct access to premium javanese wood resources. This strategic location allows us to produce the finest quality plywood using traditional and modern manufacturing techniques.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our Central Java facility enables us to source various types of wood including Albizia Falcata, Meranti, Hevea Brasiliensis, Mahogany, Tectona Grandis, and Pine wood directly from local forests.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">📍</span>
                  <span className="text-gray-700">Central Java, Indonesia</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2">🏭</span>
                  <span className="text-gray-700">Manufacturing Plant</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Production Capabilities</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  <span className="text-gray-700">Javanese Wood Plywood</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  <span className="text-gray-700">Various Wood Types</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  <span className="text-gray-700">Custom Specifications</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  <span className="text-gray-700">Large Volume Production</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  <span className="text-gray-700">Quality Control Standards</span>
                </li>
              </ul>
            </div>
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
                Providing high-quality plywood at competitive prices, providing the best service to customers, and contributing to Indonesia&apos;s sustainable infrastructure development.
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
