"use client";

import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  dimensions?: string;
  material?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Modern Velvet Sofa",
    category: "Sofas",
    image: "https://images.unsplash.com/photo-1759722667456-71e7bfd118b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2ZhJTIwZnVybml0dXJlfGVufDF8fHx8MTc2MjM3MDYyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A luxurious velvet sofa with clean lines and contemporary styling. Perfect for modern living spaces seeking comfort and elegance.",
    dimensions: "84\" W x 36\" D x 32\" H",
    material: "Velvet upholstery, hardwood frame"
  },
  {
    id: 2,
    name: "Minimalist Armchair",
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1759722667079-1a4e23d9ead9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJtY2hhaXJ8ZW58MXx8fHwxNzYyNDAyNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Sleek and comfortable armchair with a minimalist design. Ideal for reading nooks or accent seating in contemporary interiors.",
    dimensions: "30\" W x 32\" D x 34\" H",
    material: "Linen fabric, oak legs"
  },
  {
    id: 3,
    name: "Rustic Coffee Table",
    category: "Tables",
    image: "https://images.unsplash.com/photo-1609413000158-859980fa07e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjb2ZmZWUlMjB0YWJsZXxlbnwxfHx8fDE3NjI0MDI0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Handcrafted wooden coffee table with a natural finish. Brings warmth and organic beauty to any living space.",
    dimensions: "48\" W x 28\" D x 18\" H",
    material: "Solid reclaimed wood"
  },
  {
    id: 4,
    name: "Contemporary Dining Chair",
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1758977404510-6ab7e07ff1fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaW5pbmclMjBjaGFpcnxlbnwxfHx8fDE3NjIzNDk3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Stylish dining chair featuring ergonomic design and premium materials. Combines comfort with modern aesthetics.",
    dimensions: "18\" W x 22\" D x 36\" H",
    material: "Molded plastic, steel legs"
  },
  {
    id: 5,
    name: "Elegant Nightstand",
    category: "Storage",
    image: "https://images.unsplash.com/photo-1658595148963-13b7da6dcd6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwbmlnaHRzdGFuZHxlbnwxfHx8fDE3NjIzMzE2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Refined bedside table with ample storage and sophisticated detailing. Perfect companion for modern bedrooms.",
    dimensions: "20\" W x 16\" D x 24\" H",
    material: "Walnut veneer, brass hardware"
  },
  {
    id: 6,
    name: "Modern Bookshelf",
    category: "Storage",
    image: "https://images.unsplash.com/photo-1473447216727-44efba8cf0e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc2hlbGYlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzYyMzA3ODc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Spacious bookshelf with clean lines and adjustable shelving. Ideal for displaying books, art, and decorative objects.",
    dimensions: "36\" W x 12\" D x 72\" H",
    material: "Oak wood, metal brackets"
  },
  {
    id: 7,
    name: "Plush Ottoman",
    category: "Seating",
    image: "https://images.unsplash.com/photo-1626551039948-ddd7e595fe06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdHRvbWFuJTIwZnVybml0dXJlfGVufDF8fHx8MTc2MjQwMjQ1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Versatile ottoman perfect for extra seating or as a footrest. Features soft upholstery and a sturdy wooden base.",
    dimensions: "24\" W x 24\" D x 18\" H",
    material: "Fabric upholstery, hardwood"
  },
  {
    id: 8,
    name: "Sleek Console Table",
    category: "Tables",
    image: "https://images.unsplash.com/photo-1752061289543-de2e7720b029?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zb2xlJTIwdGFibGUlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzYyNDAyNDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Streamlined console table perfect for entryways or behind sofas. Features elegant proportions and quality craftsmanship.",
    dimensions: "54\" W x 14\" D x 30\" H",
    material: "Metal frame, glass top"
  },
];

export function ProductGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ["All", "Sofas", "Chairs", "Tables", "Storage", "Seating"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <section id="gallery" className="py-16 bg-[#F5F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#6B5E4C] mb-4">Our Collection</h2>
          <p className="text-[#8B7355] max-w-2xl mx-auto">
            Browse through our curated selection of virtual furniture pieces
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-[#8B7355] text-[#FAF8F5]"
                  : "bg-white text-[#6B5E4C] border border-[#E8E1D8] hover:border-[#8B7355]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.image}
              category={product.category}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
