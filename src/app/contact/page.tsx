import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact - Contact MegaPlywood Indonesia for Consultation',
  description: 'Contact MegaPlywood Indonesia for plywood product consultation, request quote, or more information. Our customer service team is ready to help 24/7.',
  keywords: ['contact megaplywood', 'customer service', 'plywood consultation', 'request quote', 'contact us'],
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+62 21 1234 5678', '+62 812 3456 7890'],
      description: 'Contact us for quick consultation'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@megaplywood.id', 'sales@megaplywood.id'],
      description: 'Send email for detailed questions'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Jl. Industri Plywood No. 123', 'Jakarta Utara 14240', 'Indonesia'],
      description: 'Visit our office and showroom'
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
      email: 'sales@megaplywood.id',
      phone: '+62 21 1234 5678',
      description: 'Product consultation and sales'
    },
    {
      name: 'Customer Service',
      email: 'service@megaplywood.id',
      phone: '+62 21 1234 5679',
      description: 'Customer support and complaints'
    },
    {
      name: 'Technical Support',
      email: 'technical@megaplywood.id',
      phone: '+62 21 1234 5680',
      description: 'Technical consultation and specifications'
    },
    {
      name: 'Logistics',
      email: 'logistics@megaplywood.id',
      phone: '+62 21 1234 5681',
      description: 'Shipping and distribution information'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {contact.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {contact.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 font-medium">
                        {detail}
                      </p>
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
                  <p className="text-sm text-gray-500">Jl. Industri Plywood No. 123, Jakarta Utara</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  How to Reach Location
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• From Soekarno-Hatta Airport: 45 minutes by car</li>
                  <li>• From Gambir Station: 30 minutes by car</li>
                  <li>• Public Transport: Transjakarta Bus Corridor 1</li>
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
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {dept.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {dept.description}
                </p>
                <div className="space-y-2">
                  <p className="text-black font-medium text-sm">
                    {dept.email}
                  </p>
                  <p className="text-black font-medium text-sm">
                    {dept.phone}
                  </p>
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
