import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";
import { X } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  dimensions?: string;
  material?: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-[#FAF8F5] border-[#E8E1D8]">
        <DialogHeader>
          <DialogTitle className="text-[#6B5E4C]">{product.name}</DialogTitle>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4 text-[#6B5E4C]" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-4">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden bg-white border border-[#E8E1D8]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-xs text-[#8B7355] uppercase tracking-wide mb-2">
                {product.category}
              </p>
              <p className="text-[#6B5E4C] leading-relaxed">
                {product.description}
              </p>
            </div>

            {product.dimensions && (
              <div>
                <h4 className="text-[#6B5E4C] mb-2">Dimensions</h4>
                <p className="text-[#8B7355]">{product.dimensions}</p>
              </div>
            )}

            {product.material && (
              <div>
                <h4 className="text-[#6B5E4C] mb-2">Material</h4>
                <p className="text-[#8B7355]">{product.material}</p>
              </div>
            )}

            <div className="pt-4">
              <button className="w-full bg-[#8B7355] text-[#FAF8F5] px-6 py-3 rounded-md hover:bg-[#6B5E4C] transition-colors">
                Add to Collection
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
