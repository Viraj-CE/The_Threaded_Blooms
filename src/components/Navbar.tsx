import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount } = useCart();

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Our Story", path: "/our-story" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg">
      <div className="container mx-auto px-6 flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="font-heading text-2xl md:text-[1.7rem] font-light tracking-[0.04em] text-foreground">
          The Threaded Bloom
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="font-body text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <Link to="/cart" className="relative text-foreground hover:text-primary transition-colors duration-300">
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary text-primary-foreground text-[9px] rounded-full flex items-center justify-center font-body">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background px-6 pb-8 pt-2 space-y-5">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="block font-body text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
