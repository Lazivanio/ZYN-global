import { ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Product {
  id: string;
  title: string;
  description: string;
  rating: number;
  reviewCount: number;
  image: string;
  affiliateLink: string;
  badge?: string;
  category?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleBuyClick = () => {
    window.open(product.affiliateLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="product-card group">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-accent to-accent/50">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <div className="absolute top-3 left-3 bg-success text-success-foreground px-2 py-1 rounded-md text-xs font-semibold">
            {product.badge}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3">
            {product.description}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {product.rating} ({product.reviewCount} reviews)
          </span>
        </div>

        {/* CTA Button */}
        <Button
          variant="success"
          size="lg"
          className="w-full"
          onClick={handleBuyClick}
        >
          <span>View offer</span>
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
