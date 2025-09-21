import { Metadata } from 'next'
import { Package, Shield, Star, CheckCircle, TreePine, Zap, Leaf, Award } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Indonesia Plywood Specifications - Technical Details & Standards | MegaPlywood',
  description: 'Complete Indonesia plywood specifications including Albasia Plywood, Hardwood Plywood, Filmface, Blockboard, Combine Plywood, and Three Layer. JAS, EN, IHPA 1997, and JPIC compliant plywood from MegaPlywood Indonesia.',
  keywords: [
    'indonesia plywood specifications', 'plywood technical specifications', 'meranti plywood specs',
    'softwood plywood specifications', 'filmface plywood specs', 'blockboard specifications',
    'JAS compliant plywood', 'EN standard plywood', 'IHPA 1997 plywood',
    'JPIC plywood standards', 'indonesian plywood grades', 'plywood thickness specifications'
  ],
  openGraph: {
    title: 'Indonesia Plywood Specifications - Technical Details & Standards',
    description: 'Complete technical specifications for all Indonesian plywood types including grades, thicknesses, sizes, and compliance standards.',
    type: 'website',
    images: [
      {
        url: '/images/static/products/plywood-specifications.jpg',
        width: 1200,
        height: 630,
        alt: 'Indonesia Plywood Specifications - MegaPlywood',
      },
    ],
  },
}

