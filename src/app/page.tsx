import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProductGallery } from "@/components/ProductGallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navigation />
      <Hero />
      <ProductGallery />
      
      {/* Footer */}
      <footer className="bg-[#6B5E4C] text-[#FAF8F5] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="mb-4">Virtuo</h3>
              <p className="text-[#E8E1D8]">
                Curating beautiful virtual furniture for your design inspiration
              </p>
            </div>
            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-2 text-[#E8E1D8]">
                <li>
                  <a href="#home" className="hover:text-[#FAF8F5] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-[#FAF8F5] transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#FAF8F5] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#FAF8F5] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Connect</h4>
              <p className="text-[#E8E1D8]">
                Explore our collection and bring your interior design vision to life
              </p>
            </div>
          </div>
          <div className="border-t border-[#8B7355] mt-8 pt-8 text-center text-[#E8E1D8]">
            <p>&copy; 2025 Virtuo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

