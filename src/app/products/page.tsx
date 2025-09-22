import { Metadata } from 'next'
import { Package, Shield, Star, Truck, CheckCircle, Leaf, TreePine, Zap, Award, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Complete Plywood Products - Indonesian Plywood Collection | MegaPlywood Indonesia',
  description: 'Complete collection of Indonesian plywood products: Albasia Plywood, Hardwood Plywood, Filmface, Blockboard, Combine Plywood, and Three Layer. JAS, EN, IHPA 1997 compliant plywood for all construction and furniture needs.',
  keywords: [
    'indonesian plywood products', 'softwood plywood', 'meranti plywood', 'filmface plywood', 
    'blockboard plywood', 'three layers panel', 'premium plywood indonesia', 
    'construction plywood', 'furniture plywood', 'high quality plywood', 'plywood distributor',
    'JAS compliant plywood', 'EN standard plywood', 'IHPA 1997 plywood', 'plywood supplier'
  ],
  openGraph: {
    title: 'Complete Indonesian Plywood Products Collection',
    description: 'Complete range of Indonesian plywood products including Albasia Plywood, Hardwood Plywood, Filmface, Blockboard, Combine Plywood, and Three Layer. JAS, EN, IHPA 1997 compliant.',
    type: 'website',
    images: [
      {
        url: '/images/static/products/plywood-collection.jpg',
        width: 1200,
        height: 630,
        alt: 'MegaPlywood Complete Plywood Collection',
      },
    ],
  },
}

