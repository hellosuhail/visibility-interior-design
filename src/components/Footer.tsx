import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="shadow-inner dark:bg-[#2b2a45] bg-gray-100 mt-20">
      
      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Interior</h3>
          <p className="dar:text-white/70 text-sm leading-relaxed">
            We create elegant interiors that reflect your style and personality.
            Modern designs with a professional touch.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 dark:text-white/70 text-sm">
            <li className="hover:text-gray-500 dark:hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-gray-500 dark:hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-gray-500 dark:hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-gray-500 dark:hover:text-white cursor-pointer">Projects</li>
            <li className="hover:text-gray-500 dark:hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Our Services</h4>
          <ul className="space-y-3 dark:text-white/70 text-sm">
            <li>Interior Design</li>
            <li>Home Decoration</li>
            <li>Wall Painting</li>
            <li>Furniture Design</li>
            <li>Lighting Solutions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-4 dark:text-white/70 text-sm">
            <li className="flex items-center gap-3">
              <MapPin size={16} /> New Delhi, India
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} /> +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} /> info@interior.com
            </li>
          </ul>

          {/* Social */}
          <div className="flex gap-4 mt-6">
            <span className="p-2 bg-white/10 rounded-full hover:bg-pink-500 transition cursor-pointer">
              <Facebook size={18} />
            </span>
            <span className="p-2 bg-white/10 rounded-full hover:bg-pink-500 transition cursor-pointer">
              <Instagram size={18} />
            </span>
            <span className="p-2 bg-white/10 rounded-full hover:bg-pink-500 transition cursor-pointer">
              <Twitter size={18} />
            </span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-5 text-center text-sm dark:text-white/60">
        © {new Date().getFullYear()} Interior. All rights reserved.
      </div>
    </footer>
  )
}
