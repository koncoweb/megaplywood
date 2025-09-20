import { Metadata } from 'next'
import { MapPin, Clock, MessageCircle, Globe, Factory } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact MegaPlywood Indonesia - Phone +6285640012454 | WhatsApp & Production Locations',
  description: 'Contact MegaPlywood Indonesia via WhatsApp +6285640012454 for plywood consultation. Visit our production locations in Central Java and East Java. Professional plywood distributor.',
  keywords: [
    'contact megaplywood indonesia', 'whatsapp megaplywood', 'phone +6285640012454', 
    'plywood consultation indonesia', 'megaplywood production locations', 'central java plywood',
    'east java plywood', 'magelang plywood', 'banyumas plywood', 'batang plywood', 'pacitan plywood'
  ],
  openGraph: {
    title: 'Contact MegaPlywood Indonesia - WhatsApp +6285640012454',
    description: 'Get in touch with MegaPlywood Indonesia via WhatsApp for plywood consultation. Production locations in Central Java and East Java.',
    type: 'website',
  },
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MessageCircle,
      title: 'MEGAPLYWOOD INDONESIA PHONE & WHATSAPP',
      details: ['+6285640012454'],
      description: 'Contact Our WhatsApp - Connect Directly With Us by WhatsApp',
      whatsapp: true
    },
    {
      icon: Globe,
      title: 'MEGAPLYWOOD INDONESIA WEBSITE',
      details: ['www.megaplywoodindonesia.com'],
      description: 'Visit our official website for more information',
      website: true
    },
    {
      icon: Factory,
      title: 'MEGA PLYWOOD INDONESIA PRODUCTION PARTNERS LOCATIONS',
      details: [
        'Grabag, Magelang – Central Java',
        'Jatilawang, Banyumas – Central Java', 
        'Subah, Batang – Central Java',
        'Arjosari, Pacitan – East Java'
      ],
      description: 'Our production facilities across Java'
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      details: ['Monday - Friday: 08:00 - 17:00', 'Saturday: 08:00 - 15:00', 'Sunday: Closed'],
      description: 'Our team is ready to serve you'
    }
  ]

  const departments = [
    {
      name: 'Sales & Marketing',
      whatsapp: '+6285640012454',
      description: 'Product consultation and sales via WhatsApp'
    },
    {
      name: 'Customer Service',
      whatsapp: '+6285640012454',
      description: 'Customer support and complaints via WhatsApp'
    },
    {
      name: 'Technical Support',
      whatsapp: '+6285640012454',
      description: 'Technical consultation and specifications via WhatsApp'
    },
    {
      name: 'Production Locations',
      locations: [
        'Grabag, Magelang – Central Java',
        'Jatilawang, Banyumas – Central Java',
        'Subah, Batang – Central Java',
        'Arjosari, Pacitan – East Java'
      ],
      description: 'Our production facilities across Java'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "MegaPlywood Indonesia",
            "url": "https://www.megaplywoodindonesia.com",
            "telephone": "+6285640012454",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+6285640012454",
              "contactType": "customer service",
              "availableLanguage": ["Indonesian", "English"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jalan Gajahmada Batang",
              "addressLocality": "Batang",
              "addressRegion": "Central Java",
              "addressCountry": "Indonesia"
            },
            "location": [
              {
                "@type": "PostalAddress",
                "addressLocality": "Grabag",
                "addressRegion": "Magelang",
                "addressCountry": "Indonesia"
              },
              {
                "@type": "PostalAddress", 
                "addressLocality": "Jatilawang",
                "addressRegion": "Banyumas",
                "addressCountry": "Indonesia"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Subah", 
                "addressRegion": "Batang",
                "addressCountry": "Indonesia"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Arjosari",
                "addressRegion": "Pacitan", 
                "addressCountry": "Indonesia"
              }
            ],
            "sameAs": [
              "https://www.megaplywoodindonesia.com"
            ]
          })
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Our professional team is ready to help your plywood needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-lg text-gray-600">
              Choose the best way to contact us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    contact.whatsapp ? 'bg-green-100' : 
                    contact.website ? 'bg-blue-100' : 
                    'bg-gray-100'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${
                      contact.whatsapp ? 'text-green-600' : 
                      contact.website ? 'text-blue-600' : 
                      'text-black'
                    }`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {contact.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {contact.details.map((detail, idx) => (
                      <div key={idx}>
                        {contact.whatsapp ? (
                          <a
                            href={`https://wa.me/6285640012454?text=Hi%20MegaPlywood%20Indonesia,%20I%20am%20interested%20in%20your%20plywood%20products.%20Please%20provide%20more%20information%20and%20pricing.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 font-bold text-lg hover:text-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                            itemProp="telephone"
                            content="+6285640012454"
                          >
                            <MessageCircle className="w-5 h-5" />
                            <span>{detail}</span>
                          </a>
                        ) : contact.website ? (
                          <a
                            href="https://www.megaplywoodindonesia.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 font-bold text-lg hover:text-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                            itemProp="url"
                          >
                            <Globe className="w-5 h-5" />
                            <span>{detail}</span>
                          </a>
                        ) : (
                          <p className="text-gray-700 font-medium">{detail}</p>
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    {contact.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Our WhatsApp
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect Directly With Us by WhatsApp for instant consultation and support
            </p>
            <a
              href="https://wa.me/6285640012454?text=Hi%20MegaPlywood%20Indonesia,%20I%20am%20interested%20in%20your%20plywood%20products.%20Please%20provide%20more%20information%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              itemProp="telephone"
              content="+6285640012454"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              <span>WhatsApp +6285640012454</span>
            </a>
            <div className="mt-6">
              <p className="text-sm text-gray-500">
                Available 24/7 for your convenience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="08123456789"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    <option value="">Choose subject</option>
                    <option value="sales">Sales Consultation</option>
                    <option value="technical">Technical Consultation</option>
                    <option value="support">Customer Support</option>
                    <option value="logistics">Shipping Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Location
              </h2>
              
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Map Location</p>
                  <p className="text-sm text-gray-500">Jalan Gajahmada Batang, Batang Regency, Central Java</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  How to Reach Our Office Location
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• From Semarang Airport: 1.5 hours by car</li>
                  <li>• From Semarang City Center: 1 hour by car</li>
                  <li>• From Yogyakarta: 2 hours by car</li>
                  <li>• From Jakarta: 4-5 hours by car</li>
                  <li>• Public Transport: Bus from Semarang to Batang</li>
                  <li>• Parking available for private vehicles</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Showroom & Warehouse
                </h3>
                <p className="text-gray-700 mb-2">
                  Visit our showroom to see products directly and consult with our expert team.
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Showroom: Monday - Saturday (08:00 - 17:00)</li>
                  <li>• Warehouse: Monday - Friday (08:00 - 16:00)</li>
                  <li>• Free consultation with appointment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Professional team ready to help your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {dept.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {dept.description}
                </p>
                <div className="space-y-2">
                  {dept.whatsapp ? (
                    <a
                      href={`https://wa.me/6285640012454?text=Hi%20MegaPlywood%20Indonesia,%20I%20need%20assistance%20with%20${dept.name.toLowerCase().replace(/\s+/g, '%20')}.%20Please%20help%20me.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-600 font-medium text-sm hover:text-green-700 transition-colors duration-200"
                      itemProp="telephone"
                      content="+6285640012454"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      <span>{dept.whatsapp}</span>
                    </a>
                  ) : dept.locations ? (
                    <div className="space-y-1">
                      {dept.locations.map((location, idx) => (
                        <p key={idx} className="text-gray-700 text-sm">
                          • {location}
                        </p>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How long is the delivery time?
              </h3>
              <p className="text-gray-600">
                Delivery time varies depending on location. Jakarta and surrounding areas 1-2 days, outside Java 3-5 days, and remote areas 5-7 days.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is free consultation available?
              </h3>
              <p className="text-gray-600">
                Yes, we provide free consultation via phone, email, or direct visit to our showroom.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How to order in large quantities?
              </h3>
              <p className="text-gray-600">
                For large quantity orders, please contact our sales team to get special price offers and delivery schedules.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