export default function ProductsPage() {
  // Function to generate anchor IDs that match homepage links
  const generateAnchorId = (productName: string) => {
    const name = productName.toLowerCase()
      .replace(/indonesian\s+/g, '')
      .replace(/indonesia\s+/g, '')
      .replace(/full\s+/g, '')
      .replace(/hevea\s+/g, '')
      .replace(/polyester\s+/g, '')
      .replace(/laminate\s+/g, '')
      .replace(/combine\s+/g, '')
      .replace(/three\s+layers\s+panel/g, 'three-layers-panel')
      .replace(/\s+/g, '-')
    
    // Special cases to match homepage links exactly
    if (name.includes('filmface')) return 'film-faced-plywood'
    if (name.includes('blockboard')) return 'blockboard-plywood'
    if (name.includes('meranti-plywood') && !name.includes('combine')) return 'meranti-plywood'
    if (name.includes('meranti-combine')) return 'meranti-combine-plywood'
    if (name.includes('three-layers-panel')) return 'three-layers-panel'
    if (name.includes('softwood')) return 'softwood-plywood'
    
    return name
  }

  const products = [
    {
      name: 'Albasia Plywood (Softwood)',
      subtitle: 'Albasia Based Plywood',
      description: 'High-quality softwood plywood made from Albasia wood, perfect for construction and general building applications with excellent cost-effectiveness.',
      features: [
        'Board Size: Thick x 1220 x 2440 mm',
        'Face/Back: Albasia',
        'Core: Albasia',
        'Glue: MR Standard, CARB',
        'Grade: UTY Better'
      ],
      benefits: [
        'Cost-effective solution for large projects',
        'Resistant to common wood-boring insects',
        'Consistent appearance across all sheets',
        'Precise dimensions for easy installation'
      ],
      applications: ['Construction Framing', 'Roofing & Flooring', 'General Building', 'Temporary Structures'],
      icon: TreePine,
      color: 'from-green-600 to-green-800',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      image: '/images/static/products/indonesian-albasia-plywood-distributor2.jpeg'
    },
    {
      name: 'Hardwood Plywood',
      subtitle: 'Premium Hardwood Plywood',
      description: 'Premium quality hardwood plywood made from Meranti and Keruing with mixed hardwood cores for superior strength.',
      features: [
        'Board Size: Thick x 1220 x 2440 mm',
        'Face/Back: Meranti, Keruing',
        'Core: Mix Mahogany, Cadamba',
        'Glue: MR Standard, WBP Phenol, CARB',
        'Grade: UTY Better'
      ],
      benefits: [
        'Dense, solid core for maximum strength',
        'Beautiful natural wood grain patterns',
        'Excellent dimensional stability',
        'Superior grade materials throughout'
      ],
      applications: ['Premium Furniture', 'Architectural Paneling', 'Cabinet Making', 'Decorative Elements'],
      icon: Star,
      color: 'from-amber-600 to-amber-800',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      image: '/images/static/products/indonesian-hardwood-meranti-plywood-distributor2.jpeg'
    },
    {
      name: 'Filmface',
      subtitle: 'Film Coated Plywood',
      description: 'High-quality plywood with film coating for superior surface finish and durability, perfect for construction and furniture applications.',
      features: [
        'Board Size: Thick x 1220 x 2440 mm',
        'Face/Back: Film',
        'Core: Mix Mahogany, Cadamba, Rubber Wood',
        'Glue: WBP Phenol',
        'Grade: UTY Better'
      ],
      benefits: [
        'Smooth, non-stick surface',
        'Excellent for concrete formwork',
        'High resistance to moisture',
        'Reusable multiple times'
      ],
      applications: ['Concrete Formwork', 'Construction Panels', 'Marine Applications', 'Outdoor Structures'],
      icon: Shield,
      color: 'from-blue-600 to-blue-800',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      image: '/images/static/products/indonesian-film-faced-plywood-distributor2.jpeg'
    },
    {
      name: 'Blockboard',
      subtitle: 'Block Core Plywood',
      description: 'Premium blockboard plywood with solid wood core, offering excellent strength and stability for furniture and construction applications.',
      features: [
        'Board Size: Thick x 1220 x 2440 mm',
        'Face/Back: Albasia, Meranti',
        'Core: Albasia',
        'Glue: MR Standard',
        'Grade: UTY Better'
      ],
      benefits: [
        'Excellent dimensional stability',
        'Strong core construction',
        'Suitable for heavy-duty applications',
        'Consistent quality throughout'
      ],
      applications: ['Furniture Manufacturing', 'Construction Panels', 'Cabinet Making', 'Structural Applications'],
      icon: Package,
      color: 'from-purple-600 to-purple-800',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      image: '/images/static/products/indonesian-blockboard-plywood-distributor2.jpeg'
    },
    {
      name: 'Combine Plywood',
      subtitle: 'Mixed Wood Core Plywood',
      description: 'Versatile plywood combining Meranti and Keruing face with mixed wood cores, offering excellent value and performance.',
      features: [
        'Board Size: Thick x 1220 x 2440 mm',
        'Face/Back: Meranti, Keruing',
        'Core: Mix Albasia, Mahogany',
        'Glue: MR Standard, CARB',
        'Grade: UTY Better'
      ],
      benefits: [
        'Excellent value for money',
        'Versatile core materials',
        'Wide thickness range',
        'Suitable for multiple applications'
      ],
      applications: ['General Construction', 'Furniture Making', 'Interior Design', 'Packaging'],
      icon: Leaf,
      color: 'from-emerald-600 to-emerald-800',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      image: '/images/static/products/indonesian-meranti-combine-plywood-distributor.png'
    },
    {
      name: 'Three Layer',
      subtitle: 'Three Layer Construction Plywood',
      description: 'Specialized three-layer panel plywood with cross-laminated core construction, offering superior strength and dimensional stability.',
      features: [
        'Board Size: Thick x 1220 x 2440 mm',
        'Face/Back: Meranti, Keruing, Albasia',
        'Bare Core: Albasia',
        'Glue: MR Standard',
        'Grade: UTY Better'
      ],
      benefits: [
        'Maximum structural strength',
        'Heavy-duty load bearing capacity',
        'Thick panel construction',
        'Ideal for structural applications'
      ],
      applications: ['Structural Construction', 'Load Bearing Panels', 'Heavy Duty Furniture', 'Industrial Applications'],
      icon: CheckCircle,
      color: 'from-gray-600 to-gray-800',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      image: '/images/static/products/indonesian-three-layer-plywood-distributor2.jpeg'
    }
  ]


  const qualityFeatures = [
    {
      title: 'International Standards',
      description: 'All products meet international quality standards including JAS, CE, and FSC certification',
      icon: Shield
    },
    {
      title: 'Precision Manufacturing',
      description: 'Advanced manufacturing processes ensure consistent quality and precise dimensions',
      icon: Zap
    },
    {
      title: 'Sustainable Sourcing',
      description: 'Responsibly sourced materials from certified sustainable forests',
      icon: Leaf
    },
    {
      title: 'Quality Control',
      description: 'Rigorous testing and quality control at every stage of production',
      icon: CheckCircle
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-24" style={{ backgroundImage: 'url(/images/static/hero/megaplywood-indonesian-plywood-sml.png)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/60 to-white/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              Complete Indonesian Plywood Collection
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8">
              Discover our comprehensive collection of high-quality Indonesian plywood products: 
              <span className="text-green-600 font-semibold"> Softwood</span>, 
              <span className="text-amber-600 font-semibold"> Meranti</span>, 
              <span className="text-blue-600 font-semibold"> Filmface</span>, 
              <span className="text-purple-600 font-semibold"> Blockboard</span>, 
              and 
              <span className="text-gray-600 font-semibold"> Three Layer</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#products"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Explore Products
              </Link>
              <a
                href="https://wa.me/6285640012454?text=Hi%20MegaPlywood,%20I%20am%20interested%20in%20getting%20a%20quote%20and%20free%20sample%20for%20your%20plywood%20products.%20Please%20provide%20more%20information."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-600 hover:bg-gray-600 hover:text-white text-gray-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Get Quote</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Premium Plywood Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three distinct plywood types, each engineered for specific applications and performance requirements. 
              Choose the perfect solution for your project needs.
            </p>
          </div>

          <div className="space-y-16">
            {products.map((product, index) => {
              const IconComponent = product.icon
              return (
                <div key={index} id={generateAnchorId(product.name)} className={`${product.bgColor} rounded-2xl p-8 border-2 ${product.borderColor} hover:shadow-2xl transition-all duration-300`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Product Info */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">
                            {product.name}
                          </h3>
                          <p className={`text-lg font-semibold bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                            {product.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {product.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-gray-700">
                                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                            <Star className="w-5 h-5 text-yellow-500 mr-2" />
                            Benefits
                          </h4>
                          <ul className="space-y-2">
                            {product.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-center text-gray-700">
                                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Ideal Applications</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app, idx) => (
                            <span key={idx} className={`bg-white text-gray-800 text-sm px-3 py-2 rounded-full border ${product.borderColor} font-medium`}>
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <a
                          href="https://wa.me/6285640012454?text=Hi%20MegaPlywood,%20I%20am%20interested%20in%20getting%20a%20quote%20and%20free%20sample%20for%20your%20plywood%20products.%20Please%20provide%20more%20information."
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`bg-gradient-to-r ${product.color} hover:opacity-90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 text-center transform hover:scale-105 flex items-center justify-center space-x-2`}
                        >
                          <MessageCircle className="w-5 h-5" />
                          <span>Get Quote & Free Sample</span>
                        </a>
                      </div>
                    </div>

                    {/* Product Visual */}
                    <div className="relative">
                      <div className="h-80 bg-white rounded-2xl flex items-center justify-center relative overflow-hidden border-2 border-gray-200 shadow-lg">
                        <div className="relative w-full h-full">
                          <Image
                            src={product.image}
                            alt={`${product.name} - ${product.subtitle}`}
                            fill
                            className="object-cover rounded-2xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={index < 3}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-3">
                              <h4 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h4>
                              <p className="text-sm text-gray-700">{product.subtitle}</p>
                            </div>
                          </div>
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                            <span className="text-gray-900 text-sm font-semibold">Premium Grade</span>
                          </div>
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

      {/* Specifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our plywood products meet the highest international standards with precise specifications 
              and consistent quality across all product lines.
            </p>
            <Link
              href="/products/indonesia-plywood-spesifications"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <Package className="w-5 h-5 mr-2" />
              View Complete Specifications
            </Link>
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
              Our commitment to excellence ensures every plywood product meets the highest international standards 
              and delivers consistent performance for your projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {qualityFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional Quality Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Truck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Reliable and fast delivery service throughout Indonesia with secure packaging and handling.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Package className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Custom manufacturing capabilities to meet your specific project requirements and dimensions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Grade</h3>
              <p className="text-gray-600 leading-relaxed">
                Only the finest materials with A-A grade quality for maximum performance and longevity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto">
            Our expert team is ready to help you choose the perfect plywood solution for your specific needs. 
            Get a personalized quote or request samples to experience our quality firsthand.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Free Samples</h3>
              <p className="text-gray-300">Request free samples to test our quality before ordering</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Consultation</h3>
              <p className="text-gray-300">Get professional advice on the best plywood for your project</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
              <div className="w-16 h-16 bg-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-300">Quick and reliable delivery throughout Indonesia</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <a
              href="https://wa.me/6285640012454?text=Hi%20MegaPlywood,%20I%20am%20interested%20in%20getting%20a%20quote%20and%20free%20sample%20for%20your%20plywood%20products.%20Please%20provide%20more%20information."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Get Quote & Free Sample via WhatsApp</span>
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-lg">
              Trusted by <span className="text-white font-semibold">500+</span> contractors and manufacturers across Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gray-600 leading-relaxed" style={{ fontSize: '9px', lineHeight: '1.4' }}>
            <p className="mb-3">
              <strong>MegaPlywood Indonesia</strong> is a leading Indonesian plywood exporter specializing in high-quality plywood products distributed worldwide. 
              Our comprehensive range includes Hardwood Plywood, Filmface Plywood, Combine Plywood, and Three Layer, 
              manufactured to meet international standards including JAS, EN, and CE certifications.
            </p>
            
            <p className="mb-3">
              <strong>Indonesian Meranti Plywood</strong> is crafted from premium Meranti hardwood species native to Southeast Asia, particularly Indonesia and Malaysia. 
              This tropical hardwood plywood offers exceptional strength, dimensional stability, and natural resistance to warping. Meranti plywood features 
              beautiful reddish-brown to purplish-brown coloration with attractive grain patterns, making it ideal for marine applications, construction, 
              furniture manufacturing, and both interior and exterior architectural projects. Our Meranti plywood conforms to international standards 
              and is widely exported for boat building, concrete formwork, cabinetry, and premium construction projects globally.
            </p>
            
            <p className="mb-3">
              <strong>Indonesian Film-Faced Plywood</strong> represents the pinnacle of construction-grade plywood, specifically engineered for concrete 
              formwork applications. Featuring a phenolic resin film coating that provides superior water resistance, durability, and chemical stability, 
              our film-faced plywood ensures smooth concrete finishes while offering exceptional reusability. The film coating prevents moisture absorption, 
              warping, and swelling when in contact with wet concrete, making it the preferred choice for construction companies worldwide. 
              This specialized plywood is extensively used in concrete casting, formwork systems, and construction projects requiring high-quality, 
              reusable formwork materials.
            </p>
            
            <p className="mb-3">
              <strong>Combine Plywood</strong> combines the best of both worlds by utilizing Meranti and Keruing face and back veneers with 
              lightweight core materials such as Falcata or Albasia. This innovative construction significantly reduces weight while maintaining 
              the premium appearance and strength of hardwood plywood. The mixed-species core approach makes our Combine Plywood more 
              cost-effective and easier to handle, transport, and install compared to full Meranti plywood. This makes it particularly suitable 
              for interior applications, furniture manufacturing, cabinetry, and projects where weight reduction is crucial without compromising 
              on quality and appearance.
            </p>
            
            <p className="mb-3">
              <strong>Three Layer</strong> represents advanced engineered wood technology, constructed with three distinct solid 
              wood layers featuring cross-laminated core construction. Unlike traditional plywood made from thin veneers, our three-layers panel 
              utilizes solid wood boards with perpendicular grain orientation in the core layer, providing enhanced dimensional stability and 
              structural integrity. This construction method minimizes warping, twisting, and cupping while offering the natural beauty and 
              workability of solid timber. Our three-layers panels are manufactured from premium Indonesian hardwoods including Meranti, Falcata, 
              and Hevea, making them ideal for furniture manufacturing, interior decoration, structural applications, and architectural projects 
              requiring superior stability and aesthetic appeal.
            </p>
            
            <p className="mb-3">
              <strong>MegaPlywood Indonesia&apos;s Global Export Network</strong> ensures reliable delivery of premium Indonesian plywood products to 
              construction companies, furniture manufacturers, and distributors worldwide. Our state-of-the-art manufacturing facilities in Indonesia 
              utilize advanced production techniques and rigorous quality control processes to meet international standards. We export to markets 
              across Asia, Europe, North America, Australia, and the Middle East, serving both small-scale projects and large-scale industrial 
              applications. Our commitment to sustainable forestry practices and environmental responsibility makes us a trusted partner for 
              companies seeking high-quality Indonesian plywood solutions with minimal environmental impact.
            </p>
            
            <p className="mb-3">
              <strong>Quality Assurance and Certifications</strong> are fundamental to our export operations. All MegaPlywood Indonesia products 
              undergo comprehensive testing and quality control procedures to ensure compliance with international standards including Japanese 
              Industrial Standards (JIS), European Norms (EN), and British Standards (BS). Our manufacturing processes incorporate advanced 
              bonding techniques, precision cutting, and surface finishing to deliver consistent quality across all product lines. We maintain 
              ISO certification and follow strict environmental protocols to ensure sustainable production practices that meet global environmental 
              standards and customer expectations.
            </p>
            
            <p className="mb-3">
              <strong>Custom Manufacturing and Technical Support</strong> capabilities allow us to meet specific customer requirements for 
              specialized plywood applications. Our technical team works closely with international clients to develop custom solutions for 
              unique project needs, including specific thickness requirements, surface treatments, and performance characteristics. We provide 
              comprehensive technical documentation, material certificates, and ongoing support to ensure successful project completion. 
              Our flexible production capacity enables us to handle both small custom orders and large-scale production runs, making us 
              a versatile partner for plywood sourcing and supply chain management.
            </p>
            
            <p className="mb-3">
              <strong>Environmental Responsibility and Sustainable Sourcing</strong> are core principles of our export business. MegaPlywood Indonesia 
              sources raw materials from responsibly managed forests and maintains strict adherence to sustainable forestry practices. Our commitment 
              to environmental stewardship includes reforestation programs, waste reduction initiatives, and energy-efficient manufacturing processes. 
              We work with certified suppliers and maintain chain-of-custody documentation to ensure that our exported plywood products meet 
              international environmental standards and customer sustainability requirements. This commitment to environmental responsibility 
              positions us as a preferred supplier for companies seeking sustainable wood products for their global operations.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}