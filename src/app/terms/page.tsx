import React from 'react'
import Link from 'next/link'
import { FileText, Scale, AlertTriangle, Mail, Phone } from 'lucide-react'

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <FileText className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Terms of service for Mega Plywood Indonesia
            </p>
            <p className="text-sm opacity-75 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using the website of Mega Plywood Indonesia ("Company," "we," "our," or "us") located at <strong>www.megaplywoodindonesia.com</strong>, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* Company Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Scale className="w-6 h-6 mr-2 text-blue-600" />
                Company Information
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-2 text-gray-700">
                  <p><strong>Company Name:</strong> Mega Plywood Indonesia</p>
                  <p><strong>Business Type:</strong> Plywood Manufacturing and Distribution</p>
                  <p><strong>Address:</strong> Jalan Gajahmada Batang, Batang Regency, Central Java, Indonesia</p>
                  <p><strong>Contact:</strong> +6285640012454</p>
                  <p><strong>Website:</strong> www.megaplywoodindonesia.com</p>
                </div>
              </div>
            </section>

            {/* Use License */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Use License</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on Mega Plywood Indonesia's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            {/* Products and Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Products and Services</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Product Information</h3>
                  <p className="text-gray-600 leading-relaxed">
                    All product descriptions, specifications, and images on our website are provided for informational purposes. While we strive for accuracy, we reserve the right to correct any errors or omissions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Pricing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    All prices are subject to change without notice. Prices may vary based on quantity, specifications, and market conditions. Contact us for current pricing and availability.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Quality Standards</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our products meet international quality standards including ISO 9001:2015, FSC certification, and other relevant industry standards. Quality certificates are available upon request.
                  </p>
                </div>
              </div>
            </section>

            {/* Orders and Payment */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Orders and Payment</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Order Process</h3>
                  <p className="text-gray-600 leading-relaxed">
                    All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order at our discretion.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Payment Terms</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Payment terms will be specified in individual quotations</li>
                    <li>We accept various payment methods including bank transfers and letters of credit</li>
                    <li>Payment must be made in accordance with agreed terms</li>
                    <li>Late payments may incur additional charges</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Delivery</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Delivery terms (FOB, CIF, etc.) will be specified in individual contracts. Delivery times are estimates and may vary due to factors beyond our control.
                  </p>
                </div>
              </div>
            </section>

            {/* Warranties and Disclaimers */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-yellow-600" />
                Warranties and Disclaimers
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Product Warranty</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We warrant that our products will conform to the specifications agreed upon in writing. This warranty is limited to replacement or repair of defective products.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Disclaimer of Warranties</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, we exclude all representations, warranties, and conditions relating to our website and the use of this website.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                In no event shall Mega Plywood Indonesia, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the website are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication by you of any such matters or any part of the website is strictly prohibited.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of Indonesia. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Indonesia.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on the website. Your continued use of the website after any changes constitutes acceptance of the new terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Email: info@megaplywoodindonesia.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Phone: +6285640012454</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 text-blue-600 mr-3 mt-0.5">📍</div>
                    <div className="text-gray-700">
                      <p>Address:</p>
                      <p>Jalan Gajahmada Batang</p>
                      <p>Batang Regency, Central Java</p>
                      <p>Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Back to Home */}
            <div className="text-center pt-8 border-t border-gray-200">
              <Link
                href="/"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
