import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Heart, Star, ArrowRight } from "lucide-react";

import bookBuscalo from "@/assets/book-buscalo.jpg";
import bookProblem from "@/assets/book-problem.jpg";
import bookAlaska from "@/assets/book-alaska.jpg";
import patchPlan from "@/assets/patch-plan.jpg";
import bookChulo from "@/assets/product5.jpg";
import bookCity from "@/assets/book-city.jpg";

type Product = {
  id: number;
  name: string;
  vendor: string;
  price: number;
  originalPrice: number | null;
  image: string;
  rating: number;
  reviews: number;
  badge: string | null;
  tag: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "¡Búscalo! (Look It Up!): A Quick Reference Guide to Spanish Grammar",
    vendor: "BooksCloud",
    price: 24.23,
    originalPrice: null,
    image: bookBuscalo,
    rating: 4.8,
    reviews: 64,
    badge: "Bestseller",
    tag: "Paperback · Reference",
  },
  {
    id: 2,
    name: '"A Problem from Hell": America and the Age of Genocide',
    vendor: "BooksCloud",
    price: 29.99,
    originalPrice: null,
    image: bookProblem,
    rating: 4.9,
    reviews: 218,
    badge: "Pulitzer",
    tag: "Paperback · History",
  },
  {
    id: 3,
    name: '"Alaska" Is Not a Blank Space',
    vendor: "BooksCloud",
    price: 45.25,
    originalPrice: null,
    image: bookAlaska,
    rating: 4.7,
    reviews: 38,
    badge: "New",
    tag: "Paperback · Essays",
  },
  {
    id: 4,
    name: '"Be Polite Be Professional But Have a Plan" Patch',
    vendor: "Redemption Tactical",
    price: 5.99,
    originalPrice: null,
    image: patchPlan,
    rating: 4.9,
    reviews: 412,
    badge: "Bestseller",
    tag: "Morale Patch",
  },
  {
    id: 5,
    name: '"Chulo" The Great Journey of the French Bulldog',
    vendor: "BooksCloud",
    price: 35.78,
    originalPrice: null,
    image: bookChulo,
    rating: 5.0,
    reviews: 42,
    badge: "New",
    tag: "Hardcover · Bilingual",
  },
  {
    id: 6,
    name: '"City of the Century": A History of Gary, Indiana',
    vendor: "BooksCloud",
    price: 78.91,
    originalPrice: null,
    image: bookCity,
    rating: 4.8,
    reviews: 27,
    badge: null,
    tag: "Hardcover · History",
  },
];


function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-warm-200 mb-4">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.badge && (
            <span
              className={`px-3 py-1 text-[10px] uppercase tracking-wider font-body font-bold rounded-sm ${
                product.badge === "Sale"
                  ? "bg-terracotta text-white"
                  : product.badge === "New"
                  ? "bg-warm-800 text-warm-50"
                  : "bg-warm-50 text-warm-900"
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>

        {/* Hover actions */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="flex-1 bg-warm-50 text-warm-900 py-2.5 rounded-sm text-xs font-body font-semibold uppercase tracking-wider hover:bg-terracotta hover:text-white transition-colors flex items-center justify-center gap-2">
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>

        {/* Wishlist */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-warm-50/90 flex items-center justify-center hover:bg-warm-50 transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              liked ? "fill-terracotta text-terracotta" : "text-warm-600"
            }`}
          />
        </button>
      </div>

      {/* Info */}
      <div>
        <p className="text-[11px] uppercase tracking-wider text-terracotta font-body font-medium mb-1">
          {product.tag}
        </p>
        <h3 className="font-display text-lg text-warm-900 mb-1 group-hover:text-terracotta transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-warm-500 font-body mb-2">{product.vendor}</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-terracotta text-terracotta" />
            <span className="text-sm font-body font-semibold text-warm-800">
              {product.rating}
            </span>
            <span className="text-xs text-warm-400 font-body">
              ({product.reviews})
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-lg font-body font-bold text-warm-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-warm-400 font-body line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function BestSellers() {
  return (
    <section id="new" className="py-20 lg:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-terracotta font-body font-semibold mb-3">
              Trending Now
            </span>
            <h2 className="font-display text-4xl lg:text-5xl text-warm-900">
              Best Sellers
            </h2>
          </div>
          <a
            href="#catalog"
            className="group inline-flex items-center gap-2 text-sm font-body font-semibold text-warm-700 hover:text-terracotta transition-colors"
          >
            View All Products
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
