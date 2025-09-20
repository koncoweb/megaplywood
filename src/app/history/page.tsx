import { Metadata } from 'next'
import { History, Clock, Globe, Factory } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Complete Plywood History - Global & Indonesian Plywood Industry Timeline | MegaPlywood',
  description: 'Explore the comprehensive history of plywood industry from ancient times to modern era. Learn about Indonesian plywood development, global innovations, and MegaPlywood Indonesia as your trusted worldwide plywood solution provider.',
  keywords: [
    'plywood history', 'indonesian plywood industry', 'global plywood development', 'plywood timeline', 
    'wood industry history', 'plywood evolution', 'construction materials history', 'indonesian timber industry',
    'plywood manufacturing history', 'worldwide plywood supplier', 'digital plywood platform', 'megaplywood indonesia'
  ],
  openGraph: {
    title: 'Complete History of Plywood Industry - Global & Indonesian Development',
    description: 'Discover the fascinating journey of plywood from ancient civilizations to modern manufacturing. Learn about Indonesian plywood industry evolution and MegaPlywood as your global solution.',
    type: 'website',
    images: [
      {
        url: '/images/static/hero/plywood-history-plywood-indonesia-sml.webp',
        width: 1200,
        height: 630,
        alt: 'Plywood History and Indonesian Industry Development',
      },
    ],
  },
}

