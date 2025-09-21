import Link from 'next/link'
import { History, Package, FileText, Globe } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home - Trusted Plywood Distributor in Indonesia',
  description: 'MegaPlywood Indonesia supplies high-quality plywood, MDF, HPL, veneer, and flooring with competitive pricing. Trusted distributor for construction, interiors, and manufacturing needs.',
  keywords: ['plywood indonesia', 'distributor plywood', 'high quality plywood', 'competitive plywood prices', 'construction plywood', 'MDF', 'HPL', 'veneer', 'flooring'],
}

export default function HomePage() {
  const cards = [
    {
      title: 'Plywood History',
      description: 'Learn Plywood Industry History',
      icon: History,
      href: '/history',
      color: 'from-gray-700 to-black'
    },
    {
      title: 'Our Products',
      description: 'Our High Quality Plywood',
      icon: Package,
      href: '/products',
      color: 'from-gray-700 to-black'
    },
    {
      title: 'Specifications',
      description: 'Detailed Plywood Specifications',
      icon: FileText,
      href: '/products/indonesia-plywood-spesifications',
      color: 'from-gray-700 to-black'
    },
    {
      title: 'Free Samples',
      description: 'Get Our Plywood Samples',
      icon: Globe,
      href: '/samples',
      color: 'from-gray-700 to-black'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-32 md:py-40 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/static/hero/megaplywood-distributor-indonesian-plywood-sml.png)'
          }}
        />
        
        {/* Overlay Gradient - Paling pekat di bawah, transparan di atas */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-white/10" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
              MEGA PLYWOOD
              <span className="block text-black">INDONESIA</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-800 max-w-4xl">
              Mega Plywood Indonesia, a manufacturer and supplier of high-quality plywood from Indonesia to the world. Get competitive prices and collaborate for long-term business partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 text-center text-lg"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="border-2 border-black hover:bg-black hover:text-white text-black px-8 py-4 rounded-lg font-semibold transition-colors duration-200 text-center text-lg"
            >
              Contact Us
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Cards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our successful worldwide plywood shipping projects and business partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/project/plywood-manufacture-and-export-to-cyprus"
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
            >
              <div className="relative h-32 overflow-hidden">
                <img
                  src="/images/static/hero/mega-plywood-indonesia-plywood-export-to-cyprus-min.jpeg"
                  alt="Cyprus Construction Project"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <span className="text-sm font-semibold">🇨🇾 Cyprus</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Cyprus Construction Project
                </h3>
                <p className="text-sm text-gray-600">
                  Large-scale plywood delivery for major construction project in Cyprus
                </p>
              </div>
            </Link>

            <Link
              href="/project/plywood-manufacture-and-shipment-for-ileys-general-trading-l-l-c"
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
            >
              <div className="relative h-32 overflow-hidden">
                <img
                  src="/images/static/gallery/packaging-min.jpeg"
                  alt="Somalia Construction Project"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <span className="text-sm font-semibold">🇸🇴 Somalia</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  Somalia Construction Project
                </h3>
                <p className="text-sm text-gray-600">
                  Supporting reconstruction and development in Somalia
                </p>
              </div>
            </Link>

            <Link
              href="/project/plywood-payment-from-m-w-w-wood-working-ltd-cyprus-to-mega-plywood-indonesia"
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
            >
              <div className="relative h-32 overflow-hidden">
                <img
                  src="/images/static/gallery/payment-from-mww-woodworking-cyprus.jpg"
                  alt="Payment Proof - M.W.W. Wood Working Ltd"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <span className="text-sm font-semibold">🇨🇾 Cyprus</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Payment Proof - M.W.W. Wood Working Ltd
                </h3>
                <p className="text-sm text-gray-600">
                  Business relationship documentation and payment proof
                </p>
              </div>
            </Link>

            <Link
              href="/project/plywood-factory-visit-for-client-from-india"
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
            >
              <div className="relative h-32 overflow-hidden">
                <img
                  src="/images/static/gallery/indonesian-plywood-manufacturer-factory-visit-400x284.jpg"
                  alt="Factory Visit - Client from India"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <span className="text-sm font-semibold">🇮🇳 India</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Factory Visit - Client from India
                </h3>
                <p className="text-sm text-gray-600">
                  Showcasing our production process and quality standards
                </p>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/projects-portofolio"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <Globe className="w-5 h-5 mr-2" />
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Plywood Information
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover comprehensive information about plywood, our products, specifications, and how to get samples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => {
              const IconComponent = card.icon
              return (
                <Link
                  key={index}
                  href={card.href}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-200"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-gray-700 to-black flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {card.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Premium Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive collection of high-quality Indonesian plywood products, 
              each engineered for specific applications and performance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Albasia Plywood (Softwood) */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/images/static/products/indonesian-softwood-plywood-distributor.png"
                  alt="Indonesian Albasia Plywood (Softwood)"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Premium
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  Albasia Plywood (Softwood)
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  High-quality Albasia/Falcata based plywood perfect for construction and general building applications.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Construction Grade</span>
                  <Link
                    href="/products#softwood-plywood"
                    className="text-green-600 hover:text-green-700 font-semibold text-sm transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Meranti Plywood */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/images/static/products/indonesian-meranti-plywood-distributor.png"
                  alt="Indonesian Meranti Plywood"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Premium
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  Meranti Plywood
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Premium quality plywood made entirely from Meranti wood, offering superior strength and natural beauty.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Premium Grade</span>
                  <Link
                    href="/products#meranti-plywood"
                    className="text-amber-600 hover:text-amber-700 font-semibold text-sm transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Film-Faced Plywood */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/images/static/products/indonesian-film-faced-plywood-distributor.png"
                  alt="Indonesian Film-Faced Plywood"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Specialized
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Film-Faced Plywood
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  High-performance plywood with phenolic film coating, ideal for concrete formwork applications.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Formwork Grade</span>
                  <Link
                    href="/products#film-faced-plywood"
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Blockboard Plywood */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/images/static/products/indonesian-blockboard-plywood-distributor.png"
                  alt="Indonesian Blockboard Plywood"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Specialized
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Blockboard Plywood
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Specialized blockboard with Hevea core, combining strength and stability for furniture applications.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Furniture Grade</span>
                  <Link
                    href="/products#blockboard-plywood"
                    className="text-purple-600 hover:text-purple-700 font-semibold text-sm transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>


            {/* Combine Plywood */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/images/static/products/indonesian-meranti-combine-plywood-distributor.png"
                  alt="Indonesian Combine Plywood"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Versatile
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  Combine Plywood
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Versatile plywood combining Meranti face with mixed wood cores, offering excellent value and performance.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Multi-Purpose</span>
                  <Link
                    href="/products#meranti-combine-plywood"
                    className="text-teal-600 hover:text-teal-700 font-semibold text-sm transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Three Layer */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/images/static/products/indonesian-three-layers-panel-plywood-distributor.png"
                  alt="Indonesian Three Layer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Structural
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                  Three Layer
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Heavy-duty three-layer structural panel designed for load-bearing applications and construction projects.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Structural Grade</span>
                  <Link
                    href="/products#three-layers-panel"
                    className="text-gray-600 hover:text-gray-700 font-semibold text-sm transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <Package className="w-5 h-5 mr-2" />
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Click Here to learn more about MegaPlywood Indonesia: Where quality plywood production meets competitive prices.
            </p>
            <p className="text-gray-600 max-w-4xl mx-auto mb-8">
              We are a trusted plywood distributor that has been serving construction and furniture needs in Indonesia. With years of experience, we provide high-quality products at competitive prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="border-2 border-black hover:bg-black text-black hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MegaPlywood?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600">Plywood with international standards and guaranteed quality for all construction needs.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Affordable prices without compromising quality, providing the best value for your investment.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <History className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Experience</h3>
              <p className="text-gray-600">Years of serving customers with experience and expertise in the plywood industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section - Very Small Text */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gray-600 leading-relaxed" style={{ fontSize: '8px', lineHeight: '1.4' }}>
            <p className="mb-2">
              <strong>Indonesian Plywood Distributor and Exporter:</strong> Finding the right Indonesian plywood distributor and exporter can be a crucial step for both business and academic research purposes. This industry is supported by numerous companies, ranging from large-scale operations to smaller enterprises.
            </p>
            
            <p className="mb-2">
              <strong>Overview of Indonesian Plywood Distributors and Exporters:</strong> The Indonesian plywood industry is dominated by several major companies that operate their own manufacturing facilities. These companies not only produce plywood but also handle direct exports to international markets. Key players in this industry include PT. Sumber Mas Indah Plywood (SMIP) located in Gresik, East Java, PT. Intracawood Manufacturing in North Kalimantan, PT. Kutai Timber Indonesia (KTI) based in Probolinggo, East Java, PT. Dharma Satya Nusantara Tbk (DSN), and PT. Idec Abadi Wood Industries. These companies are often registered members of associations such as APKINDO (Indonesian Wood Processing and Plywood Association), which serves as an important source of information for verification.
            </p>
            
            <p className="mb-2">
              <strong>Export Markets and Primary Destination Countries:</strong> Despite facing competition from countries like China and Vietnam, Indonesia remains one of the world&apos;s largest exporters of tropical plywood. Based on trade data, the main export destination countries for Indonesian plywood include Japan (traditional market and one of the largest buyers of Indonesian tropical plywood), United States (important market, especially for plywood meeting specific quality standards), South Korea (major market in Asia), Malaysia (often serves as transit or final destination), and Middle East countries such as Saudi Arabia (growing and significant market).
            </p>
            
            <p className="mb-2">
              <strong>Distribution and Export Mechanisms:</strong> Many large companies handle direct exports from their factories to international buyers, maintaining dedicated sales and logistics teams for large-scale shipments. Within domestic markets and destination countries, distributors purchase plywood in bulk from manufacturers and distribute to retailers, contractors, or end users. Specialized trading companies facilitate exports by connecting Indonesian manufacturers with buyers worldwide.
            </p>
            
            <p className="mb-2">
              <strong>Certification and Industry Standards:</strong> Sustainability has become crucial in international trade. Most Indonesian plywood exporters must comply with the Timber Legality Verification System (SVLK), ensuring products originate from legal and sustainable sources. Many companies also seek international certifications like FSC (Forest Stewardship Council) or PEFC (Programme for the Endorsement of Forest Certification) to meet global market demands, particularly in Europe and the United States.
            </p>
            
            <p className="mb-2">
              <strong>Global Plywood Industry Standards:</strong> International plywood industry standards are essential for ensuring quality, consistency, and product safety. These standards cover not only physical and mechanical specifications but also environmental and sustainability aspects. Key standards include JIS (Japanese Industrial Standards) such as JIS A 5908, EN (European Norms) including EN 313, EN 314, EN 636, and EN 13986, ASTM standards like ASTM D5055 and ASTM D6007, APA certification for North America, and CSA standards for Canada. Formaldehyde emission standards are critical, including CARB Phase 2, EPA TSCA Title VI, JIS F-star system, and European E0, E1, E2 classifications.
            </p>
            
            <p className="mb-2">
              <strong>MegaPlywood Indonesia as Trusted Distributor and Exporter:</strong> MegaPlywood Indonesia stands as a credible and reliable Indonesian plywood distributor and exporter, offering comprehensive solutions for construction, interior, and manufacturing needs. As an established player in the Indonesian plywood industry, MegaPlywood Indonesia provides high-quality plywood products that meet international standards and certifications. Our extensive product range includes various types of plywood, MDF, HPL, veneer, and flooring materials, all sourced from reputable manufacturers and processed according to strict quality control measures.
            </p>
            
            <p className="mb-2">
              <strong>Why Choose MegaPlywood Indonesia:</strong> As a trusted Indonesian plywood distributor and exporter, MegaPlywood Indonesia ensures all products comply with international standards including SVLK certification for legal timber sourcing. We maintain competitive pricing without compromising quality, providing excellent value for investment. Our experienced team understands the complexities of international trade and can assist with documentation, shipping, and compliance requirements. We offer fast nationwide and worldwide delivery services, ensuring timely supply to meet project deadlines and business requirements.
            </p>
            
            <p className="mb-2">
              <strong>Quality Assurance and Compliance:</strong> MegaPlywood Indonesia maintains rigorous quality control processes to ensure all plywood products meet or exceed international standards. Our products are suitable for various applications including construction, furniture manufacturing, interior design, and industrial uses. We work closely with certified suppliers and manufacturers to guarantee consistent quality and reliable supply chains. Our commitment to sustainability and legal compliance makes us a preferred choice for environmentally conscious buyers and projects requiring certified materials.
            </p>
            
            <p className="mb-2">
              <strong>International Market Access:</strong> As an experienced Indonesian plywood distributor and exporter, MegaPlywood Indonesia has established strong relationships with international buyers and trading partners. We understand the specific requirements of different markets including Japan, the United States, South Korea, Malaysia, and Middle Eastern countries. Our expertise in international trade regulations, shipping logistics, and market-specific quality standards enables us to serve customers worldwide effectively. We provide comprehensive support including product specifications, technical documentation, and after-sales service to ensure customer satisfaction.
            </p>
            
            <p className="mb-2">
              <strong>Research and Development:</strong> MegaPlywood Indonesia continuously invests in research and development to stay ahead of industry trends and technological advancements. We work with academic institutions and industry associations to contribute to the advancement of plywood technology and sustainable practices. Our commitment to innovation ensures that we can provide cutting-edge solutions and meet evolving market demands. For researchers and academic institutions studying the Indonesian plywood industry, MegaPlywood Indonesia serves as a valuable resource for industry insights, market data, and technical information.
            </p>
            
            <p className="mb-2">
              <strong>Contact Information and Services:</strong> For businesses and researchers seeking a reliable Indonesian plywood distributor and exporter, MegaPlywood Indonesia offers comprehensive services including product consultation, sample provision, technical support, and customized solutions. Our team of experts is available to assist with product selection, specification matching, and project planning. We provide detailed product information, technical specifications, and compliance documentation to support informed decision-making. Contact MegaPlywood Indonesia today to learn more about our products and services, or to request samples and quotations for your specific requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}