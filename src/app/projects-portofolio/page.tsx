import Link from 'next/link'
import { Globe, MapPin, Calendar, Package, CheckCircle } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects Portfolio - Worldwide Plywood Shipping',
  description: 'Explore our successful plywood shipping projects worldwide. MegaPlywood Indonesia has delivered high-quality plywood to international markets including Cyprus, Somalia, and India, with established business partnerships and factory visits.',
  keywords: ['plywood export', 'worldwide shipping', 'international projects', 'plywood distributor', 'export projects', 'Cyprus plywood', 'Somalia plywood', 'India plywood', 'factory visit', 'business partnerships', 'global delivery'],
}

export default function ProjectsPortfolioPage() {
  const projects = [
    {
      id: 1,
      title: 'Cyprus Construction Project',
      country: 'Cyprus',
      year: '2023',
      description: 'Large-scale plywood delivery for major construction project in Cyprus. Supplied premium Meranti plywood for structural applications.',
      image: '/images/static/hero/mega-plywood-indonesia-plywood-export-to-cyprus-min.jpeg',
      volume: '40 HC Container',
      products: ['Hardwood Plywood', 'Albasia Plywood'],
      status: 'Completed',
      slug: 'plywood-manufacture-and-export-to-cyprus'
    },
    {
      id: 2,
      title: 'Somalia Construction Project',
      country: 'Somalia',
      year: '2023',
      description: 'Plywood manufacture and shipment for ILEYS GENERAL TRADING L.L.C. Supporting reconstruction and development in Somalia.',
      image: '/images/static/gallery/packaging-min.jpeg',
      volume: 'Container Shipment',
      products: ['Construction Plywood', 'Structural Plywood', 'General Purpose Plywood'],
      status: 'Completed',
      slug: 'plywood-manufacture-and-shipment-for-ileys-general-trading-l-l-c'
    },
    {
      id: 3,
      title: 'Payment Proof - M.W.W. Wood Working Ltd',
      country: 'Cyprus',
      year: '2022 - Present',
      description: 'Payment proof and business relationship documentation between M.W.W. Wood Working Ltd Cyprus and Mega Plywood Indonesia.',
      image: '/images/static/gallery/payment-from-mww-woodworking-cyprus.jpg',
      volume: 'Ongoing Business Relationship',
      products: ['Payment Documentation', 'Business Transaction Records', 'Partnership Verification'],
      status: 'Active Partnership',
      slug: 'plywood-payment-from-m-w-w-wood-working-ltd-cyprus-to-mega-plywood-indonesia'
    },
    {
      id: 4,
      title: 'Factory Visit - Client from India',
      country: 'India',
      year: '2023',
      description: 'Indonesian plywood manufacturer factory visit for our client from India, showcasing our production process and quality standards.',
      image: '/images/static/gallery/indonesian-plywood-manufacturer-factory-visit-400x284.jpg',
      volume: 'Factory Tour & Demonstration',
      products: ['Factory Tour', 'Production Process Demonstration', 'Quality Control Showcase', 'Product Samples'],
      status: 'Completed',
      slug: 'plywood-factory-visit-for-client-from-india'
    }
  ]

  const stats = [
    { label: 'Countries Served', value: '15+', icon: Globe },
    { label: 'Projects Completed', value: '200+', icon: CheckCircle },
    { label: 'Volume Shipped', value: '10,000+ m³', icon: Package },
    { label: 'Years Experience', value: '10+', icon: Calendar }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-32 md:py-40 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/static/hero/mega-plywood-indonesia-plywood-export-to-cyprus-min.jpeg)'
          }}
        />
        
        {/* Overlay Gradient - Same as homepage */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-white/10" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
              PROJECTS
              <span className="block text-black">PORTFOLIO</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-800 max-w-4xl">
              Explore our successful worldwide plywood shipping projects. We have delivered high-quality Indonesian plywood to construction and manufacturing projects across the globe, including Cyprus, Somalia, and India, with established business partnerships, payment documentation, and factory visits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 text-center text-lg"
              >
                Start Your Project
              </Link>
              <Link
                href="/products"
                className="border-2 border-black hover:bg-black hover:text-white text-black px-8 py-4 rounded-lg font-semibold transition-colors duration-200 text-center text-lg"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most successful international plywood shipping projects, 
              showcasing our expertise in global logistics and quality delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                href={project.slug ? `/project/${project.slug}` : "/contact"}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden block"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.country}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.status}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-semibold">{project.country}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{project.year}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Package className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-semibold text-gray-700">Volume: {project.volume}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold">Products:</span> {project.products.join(', ')}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{project.country}</span>
                    <span className="text-green-600 font-semibold text-sm">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Global Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to worldwide plywood distribution excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Shipping Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Indonesia to your destination, we ensure seamless delivery of high-quality plywood worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Inspection</h3>
              <p className="text-gray-600">Rigorous quality control and inspection of all plywood products before shipping.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Packaging & Protection</h3>
              <p className="text-gray-600">Professional packaging to ensure products arrive in perfect condition.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Logistics</h3>
              <p className="text-gray-600">Expert coordination of international shipping and customs clearance.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Delivery & Support</h3>
              <p className="text-gray-600">On-time delivery with comprehensive after-sales support and documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join our global network of satisfied customers. Let us help you with your next plywood project, 
              whether it&apos;s for construction, furniture manufacturing, or industrial applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 text-center text-lg"
              >
                Get Quote
              </Link>
              <Link
                href="/products"
                className="border-2 border-black hover:bg-black hover:text-white text-black px-8 py-4 rounded-lg font-semibold transition-colors duration-200 text-center text-lg"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
