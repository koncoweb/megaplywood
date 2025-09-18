import { Metadata } from 'next'
import { Package, Shield, Star, Truck } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Products - High Quality Plywood from MegaPlywood',
  description: 'Discover various types of high-quality plywood from MegaPlywood Indonesia. From construction plywood, furniture, to marine grade with guaranteed quality.',
  keywords: ['plywood products', 'construction plywood', 'furniture plywood', 'marine plywood', 'high quality plywood', 'plywood types'],
}

export default function ProdukPage() {
  const products = [
    {
      name: 'Construction Plywood',
      description: 'Plywood specifically for construction needs with high durability and good stability.',
      features: ['Thickness 6mm - 25mm', 'Grade A-B', 'Water Resistant', 'Strong Structure'],
      image: '/products/construction-plywood.jpg',
      applications: ['Building Construction', 'Roof and Walls', 'Flooring', 'Load Bearing Structure']
    },
    {
      name: 'Furniture Plywood',
      description: 'Premium plywood for furniture making with perfect finishing.',
      features: ['Smooth Surface', 'Grade A-A', 'Easy to Paint', 'Stable Structure'],
      image: '/products/furniture-plywood.jpg',
      applications: ['Cabinets', 'Tables and Chairs', 'Wardrobes', 'Custom Furniture']
    },
    {
      name: 'Marine Plywood',
      description: 'Plywood specifically for marine applications with water and extreme weather resistance.',
      features: ['Water Proof', 'Weather Resistant', 'Anti Fungus', 'Long Lasting'],
      image: '/products/marine-plywood.jpg',
      applications: ['Ships and Boats', 'Marina Deck', 'Wet Construction', 'Outdoor Areas']
    },
    {
      name: 'Decorative Plywood',
      description: 'Plywood with decorative layers for attractive interior applications.',
      features: ['Various Finishes', 'Easy Installation', 'Cost Effective', 'Beautiful Look'],
      image: '/products/decorative-plywood.jpg',
      applications: ['Interior Design', 'Wall Paneling', 'Ceiling', 'Decorative Elements']
    }
  ]

  const specifications = [
    { spec: 'Thickness', value: '6mm - 25mm' },
    { spec: 'Standard Size', value: '1220mm x 2440mm' },
    { spec: 'Quality Grade', value: 'A-A, A-B, B-B' },
    { spec: 'Moisture Content', value: '8-12%' },
    { spec: 'Density', value: '0.6-0.8 g/cm³' },
    { spec: 'Modulus of Elasticity', value: '8,000-12,000 N/mm²' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Plywoods
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Complete collection of high-quality plywood for all construction and furniture needs
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every plywood product we produce meets the highest quality standards to ensure customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-gray-700 to-black flex items-center justify-center">
                  <Package className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Main Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/kontak"
                    className="w-full bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 text-center block"
                  >
                    Product Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-gray-600">
              Quality standards we use for all plywood products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {spec.spec}
                </h3>
                <p className="text-2xl font-bold text-black">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Assurance
            </h2>
            <p className="text-lg text-gray-600">
              Why MegaPlywood products become the trusted choice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Guaranteed Quality</h3>
              <p className="text-gray-600">Every product goes through strict quality control according to international standards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Grade</h3>
              <p className="text-gray-600">Using the best materials with A-A grade for maximum results</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Fast and secure delivery service throughout Indonesia</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customization</h3>
              <p className="text-gray-600">We can produce plywood according to your specific needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Butuh Product Consultation?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you choose the right plywood for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontak"
              className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              href="/samples"
              className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Request Sample
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
