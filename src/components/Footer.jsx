import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-bold text-white">Tourist Management System</h2>
          <p className="mt-3 text-gray-400">
            Explore destinations, packages, and itineraries with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/destinations" className="hover:text-white">Destinations</Link></li>
            <li><Link to="/packages" className="hover:text-white">Packages</Link></li>
            <li><Link to="/itineraries" className="hover:text-white">Itineraries</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p>Email: support@touristapp.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>

      {/* Copy section */}
      <div className="text-center py-4 border-t border-gray-700 text-gray-400 text-sm">
        © {new Date().getFullYear()} Tourist Management System — All Rights Reserved.
      </div>
    </footer>
  );
}
