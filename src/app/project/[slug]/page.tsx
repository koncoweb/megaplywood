import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, MapPin, Package, Download, ExternalLink } from 'lucide-react'
import { notFound } from 'next/navigation'

// Project data - in a real app, this would come from a CMS or database
const projects = {
  'plywood-manufacture-and-export-to-cyprus': {
    title: 'Plywood Manufacture and Export to Cyprus',
    client: 'M. W. W. WOOD WORKING, LTD',
    country: 'Cyprus',
    date: 'August 2023',
    image: '/images/static/hero/mega-plywood-indonesia-plywood-export-to-cyprus-min.jpeg',
    description: 'Indonesia Plywood to Cyprus M. W. W. WOOD WORKING, LTD',
    content: `From the lush rainforests of Indonesia to the sun-kissed shores of Cyprus, our journey to bring you the finest plywood begins. 🇨🇾

On August 2023 Mega Plywood Indonesia accomplished plywood manufacture and export to cyprus, for our client : M. W. W. WOOD WORKING, LTD.

Mega Plywood Indonesia source our timber from sustainably managed forests, ensuring the highest quality for our international and domestic clients and environmental responsibility.

Our skilled artisans then craft each piece of plywood with meticulous care, resulting in a product that is both beautiful and durable.

Finally, Mega Plywood Indonesia proudly export our plywood to Cyprus, where it is used to build homes, businesses, and even works of art.

This successful project demonstrates our capability to deliver high-quality Indonesian plywood to international markets. The shipment included premium hardwood and albasia plywood products, meeting the strict quality standards required for the Cyprus market.

Our team ensured proper documentation, quality control, and timely delivery, maintaining our reputation as a reliable plywood exporter from Indonesia.

With our commitment to quality, sustainability, and craftsmanship, we are proud to be your partner in building a brighter future.`,
    volume: '40 HC Container',
    products: ['Hardwood Plywood', 'Albasia Plywood'],
    documents: [
      {
        name: 'Bill of Lading - Hardwood Container',
        file: '/pdf/inv.cont1_.40hc.hardwood.pdf',
        type: 'PDF'
      },
      {
        name: 'Bill of Lading - Albasia Container', 
        file: '/pdf/inv.cont2_.40hc.albasia.pdf',
        type: 'PDF'
      }
    ],
    status: 'Completed',
    seo: {
      title: 'Plywood Export to Cyprus - MegaPlywood Indonesia Project',
      description: 'Successful plywood manufacture and export to Cyprus for M.W.W. Wood Working Ltd. View our project details and documentation.',
      keywords: ['plywood export cyprus', 'indonesia plywood', 'hardwood plywood', 'albasia plywood', 'international shipping']
    }
  },
  'plywood-manufacture-and-shipment-for-ileys-general-trading-l-l-c': {
    title: 'Plywood Manufacture and Shipment for ILEYS GENERAL TRADING L.L.C',
    client: 'ILEYS GENERAL TRADING L.L.C',
    country: 'Somalia',
    date: 'October 2023',
    image: '/images/static/gallery/packaging-min.jpeg',
    description: 'We Manufacture and Ship plywood for Our Client in Somalia',
    content: `From the lush rainforests of Indonesia to the rebuilding nation of Somalia, our journey to bring you the finest plywood begins. 🇸🇴

On 23 October 2023, we accomplished Plywood Manufacture and Shipment for ILEYS GENERAL TRADING L.L.C by Mega Plywood Indonesia.

Plywood from Indonesia to Somalia: A Partnership for Building a Brighter Future

Indonesia, a nation rich in natural resources, is poised to become a major exporter of plywood to Somalia, a country undergoing rapid reconstruction and development. This partnership presents a unique opportunity to leverage Indonesia's abundant timber resources and Somalia's growing demand for building materials, creating a win-win situation for both countries.

Plywood, a versatile and durable material, is essential for construction projects of all sizes. In Somalia, the need for plywood is particularly acute, as the country rebuilds its infrastructure following years of conflict. Indonesian plywood manufacturers, with their expertise and access to high-quality timber, are perfectly positioned to meet this demand.

The export of plywood from Indonesia to Somalia is not just about business; it is about building a brighter future for both nations. By providing Somalia with the materials it needs to rebuild, Indonesia is contributing to the country's long-term stability and prosperity. This, in turn, creates new opportunities for trade and investment between the two countries.

In addition to the economic benefits, the project will also have a positive impact on the environment. By using sustainably sourced Indonesian timber, the project will help to conserve Somalia's own forests. This commitment to environmental sustainability is essential for ensuring the long-term success of the project and the well-being of future generations.

The partnership between Indonesia and Somalia to manufacture and export plywood is a shining example of international cooperation for mutual benefit. By working together, these two countries can build a stronger future for themselves and for the region.

We are confident that this project will be a success and that it will serve as a model for future partnerships between developing countries. We are committed to working with our partners in Somalia to ensure that this project has a positive impact on both of our countries.`,
    volume: 'Container Shipment',
    products: ['Construction Plywood', 'Structural Plywood', 'General Purpose Plywood'],
    documents: [],
    status: 'Completed',
    seo: {
      title: 'Plywood Export to Somalia - MegaPlywood Indonesia Project',
      description: 'Successful plywood manufacture and shipment to Somalia for ILEYS GENERAL TRADING L.L.C. Building partnerships for reconstruction and development.',
      keywords: ['plywood export somalia', 'indonesia plywood', 'construction plywood', 'structural plywood', 'international cooperation', 'reconstruction materials']
    }
  },
  'plywood-payment-from-m-w-w-wood-working-ltd-cyprus-to-mega-plywood-indonesia': {
    title: 'Payment Proof from M.W.W. Wood Working Ltd Cyprus to Mega Plywood Indonesia',
    client: 'M. W. W. WOOD WORKING, LTD',
    country: 'Cyprus',
    date: '2022 - Present',
    image: '/images/static/gallery/payment-from-mww-woodworking-cyprus.jpg',
    description: 'Payment proof and business relationship documentation between M.W.W. Wood Working Ltd Cyprus and Mega Plywood Indonesia',
    content: `From the Mediterranean shores of Cyprus to the tropical forests of Indonesia, our business partnership continues to flourish. 🇨🇾

M. W. W. Wood Working, Ltd is a company based in Cyprus that specializes in producing and exporting high-quality plywood products to various countries around the world. The company has been in operation since 1998 and has a reputation for delivering excellent customer service and satisfaction.

Mega Plywood Indonesia is a Plywood Manufacturer from Indonesia that sell plywood products from M. W. W. Wood Working, Ltd. The buyer has been working with the company since 2022 and has established a long-term business relationship based on trust and mutual benefit.

The payment proof from M. W. W. Wood Working, Ltd to Mega Plywood Indonesia is a document that shows the details of the transaction between the two parties, such as the date, amount, currency, method, and purpose of payment. The payment proof can be used to verify the legality and validity of the business transaction.

This ongoing partnership demonstrates the strength of international trade relationships and the trust that has been built between our companies over the years. The consistent payment records and business transactions showcase the reliability and professionalism of both parties in maintaining a successful business relationship.

Our collaboration with M. W. W. Wood Working, Ltd represents more than just business transactions - it's a testament to the power of international cooperation, mutual trust, and shared commitment to quality and excellence in the plywood industry.`,
    volume: 'Ongoing Business Relationship',
    products: ['Payment Documentation', 'Business Transaction Records', 'Partnership Verification'],
    documents: [],
    status: 'Active Partnership',
    seo: {
      title: 'Payment Proof - M.W.W. Wood Working Ltd Cyprus to Mega Plywood Indonesia',
      description: 'Payment proof and business relationship documentation between M.W.W. Wood Working Ltd Cyprus and Mega Plywood Indonesia. Established partnership since 2022.',
      keywords: ['payment proof', 'cyprus plywood', 'business partnership', 'international trade', 'mww wood working', 'mega plywood indonesia', 'business documentation']
    }
  },
  'plywood-factory-visit-for-client-from-india': {
    title: 'Plywood Factory Visit for Client from India',
    client: 'Mr. Chetan (India)',
    country: 'India',
    date: 'November 2023',
    image: '/images/static/gallery/indonesian-plywood-manufacturer-factory-visit-400x284.jpg',
    description: 'Indonesian plywood manufacturer factory visit for our client from India, showcasing our production process and quality standards.',
    content: `From the bustling markets of India to the heart of Indonesian plywood manufacturing, we welcome our international clients to witness excellence in action. 🇮🇳

Indonesian plywood manufacturer factory visit. On November 2023 we give Plywood Factory Visit For Our Client from India, Mr. Chetan.

A plywood factory visit is a service that allows potential customers or partners to see how plywood is made in a factory. It can help them understand the quality, efficiency, and sustainability of the plywood production process, as well as the challenges and opportunities faced by the plywood industry.

A plywood factory visit can also be a way to showcase the products and services of a plywood company, such as its variety, design, performance, and innovation. It can help them attract more customers, increase their brand awareness, and strengthen their competitive advantage.

A plywood factory visit usually involves several steps, such as:

Planning: The company should prepare for the visit by selecting a suitable location, date, time, and agenda. The company should also arrange for transportation, accommodation, catering, and security for the visitors.

Preparation: The company should ensure that the factory is clean, organized, and ready for the visit. The company should also provide relevant information and materials for the visitors, such as brochures, catalogs, samples, videos, etc.

Conducting: The company should welcome the visitors warmly and professionally. The company should then guide them through the factory premises and facilities, explaining each step of the plywood production process in detail. The company should also answer any questions or concerns that the visitors may have.

Follow-up: The company should thank the visitors for their time and interest. The company should also send them a feedback form or survey to collect their opinions and suggestions. The company should also follow up with them after some time to maintain contact and relationship.

This factory visit with Mr. Chetan from India demonstrates our commitment to transparency, quality, and customer service. By opening our doors to international clients, we showcase our advanced manufacturing processes, quality control measures, and sustainable practices that make Mega Plywood Indonesia a trusted partner in the global plywood industry.`,
    volume: 'Factory Tour & Demonstration',
    products: ['Factory Tour', 'Production Process Demonstration', 'Quality Control Showcase', 'Product Samples'],
    documents: [],
    status: 'Completed',
    seo: {
      title: 'Plywood Factory Visit - Client from India - Mega Plywood Indonesia',
      description: 'Indonesian plywood manufacturer factory visit for client from India. November 2023 factory tour showcasing production process and quality standards.',
      keywords: ['plywood factory visit', 'indonesia plywood', 'factory tour', 'manufacturing process', 'quality control', 'international client', 'india plywood']
    }
  }
}

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects[params.slug as keyof typeof projects]
  
  if (!project) {
    return {
      title: 'Project Not Found - MegaPlywood Indonesia'
    }
  }

  return {
    title: project.seo.title,
    description: project.seo.description,
    keywords: project.seo.keywords,
    openGraph: {
      title: project.seo.title,
      description: project.seo.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-32 md:py-40 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${project.image})`
          }}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            {/* Back Button */}
            <Link
              href="/projects-portofolio"
              className="inline-flex items-center text-white hover:text-gray-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Portfolio
            </Link>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 max-w-4xl">
              {project.description}
            </p>
            
            {/* Project Meta */}
            <div className="flex flex-wrap gap-6 text-lg">
              <div className="flex items-center text-white">
                <MapPin className="w-5 h-5 mr-2" />
                {project.country}
              </div>
              <div className="flex items-center text-white">
                <Calendar className="w-5 h-5 mr-2" />
                {project.date}
              </div>
              <div className="flex items-center text-white">
                <Package className="w-5 h-5 mr-2" />
                {project.volume}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {project.content}
                </div>
              </div>

              {/* Products Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Products Delivered</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.products.map((product, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center">
                        <Package className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="font-semibold text-gray-900">{product}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Project Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Client</span>
                    <p className="text-gray-900 font-medium">{project.client}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Country</span>
                    <p className="text-gray-900 font-medium">{project.country}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Date</span>
                    <p className="text-gray-900 font-medium">{project.date}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Volume</span>
                    <p className="text-gray-900 font-medium">{project.volume}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Status</span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Documents Section */}
                {project.documents && project.documents.length > 0 && (
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Project Documents</h4>
                    <div className="space-y-3">
                      {project.documents.map((doc, index) => (
                        <a
                          key={index}
                          href={doc.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors group"
                        >
                          <div className="flex items-center">
                            <Download className="w-4 h-4 text-gray-500 mr-3" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                              <p className="text-xs text-gray-500">{doc.type}</p>
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready for Your Next Project?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Let us help you with your plywood export needs. Contact us today to discuss your requirements and get a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 text-center text-lg"
            >
              Get Quote
            </Link>
            <Link
              href="/projects-portofolio"
              className="border-2 border-black hover:bg-black hover:text-white text-black px-8 py-4 rounded-lg font-semibold transition-colors duration-200 text-center text-lg"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
