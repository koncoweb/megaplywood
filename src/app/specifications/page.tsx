import { Metadata } from 'next'
import { FileText, CheckCircle, AlertCircle, Info, Package, Shield, Star, Zap, Leaf, Award, TreePine, MessageCircle } from 'lucide-react'
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

export default function SpecificationsPage() {
  const plywoodTypes = [
    {
      name: 'Albasia Plywood (Softwood)',
      subtitle: 'Albasia Based Plywood',
      description: 'High-quality softwood plywood made from Albasia wood, perfect for construction and general building applications.',
      specifications: [
        { name: 'Board Size', value: 'Thick x 1220 x 2440 mm' },
        { name: 'Face/Back', value: 'Albasia' },
        { name: 'Core', value: 'Albasia' },
        { name: 'Glue', value: 'MR Standard, CARB' },
        { name: 'Grade', value: 'UTY Better' }
      ],
      icon: TreePine,
      color: 'from-green-600 to-green-800'
    },
    {
      name: 'Hardwood Plywood',
      subtitle: 'Premium Hardwood Plywood',
      description: 'Premium quality hardwood plywood made from Meranti and Keruing with mixed hardwood cores for superior strength.',
      specifications: [
        { name: 'Board Size', value: 'Thick x 1220 x 2440 mm' },
        { name: 'Face/Back', value: 'Meranti, Keruing' },
        { name: 'Core', value: 'Mix Mahogany, Cadamba' },
        { name: 'Glue', value: 'MR Standard, WBP Phenol, CARB' },
        { name: 'Grade', value: 'UTY Better' }
      ],
      icon: Star,
      color: 'from-amber-600 to-amber-800'
    },
    {
      name: 'Filmface',
      subtitle: 'Film Coated Plywood',
      description: 'High-quality plywood with film coating for superior surface finish and durability, perfect for construction and furniture applications.',
      specifications: [
        { name: 'Board Size', value: 'Thick x 1220 x 2440 mm' },
        { name: 'Face/Back', value: 'Film' },
        { name: 'Core', value: 'Mix Mahogany, Cadamba, Rubber Wood' },
        { name: 'Glue', value: 'WBP Phenol' },
        { name: 'Grade', value: 'UTY Better' }
      ],
      icon: Shield,
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Blockboard',
      subtitle: 'Block Core Plywood',
      description: 'Premium blockboard plywood with solid wood core, offering excellent strength and stability for furniture and construction applications.',
      specifications: [
        { name: 'Board Size', value: 'Thick x 1220 x 2440 mm' },
        { name: 'Face/Back', value: 'Albasia, Meranti' },
        { name: 'Core', value: 'Albasia' },
        { name: 'Glue', value: 'MR Standard' },
        { name: 'Grade', value: 'UTY Better' }
      ],
      icon: Package,
      color: 'from-purple-600 to-purple-800'
    },
    {
      name: 'Combine Plywood',
      subtitle: 'Mixed Wood Core Plywood',
      description: 'Versatile plywood combining Meranti and Keruing face with mixed wood cores, offering excellent value and performance.',
      specifications: [
        { name: 'Board Size', value: 'Thick x 1220 x 2440 mm' },
        { name: 'Face/Back', value: 'Meranti, Keruing' },
        { name: 'Core', value: 'Mix Albasia, Mahogany' },
        { name: 'Glue', value: 'MR Standard, CARB' },
        { name: 'Grade', value: 'UTY Better' }
      ],
      icon: Leaf,
      color: 'from-emerald-600 to-emerald-800'
    },
    {
      name: 'Three Layer',
      subtitle: 'Three Layer Construction Plywood',
      description: 'Specialized three-layer panel plywood with cross-laminated core construction, offering superior strength and dimensional stability.',
      specifications: [
        { name: 'Board Size', value: 'Thick x 1220 x 2440 mm' },
        { name: 'Face/Back', value: 'Meranti, Keruing, Albasia' },
        { name: 'Bare Core', value: 'Albasia' },
        { name: 'Glue', value: 'MR Standard' },
        { name: 'Grade', value: 'UTY Better' }
      ],
      icon: CheckCircle,
      color: 'from-gray-600 to-gray-800'
    }
  ]

  const standards = [
    {
      standard: 'JAS Standard',
      title: 'Japanese Agricultural Standard',
      description: 'Japanese Agricultural Standard for plywood quality and performance',
      icon: Award
    },
    {
      standard: 'CARB Standard',
      title: 'California Air Resources Board',
      description: 'Independent verification that composite wood products, including plywood, meet very strict formaldehyde emission limits set by the State of California (USA). Ensures low-emitting, safe-to-use products that meet U.S. market requirements.',
      icon: Shield
    },
    {
      standard: 'IHPA 1997',
      title: 'Indonesian Hardwood Plywood Association',
      description: 'Indonesian Hardwood Plywood Association 1997 standards',
      icon: Star
    },
    {
      standard: 'JPIC Standard',
      title: 'Japan Plywood Inspection Corporation',
      description: 'Japan Plywood Inspection Corporation standards',
      icon: CheckCircle
    }
  ]

  const thicknessGuide = [
    { thickness: '6mm', applications: ['Thin furniture', 'Back panel', 'Decorative panel'] },
    { thickness: '9mm', applications: ['Medium furniture', 'Cabinet door', 'Shelf'] },
    { thickness: '12mm', applications: ['Heavy furniture', 'Table top', 'Counter top'] },
    { thickness: '15mm', applications: ['Light construction', 'Partition', 'Door panel'] },
    { thickness: '18mm', applications: ['Medium construction', 'Flooring', 'Wall panel'] },
    { thickness: '25mm', applications: ['Heavy construction', 'Structural panel', 'Load bearing'] }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Plywood Specifications
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Indonesian Phenolic Plywood - Discover the best quality Indonesia Plywood specifications at MegaPlywood Indonesia
            </p>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto mt-4">
              Our plywood is made from high-quality Meranti, Tropical Hardwood, Falcata, and Balsa wood types, 
              and is available in various sizes and thicknesses. Our products are compliant with JAS, EN, IHPA 1997, and JPIC standards.
            </p>
          </div>
        </div>
      </section>

      {/* Plywood Types Specifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Plywood Specifications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed technical specifications for all our Indonesian plywood products, 
              including materials, grades, sizes, and compliance standards.
            </p>
          </div>

          <div className="space-y-12">
            {plywoodTypes.map((plywood, index) => {
              const IconComponent = plywood.icon
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plywood.color} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {plywood.name}
                      </h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${plywood.color} bg-clip-text text-transparent`}>
                        {plywood.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {plywood.description}
                  </p>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <FileText className="w-6 h-6 text-blue-600 mr-2" />
                      Technical Specifications
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {plywood.specifications.map((spec, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                          <span className="font-semibold text-gray-900">{spec.name}:</span>
                          <span className="text-gray-700 text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Standards
            </h2>
            <p className="text-lg text-gray-600">
              Our products meet various international standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((standard, index) => {
              const IconComponent = standard.icon
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {standard.standard}
                  </h3>
                  <h4 className="font-bold text-black mb-2">
                    {standard.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {standard.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Thickness Guide */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Thickness Guide
            </h2>
            <p className="text-lg text-gray-600">
              Choose the right thickness according to application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {thicknessGuide.map((guide, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-black rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-lg">{guide.thickness}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  Thickness {guide.thickness}
                </h3>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Applications:</h4>
                  <ul className="space-y-1">
                    {guide.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Control
            </h2>
            <p className="text-lg text-gray-600">
              Strict quality control process for every product
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Material Inspection</h3>
              <p className="text-gray-600">Every plywood sheet is inspected for thickness, strength, and surface quality</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Laboratory Testing</h3>
              <p className="text-gray-600">Physical and mechanical testing in certified laboratories</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Info className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Documentation</h3>
              <p className="text-gray-600">Every batch of products comes with quality certificates and documentation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Custom Specifications?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Our technical team can provide custom specifications and detailed information 
            for your specific project requirements. Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6282217118816?text=Hi%20MegaPlywood%20Indonesia,%20I%20need%20custom%20plywood%20specifications%20for%20my%20project.%20Please%20provide%20more%20information."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contact Technical Team</span>
            </a>
            <Link
              href="/products"
              className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              View All Products
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-lg">
              All specifications subject to standard manufacturing tolerances and quality control procedures
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
