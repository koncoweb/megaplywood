import { Metadata } from 'next'
import { Package, Download, Mail, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Plywood Samples - Dapatkan Free Sample dari MegaPlywood',
  description: 'Request sample plywood gratis dari MegaPlywood Indonesia. See and experience the quality of our products before deciding to purchase. Pengiriman sample ke seluruh Indonesia.',
  keywords: ['sample plywood', 'plywood gratis', 'request sample', 'kualitas plywood', 'test produk plywood'],
}

export default function SamplesPage() {
  const sampleTypes = [
    {
      name: 'Plywood Konstruksi',
      description: 'Sample plywood untuk kebutuhan konstruksi dengan berbagai ketebalan',
      sizes: ['6mm x 100mm x 100mm', '12mm x 100mm x 100mm', '18mm x 100mm x 100mm'],
      applications: ['Konstruksi bangunan', 'Atap dan dinding', 'Lantai']
    },
    {
      name: 'Plywood Furniture',
      description: 'Sample plywood premium untuk pembuatan furniture',
      sizes: ['9mm x 150mm x 150mm', '12mm x 150mm x 150mm'],
      applications: ['Kabinet', 'Meja dan kursi', 'Furniture custom']
    },
    {
      name: 'Marine Plywood',
      description: 'Sample plywood khusus untuk aplikasi marine',
      sizes: ['12mm x 100mm x 100mm', '18mm x 100mm x 100mm'],
      applications: ['Kapal dan perahu', 'Dek marina', 'Konstruksi basah']
    },
    {
      name: 'Plywood Decorative',
      description: 'Sample plywood dengan lapisan dekoratif',
      sizes: ['6mm x 100mm x 100mm', '9mm x 100mm x 100mm'],
      applications: ['Interior design', 'Wall paneling', 'Ceiling']
    }
  ]

  const benefits = [
    {
      icon: Package,
      title: 'Free Sample',
      description: 'Dapatkan sample plywood secara gratis tanpa biaya apapun'
    },
    {
      icon: Download,
      title: 'Pengiriman Cepat',
      description: 'Sample dikirim dalam 1-3 hari kerja ke seluruh Indonesia'
    },
    {
      icon: Mail,
      title: 'Konsultasi Gratis',
      description: 'Dapatkan konsultasi gratis dari tim ahli kami'
    },
    {
      icon: Phone,
      title: 'Follow Up',
      description: 'Tim kami akan follow up untuk memastikan kepuasan Anda'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Plywood Samples
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Get free plywood samples and experience the quality of our products
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Request Sample?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See and experience the quality of our products before deciding to purchase
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sample Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Sample Types
            </h2>
            <p className="text-lg text-gray-600">
              Choose the sample type that suits your project needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sampleTypes.map((sample, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {sample.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {sample.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Ukuran Sample:</h4>
                  <ul className="space-y-1">
                    {sample.sizes.map((size, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                        {size}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Aplikasi:</h4>
                  <div className="flex flex-wrap gap-2">
                    {sample.applications.map((app, idx) => (
                      <span key={idx} className="bg-gray-100 text-black text-xs px-2 py-1 rounded">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200">
                  Request Sample Ini
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Request Free Sample
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below to get free plywood samples
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="08123456789"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Shipping Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Complete address for sample delivery"
                />
              </div>

              <div>
                <label htmlFor="sampleType" className="block text-sm font-medium text-gray-700 mb-2">
                  Requested Sample Type *
                </label>
                <select
                  id="sampleType"
                  name="sampleType"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                >
                  <option value="">Choose sample type</option>
                  <option value="construction">Plywood Konstruksi</option>
                  <option value="furniture">Plywood Furniture</option>
                  <option value="marine">Marine Plywood</option>
                  <option value="decorative">Plywood Decorative</option>
                  <option value="all">Semua Jenis</option>
                </select>
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description
                </label>
                <textarea
                  id="project"
                  name="project"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Tell us about your project and plywood needs"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
              >
                Send Sample Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need Help?
            </h2>
            <p className="text-lg text-gray-600">
              Our customer service team is ready to help you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+62 21 1234 5678</p>
              <p className="text-sm text-gray-500">Senin - Jumat: 08:00 - 17:00</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">samples@megaplywood.id</p>
              <p className="text-sm text-gray-500">Response within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-600">Jakarta, Indonesia</p>
              <p className="text-sm text-gray-500">Visit our showroom</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
