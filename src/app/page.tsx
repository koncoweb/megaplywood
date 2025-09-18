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
      href: '/sejarah',
      color: 'from-gray-700 to-black'
    },
    {
      title: 'Our Products',
      description: 'Our High Quality Plywood',
      icon: Package,
      href: '/produk',
      color: 'from-gray-700 to-black'
    },
    {
      title: 'Specifications',
      description: 'Detailed Plywood Specifications',
      icon: FileText,
      href: '/spesifikasi',
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
              MegaPlywood supplies high-quality Indonesian plywood, MDF, HPL, veneer, and flooring for construction, interiors, and manufacturing. Competitive pricing, complete stock, and fast nationwide and worldwide delivery.
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

      {/* Cards Section */}
      <section className="py-16 bg-white">
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
                href="/kontak"
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
    </div>
  )
}