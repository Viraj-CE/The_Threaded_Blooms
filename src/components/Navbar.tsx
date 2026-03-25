import { useState, useRef, useEffect } from "react";
import { ShoppingBag, Menu, X, User, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import logoSvg from "@/assets/logo.svg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { cartCount } = useCart();
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
      setMobileOpen(false);
    }
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/our-story" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg">
      <div className="container mx-auto px-6 flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logoSvg}
            alt="The Threaded Bloom Logo"
            className="w-10 h-10 rounded-full object-cover transition-transform duration-500 group-hover:rotate-[360deg]"
          />
          <span className="font-heading text-xl md:text-2xl font-light tracking-[0.04em] text-foreground">
            The Threaded Bloom
          </span>
        </Link>

        <motion.div 
          className="hidden md:flex items-center gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {links.map((link) => (
            <motion.div
              key={link.name}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={link.path}
                className="font-body text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex items-center gap-5">
          {/* Search Toggle */}
          <div className="hidden md:flex items-center">
            {isSearchOpen ? (
              <form onSubmit={handleSearchSubmit} className="relative flex items-center animate-in fade-in slide-in-from-right-4 duration-300">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-secondary/50 border border-border rounded-full py-1.5 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 w-64"
                />
                <button type="button" onClick={() => setIsSearchOpen(false)} className="absolute right-3 text-muted-foreground hover:text-foreground">
                  <X size={16} />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-foreground hover:text-primary transition-colors duration-300 flex items-center focus:outline-none"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
            )}
          </div>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => isAuthenticated ? setDropdownOpen(!dropdownOpen) : navigate("/auth")}
              className="text-foreground hover:text-primary transition-colors duration-300 flex items-center focus:outline-none"
            >
              <User size={20} strokeWidth={1.5} />
            </button>
            {isAuthenticated && dropdownOpen && (
              <div className="absolute right-0 mt-6 w-56 bg-background border border-border rounded-sm shadow-xl py-2 overflow-hidden z-50">
                <div className="px-5 py-3 border-b border-border/50">
                  <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-1">Signed in as</p>
                  <p className="font-medium text-foreground text-sm truncate">{user?.email}</p>
                </div>
                <Link
                  to="/profile"
                  onClick={() => setDropdownOpen(false)}
                  className="block w-full text-left px-5 py-3 text-sm text-foreground hover:text-primary hover:bg-secondary/50 transition-colors focus:outline-none"
                >
                  My Profile
                </Link>
                <Link
                  to="/orders"
                  onClick={() => setDropdownOpen(false)}
                  className="block w-full text-left px-5 py-3 text-sm text-foreground hover:text-primary hover:bg-secondary/50 transition-colors focus:outline-none"
                >
                  My Orders
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setDropdownOpen(false);
                  }}
                  className="w-full text-left px-5 py-3 text-sm text-foreground hover:text-primary hover:bg-secondary/50 transition-colors focus:outline-none"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>

          <Link to="/cart" className="relative text-foreground hover:text-primary transition-colors duration-300">
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary text-primary-foreground text-[9px] rounded-full flex items-center justify-center font-body">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            className="md:hidden text-foreground focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div 
          className="md:hidden bg-background px-6 pb-8 pt-2 space-y-5"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {/* Mobile Search */}
          <motion.form 
            onSubmit={handleSearchSubmit} 
            className="relative"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-secondary/30 border border-border rounded-sm py-2 px-4 text-sm focus:outline-none"
            />
            <button type="submit" className="absolute right-3 top-2.5 text-muted-foreground">
              <Search size={18} />
            </button>
          </motion.form>
          {links.map((link) => (
            <motion.div
              key={link.name}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <Link
                to={link.path}
                className="block font-body text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          {!isAuthenticated ? (
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <Link
                to="/auth"
                className="block font-body text-[11px] tracking-[0.2em] uppercase text-primary hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Sign In / Register
              </Link>
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <Link
                  to="/profile"
                  className="block font-body text-[11px] tracking-[0.2em] uppercase text-primary hover:text-foreground transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  My Profile
                </Link>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <Link
                  to="/orders"
                  className="block font-body text-[11px] tracking-[0.2em] uppercase text-primary hover:text-foreground transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  My Orders
                </Link>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <button
                  onClick={() => {
                    logout();
                    setMobileOpen(false);
                  }}
                  className="block font-body text-[11px] tracking-[0.2em] uppercase text-destructive hover:text-foreground transition-colors text-left w-full focus:outline-none"
                >
                  Sign Out
                </button>
              </motion.div>
            </>
          )}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
