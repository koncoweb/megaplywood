import { Metadata } from 'next'
import { History, Clock, Globe, Factory } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Plywood History - Indonesian Plywood Industry Development',
  description: 'Learn about the long history of the plywood industry in Indonesia, from its early development to becoming one of the largest producers in the world.',
  keywords: ['plywood history', 'indonesian plywood industry', 'plywood development', 'construction history', 'wood industry'],
}

export default function SejarahPage() {
  const timeline = [
    {
      year: '1950s',
      title: 'Early Plywood Industry in Indonesia',
      description: 'The plywood industry began to develop in Indonesia with simple technology and limited production.',
      icon: History
    },
    {
      year: '1960-1970',
      title: 'Technology Development Era',
      description: 'Introduction of modern technology in plywood production and improved product quality.',
      icon: Factory
    },
    {
      year: '1980-1990',
      title: 'Plywood Export Boom',
      description: 'Indonesia became one of the world\'s largest plywood exporters with international quality standards.',
      icon: Globe
    },
    {
      year: '2000-Present',
      title: 'Modern and Sustainable Era',
      description: 'Focus on sustainable production, green technology, and innovation in the plywood industry.',
      icon: Clock
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Plywood History
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              The long journey of the plywood industry in Indonesia through the ages
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Development Timeline
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Let's see the journey of Indonesia's plywood industry from the beginning to the present
            </p>
          </div>

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="relative">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-gray-700 to-black rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="ml-8 flex-1">
                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <span className="text-black font-semibold text-lg">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-gray-600 mt-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-12 bg-gray-300"></div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Interesting Facts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1st</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Largest Producer</h3>
              <p className="text-gray-600">Indonesia is one of the world's largest plywood producers</p>
            </div>

            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">70+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Years of Experience</h3>
              <p className="text-gray-600">More than 70 years of experience in the plywood industry</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">100+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Export Countries</h3>
              <p className="text-gray-600">Indonesian plywood is exported to more than 100 countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Era Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Modern Plywood Era
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Today, Indonesia's plywood industry has developed into one of the most advanced in the world with modern technology and international quality standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Modern Technology</h4>
                    <p className="text-gray-600">Using cutting-edge technology in the production process</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">International Quality</h4>
                    <p className="text-gray-600">Quality standards recognized internationally</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sustainable</h4>
                    <p className="text-gray-600">Environmentally friendly and sustainable production practices</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                MegaPlywood Indonesia
              </h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-gray-800 to-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-3xl">MP</span>
                  </div>
                  <p className="text-gray-600">
                    As part of the long history of Indonesia's plywood industry, 
                    MegaPlywood is committed to continuously providing high-quality products 
                    by following the latest technological developments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
