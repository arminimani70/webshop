import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-gray-800">
        🛍️ Webshop
      </Link>
      <Link to="/cart" className="relative">
        <ShoppingCart className="text-gray-700" size={24} />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Link>
    </nav>
  );
}

export default Navbar;
