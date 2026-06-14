import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CreditCard, Truck, ShieldCheck, Heart } from "lucide-react";

const footerLinks = {
  Shop: [
    { label: "All Products", href: "#catalog" },
    { label: "New Arrivals", href: "#new" },
    { label: "Bestsellers", href: "#new" },
    { label: "Books", href: "#books" },
    { label: "Fashion", href: "#fashion" },
  ],
  Support: [
    { label: "Contact Us", href: "#contact" },
    { label: "Shipping Info", href: "#" },
    { label: "Returns & Exchanges", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Size Guide", href: "#" },
  ],
  Company: [
    { label: "Our Story", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Affiliates", href: "#" },
  ],
};

const paymentIcons = [
  { name: "Visa", icon: CreditCard },
  { name: "Mastercard", icon: CreditCard },
  { name: "Amex", icon: CreditCard },
  { name: "PayPal", icon: CreditCard },
  { name: "Apple Pay", icon: CreditCard },
];

export function Footer() {
  return (
    <footer className="bg-warm-900 text-warm-300">
      {/* Trust bar */}
      <div className="border-b border-warm-700/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Truck, label: "Free Shipping Over $50" },
              { icon: ShieldCheck, label: "Secure Checkout" },
              { icon: Heart, label: "30-Day Returns" },
              { icon: CreditCard, label: "Multiple Payment Options" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-terracotta-light shrink-0" />
                <span className="text-sm font-body text-warm-400">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="font-display text-3xl text-warm-50">
                Palm Malen
              </span>
            </Link>
            <p className="text-warm-400 font-body text-sm leading-relaxed mb-6 max-w-sm">
              Curated gifts, premium books, and unique finds from artisans and
              direct manufacturers worldwide. Every purchase supports real craftsmanship.
            </p>
            <div className="flex items-center gap-2 text-warm-500 text-sm font-body">
              <span>United States | USD $</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-lg text-warm-50 mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-body text-warm-400 hover:text-terracotta-light transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-warm-700/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-xs text-warm-500 font-body text-center lg:text-left">
              © 2026 Palm Malen Gift Shop - PMRC. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-warm-500 hover:text-warm-300 font-body transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-warm-500 hover:text-warm-300 font-body transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-warm-500 hover:text-warm-300 font-body transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
