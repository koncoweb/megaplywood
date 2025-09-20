import Link from 'next/link'
import { MessageCircle, Globe, MapPin, Clock, Briefcase } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" itemScope itemType="https://schema.org/Organization">
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
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jalan Gajahmada Batang",
              "addressLocality": "Batang Regency",
              "addressRegion": "Central Java",
              "addressCountry": "Indonesia"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+6285640012454",
              "contactType": "customer service",
              "availableLanguage": ["Indonesian", "English"]
            },
            "openingHours": [
              "Mo-Fr 08:00-17:00",
              "Sa 08:00-15:00"
            ]
          })
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-gray-800 to-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">MP</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">MEGA PLYWOOD</h3>
                <p className="text-sm text-gray-400">INDONESIA</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Trusted plywood distributor with high quality and competitive prices for construction and furniture needs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Main Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/history" className="text-gray-300 hover:text-white transition-colors">
                  Plywood History
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/projects-portofolio" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center font-semibold">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Portofolios
                </Link>
              </li>
              <li>
                <Link href="/samples" className="text-gray-300 hover:text-white transition-colors">
                  Free Samples
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Pages */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/specifications" className="text-gray-300 hover:text-white transition-colors">
                  Specifications
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/berita" className="text-gray-300 hover:text-white transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a
                  href="https://wa.me/6285640012454?text=Hi%20MegaPlywood%20Indonesia,%20I%20am%20interested%20in%20your%20plywood%20products.%20Please%20provide%20more%20information."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors font-medium"
                  itemProp="telephone"
                  content="+6285640012454"
                >
                  +6285640012454
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="https://www.megaplywoodindonesia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  itemProp="url"
                >
                  www.megaplywoodindonesia.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp="streetAddress">Jalan Gajahmada Batang</span>,<br />
                    <span itemProp="addressLocality">Batang Regency</span>,<br />
                    <span itemProp="addressRegion">Central Java</span>,<br />
                    <span itemProp="addressCountry">Indonesia</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <p className="text-gray-300">
                  Monday - Friday: 08:00 - 17:00<br />
                  Saturday: 08:00 - 15:00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 MegaPlywood Indonesia. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
              <Link href="/sitemap.xml" className="text-gray-400 hover:text-white text-sm transition-colors" target="_blank" rel="noopener noreferrer">
                XML Sitemap
              </Link>
              <Link href="/robots.txt" className="text-gray-400 hover:text-white text-sm transition-colors" target="_blank" rel="noopener noreferrer">
                Robots.txt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
