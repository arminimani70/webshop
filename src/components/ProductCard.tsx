import { useCart } from "../context/CartContext";
import type { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs text-gray-400 uppercase tracking-wide mb-1">
          {product.category}
        </span>
        <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-3 flex-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