export default function SejarahPage() {
  const globalTimeline = [
    {
      year: '1500 BC',
      title: 'Ancient Origins',
      description: 'Ancient Egypt: Early forms of plywood found in Pharaoh tombs. Egyptians used thin wood layers bonded together for coffins and furniture, establishing the basic concept of modern plywood.',
      icon: History
    },
    {
      year: '1797',
      title: 'First Veneer Machine',
      description: 'Samuel Bentham, an English engineer and inventor, patented the first machine capable of efficiently producing veneer (thin wood layers).',
      icon: Factory
    },
    {
      year: '1865',
      title: 'First Official Plywood Patent',
      description: 'John K. Mayo from New York City obtained the first patent for what could officially be called plywood, describing the process of bonding wood layers with crossed grain directions.',
      icon: Globe
    },
    {
      year: '1930s',
      title: 'Modern Plywood Revolution',
      description: 'Europe began using hot press machines and synthetic resin adhesives, enabling much stronger, water-resistant, and durable plywood production.',
      icon: Clock
    }
  ]

  const indonesiaTimeline = [
    {
      year: '1967',
      title: 'Forest Concession Rights',
      description: 'The Indonesian government began granting Forest Concession Rights (HPH) to private companies, laying the foundation for the wood processing industry.',
      icon: History
    },
    {
      year: '1970s',
      title: 'Early Plywood Factories',
      description: 'Establishment of several early plywood factories in Indonesia, including PT. Kutai Timber Indonesia (KTI) founded in September 1970.',
      icon: Factory
    },
    {
      year: '1980-1981',
      title: 'Strategic Policy Shift',
      description: 'Government banned log exports and promoted domestic wood processing industry, with plywood as the core industry, triggering explosive growth.',
      icon: Globe
    },
    {
      year: '1997',
      title: 'Peak Production Era',
      description: 'Indonesia reached peak plywood production with 122 factories and became one of the world\'s largest tropical plywood exporters.',
      icon: Clock
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-24" style={{ backgroundImage: 'url(/images/static/hero/plywood-history-plywood-indonesia-sml.webp)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/60 to-white/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              Complete Plywood History
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
              Explore the fascinating journey of plywood from ancient civilizations to modern manufacturing, 
              and discover how Indonesia became a global leader in plywood production
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Evolution of Plywood Industry
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Let us explore the comprehensive history of the plywood industry both globally and in Indonesia. 
              From ancient Egyptian tombs to modern digital platforms, plywood has evolved into one of the most 
              essential construction materials worldwide, with Indonesia playing a pivotal role in its global development.
            </p>
          </div>
        </div>
      </section>

      {/* Global History Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Global Plywood Industry History
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The journey of plywood spans thousands of years, from ancient civilizations to modern manufacturing excellence
            </p>
          </div>

          <div className="space-y-12">
            {globalTimeline.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="relative">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="ml-8 flex-1">
                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <span className="text-blue-600 font-semibold text-lg">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-gray-600 mt-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  {index < globalTimeline.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-12 bg-blue-300"></div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Additional Global History Content */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ancient Foundations (1500 BC)</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  <strong>Ancient Egypt:</strong> Early forms of plywood were discovered in Pharaoh tombs. Ancient Egyptians used thin wood layers bonded together to create coffins and furniture, establishing the fundamental concept of modern plywood technology.
                </p>
                <p className="text-gray-600">
                  <strong>Ancient China:</strong> A thousand years ago, the Chinese also employed similar techniques by thinning wood and bonding layers together for furniture manufacturing.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Industrial Revolution Era</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  <strong>17th-18th Centuries:</strong> European craftsmen in England and France began working with wood using basic plywood principles, though applications were limited to furniture and household items.
                </p>
                <p className="text-gray-600">
                  <strong>Late 1800s:</strong> Plywood production began expanding rapidly in France and the United States, particularly for decorative panels and household goods manufacturing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indonesian History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Indonesian Plywood Industry History
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a global powerhouse in plywood production
            </p>
          </div>

          <div className="space-y-12">
            {indonesiaTimeline.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="relative">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-600 to-green-800 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="ml-8 flex-1">
                      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <span className="text-green-600 font-semibold text-lg">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-gray-600 mt-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  {index < indonesiaTimeline.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-12 bg-green-300"></div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Detailed Indonesian History */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pre-1980s (Early Phase)</h3>
              <p className="text-gray-600 mb-4">
                In 1973, Indonesia had only two plywood factories with limited capacity. The industry was in its infancy, with basic technology and minimal production capabilities.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">1980s (Golden Era)</h3>
              <p className="text-gray-600 mb-4">
                The government's strategic policy of banning log exports and promoting domestic processing triggered explosive growth. New factories emerged throughout Kalimantan and Sumatra.
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Post-1997 (Challenges & Adaptation)</h3>
              <p className="text-gray-600 mb-4">
                The industry faced multiple challenges including raw material shortages, global competition, and environmental concerns, leading to innovation and quality-focused approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Challenges Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Modern Era Challenges & Innovations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How the Indonesian plywood industry adapted to global challenges and embraced digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contemporary Challenges</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">!</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Raw Material Crisis</h4>
                    <p className="text-gray-600">Declining log supply due to unsustainable logging practices and illegal logging issues</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">!</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Global Competition</h4>
                    <p className="text-gray-600">Emergence of competitors from China and Vietnam, plus substitute materials like MDF and OSB</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">!</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Environmental Issues</h4>
                    <p className="text-gray-600">Global market demands for sustainability and legal sourcing, requiring FSC or SVLK certifications</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Industry Response & Innovation</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Over Quantity</h4>
                    <p className="text-gray-600">Shift from mass production to high-quality, specialized products</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Product Diversification</h4>
                    <p className="text-gray-600">Development of specialized products like combination plywood, film-faced plywood, and three-layers panels</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Digital Transformation</h4>
                    <p className="text-gray-600">Embracing digital platforms for global reach and efficient customer service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MegaPlywood Solution Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            MegaPlywood Indonesia
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Your Worldwide Solution for High-Quality Indonesian Plywood
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Digital Platform Revolution</h3>
            <p className="text-lg text-gray-200 mb-8 max-w-4xl mx-auto">
              As the Indonesian plywood industry continues to evolve and face new challenges, 
              <strong className="text-white"> MegaPlywood Indonesia emerges as your trusted worldwide solution</strong> for 
              obtaining high-quality, reliable Indonesian plywood through our innovative digital platform.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Global Reach</h4>
                <p className="text-gray-200">Connect with Indonesian plywood suppliers worldwide through our digital platform</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Quality Assurance</h4>
                <p className="text-gray-200">Verified suppliers with international certifications and quality standards</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Efficient Process</h4>
                <p className="text-gray-200">Streamlined digital procurement process for faster, more reliable transactions</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Building on decades of Indonesian plywood industry excellence, MegaPlywood Indonesia combines 
              traditional craftsmanship with modern digital innovation to deliver superior plywood solutions 
              to customers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/products"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Explore Our Products
              </a>
              <a
                href="https://wa.me/6285640012454?text=Hi%20MegaPlywood,%20I%20am%20interested%20in%20getting%20a%20quote%20and%20free%20sample%20for%20your%20plywood%20products.%20Please%20provide%20more%20information."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Quote & Free Sample</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Citations Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              References & Citations
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The following sources provide additional information and verification for the historical content presented on this page.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Indonesian Plywood Industry Sources</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <a 
                    href="https://www.apkindo.org/id/sejarah-apkindo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    APKINDO - Sejarah Asosiasi Panel Kayu Indonesia
                  </a>
                  <p className="text-gray-500 text-xs mt-1">Official history of Indonesian Panel Association established in 1976</p>
                </div>
                <div>
                  <a 
                    href="https://www.kti.co.id/id/sejarah/sejarah/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    PT. Kutai Timber Indonesia - Company History
                  </a>
                  <p className="text-gray-500 text-xs mt-1">Historical timeline of PT. KTI since 1970</p>
                </div>
                <div>
                  <a 
                    href="https://www.cdmione.com/pertumbuhan-industri-plywood-indonesia/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Pertumbuhan Industri Plywood Indonesia
                  </a>
                  <p className="text-gray-500 text-xs mt-1">Analysis of Indonesian plywood industry growth and challenges</p>
                </div>
                <div>
                  <a 
                    href="https://etd.repository.ugm.ac.id/penelitian/detail/173081" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Gadjah Mada University - Plywood Market Study
                  </a>
                  <p className="text-gray-500 text-xs mt-1">Academic research on plywood market development in Yogyakarta</p>
                </div>
                <div>
                  <a 
                    href="https://repository.ipb.ac.id/jspui/handle/123456789/115643" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    IPB Repository - Global Plywood Market Analysis 2010-2020
                  </a>
                  <p className="text-gray-500 text-xs mt-1">Comprehensive market analysis by Bogor Agricultural University</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Industry Development & Policy Sources</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <a 
                    href="https://www.tempo.co/ekonomi/pukulan-si-gelondongan-1079480" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Tempo - Pukulan Si Gelondongan (Log Export Policy)
                  </a>
                  <p className="text-gray-500 text-xs mt-1">Analysis of 1980s log export ban policy impact</p>
                </div>
                <div>
                  <a 
                    href="https://economy.okezone.com/read/2009/06/05/277/226378/industri-plywood-kaltim-kehilangan-pamor" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Okezone - Kaltim Plywood Industry Decline
                  </a>
                  <p className="text-gray-500 text-xs mt-1">Report on East Kalimantan plywood industry challenges</p>
                </div>
                <div>
                  <a 
                    href="https://jejakrekam.com/2019/02/11/sempat-bersinar-industri-plywood-di-kalsel-kini-mulai-meredup/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Jejak Rekam - South Kalimantan Plywood Industry
                  </a>
                  <p className="text-gray-500 text-xs mt-1">Historical overview of South Kalimantan plywood development</p>
                </div>
                <div>
                  <a 
                    href="https://indonesia.go.id/kategori/indonesia-dalam-angka/762/upaya-gemilang-geser-basis-ke-hutan-lestari" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Indonesia.go.id - Sustainable Forest Development
                  </a>
                  <p className="text-gray-500 text-xs mt-1">Government initiative for sustainable forest management</p>
                </div>
                <div>
                  <a 
                    href="https://www.antaranews.com/berita/771873/pemerintah-berupaya-kembalikan-kejayaan-kayu-lapis-indonesia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Antara News - Government Efforts to Restore Plywood Industry
                  </a>
                  <p className="text-gray-500 text-xs mt-1">Current government initiatives for industry revival</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Industry Associations</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• <a href="https://www.apkindo.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">APKINDO (Indonesian Panel Association)</a></li>
                  <li>• <a href="https://www.aphi.or.id" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">APHI (Indonesian Forest Business Association)</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Government Resources</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• <a href="https://www.menlhk.go.id" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ministry of Environment and Forestry</a></li>
                  <li>• <a href="https://www.kemendag.go.id" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ministry of Trade</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} | 
              Sources are provided for educational and reference purposes. External links are subject to their respective website terms and conditions.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
