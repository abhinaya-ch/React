import React from 'react';
import { Home, User, LogIn, Menu, PlusCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">DreamHome</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#featured" className="text-gray-700 hover:text-blue-600 transition">Featured</a>
            <a href="#buy" className="text-gray-700 hover:text-blue-600 transition">Buy</a>
            <a href="#rent" className="text-gray-700 hover:text-blue-600 transition">Rent</a>
            <a href="#agents" className="text-gray-700 hover:text-blue-600 transition">Agents</a>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center">
              <PlusCircle className="h-4 w-4 mr-2" />
              Sell Property
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center">
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </button>
            <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition flex items-center">
              <User className="h-4 w-4 mr-2" />
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#featured" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Featured</a>
            <a href="#buy" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Buy</a>
            <a href="#rent" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Rent</a>
            <a href="#agents" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Agents</a>
            <button className="w-full mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center justify-center">
              <PlusCircle className="h-4 w-4 mr-2" />
              Sell Property
            </button>
            <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </button>
            <button className="w-full mt-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition flex items-center justify-center">
              <User className="h-4 w-4 mr-2" />
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}