import React from 'react'
import Link from 'next/link'
import { Shield, Eye, Lock, Database, Mail, Phone } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Shield className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Your privacy is important to us at Mega Plywood Indonesia
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Mega Plywood Indonesia ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>www.megaplywoodindonesia.com</strong> or use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Database className="w-6 h-6 mr-2 text-blue-600" />
                Information We Collect
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Personal Information</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Contact us through our website forms</li>
                    <li>Request product information or quotations</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Communicate with us via email or phone</li>
                  </ul>
                  <p className="text-gray-600 mt-2">
                    This information may include your name, email address, phone number, company name, and any other information you choose to provide.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Automatically Collected Information</h3>
                  <p className="text-gray-600 leading-relaxed">
                    When you visit our website, we may automatically collect certain information, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-2 text-blue-600" />
                How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Providing and improving our services</li>
                <li>Responding to your inquiries and requests</li>
                <li>Sending you product information and updates</li>
                <li>Processing orders and transactions</li>
                <li>Analyzing website usage and performance</li>
                <li>Complying with legal obligations</li>
                <li>Protecting against fraud and security threats</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>With trusted service providers who assist us in operating our website and conducting business</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-2 text-blue-600" />
                Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user preferences. You can control cookie settings through your browser preferences.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict processing of your information</li>
                <li>The right to data portability</li>
                <li>The right to object to processing</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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

            {/* Policy Updates */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
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