export default function PlywoodSpecificationsPage() {
  const specifications = [
    {
      name: 'Albasia Plywood (Softwood)',
      subtitle: 'Albasia Based Plywood',
      description: 'High-quality softwood plywood made from Albasia wood, perfect for construction and general building applications.',
      specs: {
        'Board Size': 'Thick x 1220 x 2440 mm',
        'Face/Back': 'Albasia',
        'Core': 'Albasia',
        'Glue': 'MR Standard, CARB',
        'Grade': 'UTY Better'
      },
      icon: TreePine,
      color: 'from-green-600 to-green-800',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      name: 'Hardwood Plywood',
      subtitle: 'Premium Hardwood Plywood',
      description: 'Premium quality hardwood plywood made from Meranti and Keruing with mixed hardwood cores for superior strength.',
      specs: {
        'Board Size': 'Thick x 1220 x 2440 mm',
        'Face/Back': 'Meranti, Keruing',
        'Core': 'Mix Mahogany, Cadamba',
        'Glue': 'MR Standard, WBP Phenol, CARB',
        'Grade': 'UTY Better'
      },
      icon: Star,
      color: 'from-amber-600 to-amber-800',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200'
    },
    {
      name: 'Filmface',
      subtitle: 'Film Coated Plywood',
      description: 'High-quality plywood with film coating for superior surface finish and durability, perfect for construction and furniture applications.',
      specs: {
        'Board Size': 'Thick x 1220 x 2440 mm',
        'Face/Back': 'Film',
        'Core': 'Mix Mahogany, Cadamba, Rubber Wood',
        'Glue': 'WBP Phenol',
        'Grade': 'UTY Better'
      },
      icon: Shield,
      color: 'from-blue-600 to-blue-800',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      name: 'Blockboard',
      subtitle: 'Block Core Plywood',
      description: 'Premium blockboard plywood with solid wood core, offering excellent strength and stability for furniture and construction applications.',
      specs: {
        'Board Size': 'Thick x 1220 x 2440 mm',
        'Face/Back': 'Albasia, Meranti',
        'Core': 'Albasia',
        'Glue': 'MR Standard',
        'Grade': 'UTY Better'
      },
      icon: Package,
      color: 'from-purple-600 to-purple-800',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      name: 'Combine Plywood',
      subtitle: 'Mixed Wood Core Plywood',
      description: 'Versatile plywood combining Meranti and Keruing face with mixed wood cores, offering excellent value and performance.',
      specs: {
        'Board Size': 'Thick x 1220 x 2440 mm',
        'Face/Back': 'Meranti, Keruing',
        'Core': 'Mix Albasia, Mahogany',
        'Glue': 'MR Standard, CARB',
        'Grade': 'UTY Better'
      },
      icon: Leaf,
      color: 'from-emerald-600 to-emerald-800',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200'
    },
    {
      name: 'Three Layer',
      subtitle: 'Three Layer Construction Plywood',
      description: 'Specialized three-layer panel plywood with cross-laminated core construction, offering superior strength and dimensional stability.',
      specs: {
        'Board Size': 'Thick x 1220 x 2440 mm',
        'Face/Back': 'Meranti, Keruing, Albasia',
        'Bare Core': 'Albasia',
        'Glue': 'MR Standard',
        'Grade': 'UTY Better'
      },
      icon: CheckCircle,
      color: 'from-gray-600 to-gray-800',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200'
    }
  ]

  const standards = [
    {
      name: 'JAS Standard',
      description: 'Japanese Agricultural Standard for plywood quality and performance',
      icon: Award
    },
    {
      name: 'EN Standard',
      description: 'European Norm standards for construction materials',
      icon: Shield
    },
    {
      name: 'IHPA 1997',
      description: 'Indonesian Hardwood Plywood Association 1997 standards',
      icon: Star
    },
    {
      name: 'JPIC Standard',
      description: 'Japan Plywood Inspection Corporation standards',
      icon: CheckCircle
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Plywood Specifications
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
              Complete technical specifications for Indonesian plywood products. 
              Discover the best quality Indonesia Plywood specifications at MegaPlywood Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#specifications"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                View Specifications
              </Link>
              <Link
                href="/products"
                className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
              >
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Indonesian Phenolic Plywood
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover the best quality Indonesia Plywood specifications at MegaPlywood Indonesia. 
              Our plywood is made from high-quality Meranti, Tropical Hardwood, Falcata, and Balsa wood types, 
              and is available in various sizes and thicknesses. Our products are compliant with 
              <span className="font-semibold text-blue-600"> JAS, EN, IHPA 1997, and JPIC standards</span>, 
              and are perfect for a wide range of applications.
            </p>
          </div>

          {/* Standards Compliance */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {standards.map((standard, index) => {
              const IconComponent = standard.icon
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {standard.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {standard.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specifications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Plywood Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed technical specifications for all our Indonesian plywood products, 
              including materials, grades, sizes, and compliance standards.
            </p>
          </div>

          <div className="space-y-12">
            {specifications.map((spec, index) => {
              const IconComponent = spec.icon
              return (
                <div key={index} className={`${spec.bgColor} rounded-2xl p-8 border-2 ${spec.borderColor} hover:shadow-2xl transition-all duration-300`}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Product Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${spec.color} rounded-xl flex items-center justify-center`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {spec.name}
                          </h3>
                          <p className={`text-lg font-semibold bg-gradient-to-r ${spec.color} bg-clip-text text-transparent`}>
                            {spec.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed">
                        {spec.description}
                      </p>
                    </div>

                    {/* Specifications Table */}
                    <div className="lg:col-span-2">
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <Package className="w-6 h-6 text-blue-600 mr-2" />
                          Technical Specifications
                        </h4>
                        <div className="space-y-4">
                          {Object.entries(spec.specs).map(([key, value], idx) => (
                            <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 border-b border-gray-100 last:border-b-0">
                              <div className="font-semibold text-gray-900">
                                {key}:
                              </div>
                              <div className="md:col-span-2 text-gray-700">
                                {value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quality Assurance & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All our plywood products undergo rigorous quality control and meet international standards 
              to ensure consistent performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Control</h3>
              <p className="text-gray-600 leading-relaxed">
                Every batch undergoes comprehensive quality testing to ensure consistent standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Certified Standards</h3>
              <p className="text-gray-600 leading-relaxed">
                Compliant with JAS, EN, IHPA 1997, and JPIC international standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Materials</h3>
              <p className="text-gray-600 leading-relaxed">
                Only the finest Meranti, Albasia, Falcata, and other premium wood species.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Export Ready</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional pallet packaging ready for international export and shipping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Need Custom Specifications?
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto">
            Our technical team can provide custom specifications and detailed information 
            for your specific project requirements. Contact us for personalized assistance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Contact Technical Team
            </Link>
            <Link
              href="/products"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105"
            >
              View All Products
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-lg">
              All specifications subject to standard manufacturing tolerances and quality control procedures
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
