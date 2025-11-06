interface ProductCardProps {
  name: string;
  image: string;
  category: string;
  onClick: () => void;
}

export function ProductCard({ name, image, category, onClick }: ProductCardProps) {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-[#E8E1D8]"
    >
      <div className="aspect-square overflow-hidden bg-[#F5F1EA]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-[#8B7355] uppercase tracking-wide mb-1">{category}</p>
        <h3 className="text-[#6B5E4C]">{name}</h3>
      </div>
    </div>
  );
}
