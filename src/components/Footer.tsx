import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
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
              Distributor plywood terpercaya dengan kualitas tinggi dan harga kompetitif untuk kebutuhan konstruksi dan furniture.
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
                <Link href="/sejarah" className="text-gray-300 hover:text-white transition-colors">
                  Plywood History
                </Link>
              </li>
              <li>
                <Link href="/produk" className="text-gray-300 hover:text-white transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/spesifikasi" className="text-gray-300 hover:text-white transition-colors">
                  Specifications
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
                <Link href="/tentang" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/karir" className="text-gray-300 hover:text-white transition-colors">
                  Careers
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
            <div className="space-y-2 text-sm text-gray-300">
              <p>📧 info@megaplywood.id</p>
              <p>📞 +62 21 1234 5678</p>
              <p>📍 Jakarta, Indonesia</p>
              <p>🕒 Monday - Friday: 08:00 - 17:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 MegaPlywood Indonesia. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
