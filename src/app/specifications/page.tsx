import { Metadata } from 'next'
import { FileText, CheckCircle, AlertCircle, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Plywood Specifications - Technical Details and Quality Standards',
  description: 'Learn detailed technical specifications of MegaPlywood including dimensions, grade, durability, and quality standards we use.',
  keywords: ['plywood specifications', 'detailed plywood specs', 'grade plywood', 'quality standards plywood', 'plywood sizes'],
}

export default function SpecificationsPage() {
  const specifications = [
    {
      category: 'Standard Dimensions',
      items: [
        { name: 'Length', value: '2440mm (8 feet)', description: 'International standard size' },
        { name: 'Width', value: '1220mm (4 feet)', description: 'Standard width for transport efficiency' },
        { name: 'Thickness', value: '6mm - 25mm', description: 'Various thicknesses according to needs' },
        { name: 'Tolerance', value: '±1mm', description: 'Allowed thickness tolerance' }
      ]
    },
    {
      category: 'Quality Grade',
      items: [
        { name: 'Grade A-A', value: 'Premium', description: 'Both surfaces perfect, for furniture' },
        { name: 'Grade A-B', value: 'Standard', description: 'One surface perfect, one good' },
        { name: 'Grade B-B', value: 'Construction', description: 'Both surfaces good, for construction' },
        { name: 'Grade C-C', value: 'Economy', description: 'Rough surface, for hidden applications' }
      ]
    },
    {
      category: 'Physical Properties',
      items: [
        { name: 'Density', value: '0.6-0.8 g/cm³', description: 'Plywood density' },
        { name: 'Moisture Content', value: '8-12%', description: 'Moisture content under normal conditions' },
        { name: 'Modulus of Elasticity', value: '8,000-12,000 N/mm²', description: 'Material stiffness' },
        { name: 'Tensile Strength', value: '40-60 N/mm²', description: 'Tensile strength' }
      ]
    },
    {
      category: 'Durability',
      items: [
        { name: 'Weather Resistance', value: 'Class 1-3', description: 'Resistance to weather' },
        { name: 'Fire Rating', value: 'Class B', description: 'Fire resistance level' },
        { name: 'Fungus Resistance', value: 'Yes', description: 'Resistant to fungi and insects' },
        { name: 'Chemical Resistance', value: 'Limited', description: 'Resistance to chemicals' }
      ]
    }
  ]

  const standards = [
    {
      standard: 'SNI 01-4449-2006',
      title: 'Indonesian National Standard',
      description: 'Plywood standard for construction in Indonesia',
      icon: CheckCircle
    },
    {
      standard: 'JIS A 5908',
      title: 'Japanese Industrial Standard',
      description: 'Japanese standard for construction plywood',
      icon: CheckCircle
    },
    {
      standard: 'BS 6566',
      title: 'British Standard',
      description: 'British standard for plywood',
      icon: CheckCircle
    },
    {
      standard: 'ASTM D3500',
      title: 'American Standard',
      description: 'American standard for construction plywood',
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
              Complete details of technical specifications and quality standards of MegaPlywood
            </p>
          </div>
        </div>
      </section>

      {/* Specifications Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Detailed Technical Specifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All our plywood products meet international quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-black" />
                  {spec.category}
                </h3>
                <div className="space-y-4">
                  {spec.items.map((item, idx) => (
                    <div key={idx} className="border-l-4 border-black pl-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                        <span className="text-black font-bold">{item.value}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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

      {/* Download Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Download Complete Specifications
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Get complete technical specification documents for your project reference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Download PDF
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Request Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
