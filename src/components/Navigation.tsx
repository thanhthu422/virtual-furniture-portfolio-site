"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#FAF8F5] border-b border-[#E8E1D8] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-[#6B5E4C]">Virtuo</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-[#6B5E4C] hover:text-[#8B7355] transition-colors">
              Home
            </a>
            <a href="#gallery" className="text-[#6B5E4C] hover:text-[#8B7355] transition-colors">
              Gallery
            </a>
            <a href="/about" className="text-[#6B5E4C] hover:text-[#8B7355] transition-colors">
              About
            </a>
            <a href="#contact" className="text-[#6B5E4C] hover:text-[#8B7355] transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#6B5E4C] hover:text-[#8B7355]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-t border-[#E8E1D8]">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="block px-3 py-2 text-[#6B5E4C] hover:text-[#8B7355] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#gallery"
              className="block px-3 py-2 text-[#6B5E4C] hover:text-[#8B7355] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-[#6B5E4C] hover:text-[#8B7355] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-[#6B5E4C] hover:text-[#8B7355] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
