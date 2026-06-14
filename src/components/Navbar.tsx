import { useState, useEffect, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Catalog",
    href: "#",
    children: [
      { label: "All Products", href: "#catalog" },
      { label: "New Arrivals", href: "#new" },
      { label: "Books Cloud's", href: "#books" },
      { label: "Children Clothing Age 1-10", href: "#kids" },
      { label: "Work Boot", href: "#fashion" },
      { label: "Anker Power Bank Accessories", href: "#electronics" },
    ],
  },
  {
    label: "Collections",
    href: "#",
    children: [
      { label: "Accessories - Kids & Baby", href: "#kids" },
      { label: "Accessories - Fashion Footwear", href: "#fashion" },
      { label: "Outdoor & Camping Gear", href: "#outdoor" },
      { label: "Sports Footwear Men & Women's", href: "#fashion" },
      { label: "Electronics Accessories", href: "#electronics" },
      { label: "Redemption Tactical Gear", href: "#outdoor" },
      { label: "Accessories - Jewelry", href: "#catalog" },
      { label: "Beauty Essentials Collection", href: "#beauty" },
      { label: "Sensitive Skincare", href: "#beauty" },
      { label: "Premium Football Jerseys for Schools & Teams", href: "#catalog" },
      { label: "Oaks Farm Fresh Food", href: "#catalog" },
      { label: "Knives Gear Garage", href: "#outdoor" },
    ],
  },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAll = useCallback(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, []);

  const navTextColor = scrolled ? "text-warm-800" : "text-warm-50";
  const logoColor = scrolled ? "text-warm-900" : "text-warm-50";
  const iconColor = scrolled ? "text-warm-700" : "text-warm-50";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-warm-50/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Top bar */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            scrolled ? "h-0 opacity-0" : "h-9 opacity-100"
          }`}
        >
          <div className="bg-warm-800 text-warm-100 text-[11px] sm:text-xs text-center py-2 tracking-wide truncate px-4">
            Free Shipping on Orders Over $50 | Same-Day Dispatch for Orders Before 2PM
          </div>
        </div>

        {/* Main nav */}
        <nav
          className={`mx-auto flex items-center justify-between px-6 lg:px-12 transition-all duration-300 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className={`font-display text-2xl lg:text-3xl tracking-tight transition-colors ${logoColor}`}>
              Palm Malen
            </span>
            <span className={`hidden sm:inline text-[10px] uppercase tracking-[0.2em] font-body font-medium mt-1 transition-colors ${scrolled ? "text-warm-500" : "text-warm-200"}`}>
              Gift Shop
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(link.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button className={`flex items-center gap-1 text-sm font-body font-medium hover:text-terracotta transition-colors ${navTextColor}`}>
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openMenu === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openMenu === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-72 bg-warm-50 rounded-lg shadow-xl border border-warm-200 py-2 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-warm-700 hover:text-terracotta hover:bg-warm-100 transition-colors font-body"
                          >
                            {child.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-body font-medium hover:text-terracotta transition-colors ${navTextColor}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              className={`p-2 hover:text-terracotta transition-colors ${iconColor}`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className={`relative p-2 hover:text-terracotta transition-colors ${iconColor}`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-terracotta text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 ${iconColor}`}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-warm-50"
          >
            <div className="pt-24 px-8 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <div className="py-3 text-lg font-display text-warm-800">
                      {link.label}
                    </div>
                    <div className="pl-4 space-y-1 border-l-2 border-warm-200 ml-1">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={closeAll}
                          className="block py-2 text-sm text-warm-600 hover:text-terracotta font-body"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={closeAll}
                    className="block py-3 text-lg font-display text-warm-800 hover:text-terracotta"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
