import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About TelefonTap</h3>
            <p className="text-gray-600">
              TelefonTap is your trusted marketplace for high-quality second-hand phones. We ensure every device meets our rigorous standards.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-blue-500 hover:underline">About Us</Link></li>
              <li><Link href="/faq" className="text-blue-500 hover:underline">FAQ</Link></li>
              <li><Link href="/terms" className="text-blue-500 hover:underline">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600">Email: support@telefontap.com</p>
            <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
            <p className="text-gray-600">Address: 123 Phone St, Mobile City, 12345</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <Facebook />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <Twitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <Instagram />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">&copy; 2023 TelefonTap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

