import { Heart, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#99154E] fixed top-0 left-0 w-full shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo.png" alt="logo" className="h-10 md:h-16 w-auto" />
      </div>

      {/* Website Name */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link to="/">  <h1 className="text-white text-2xl md:text-3xl font-bold">
            Cook & Eat
          </h1></Link>
        </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8">
        <li>
          <Link to="/" className="flex items-center gap-2 hover:text-black font-semibold text-lg transition duration-300">
            <Home size={28} color="white"/>
            <span className="hidden md:inline text-white">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/favorites" className="flex items-center gap-2 hover:text-black font-semibold text-lg transition duration-300">
            <Heart size={28} color="white" />
            <span className="hidden md:inline text-white">Favorites</span>
          </Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
