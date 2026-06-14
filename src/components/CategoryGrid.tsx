import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import booksImg from "@/assets/books.jpg";
import fashionImg from "@/assets/fashion.jpg";
import kidsImg from "@/assets/kids.jpg";
import outdoorImg from "@/assets/outdoor.jpg";
import electronicsImg from "@/assets/electronics.jpg";
import beautyImg from "@/assets/beauty.jpg";

const categories = [
  { name: "Books Cloud's", count: "Bilingual & Illustrated", image: booksImg, href: "#books" },
  { name: "Fashion Footwear & Work Boots", count: "Men & Women's", image: fashionImg, href: "#fashion" },
  { name: "Children Clothing Age 1-10", count: "Kids & Baby", image: kidsImg, href: "#kids" },
  { name: "Outdoor, Camping & Tactical", count: "Redemption Gear", image: outdoorImg, href: "#outdoor" },
  { name: "Anker Power Bank & Electronics", count: "Accessories", image: electronicsImg, href: "#electronics" },
  { name: "Beauty Essentials & Sensitive Skincare", count: "Curated Edit", image: beautyImg, href: "#beauty" },
];


export function CategoryGrid() {
  return (
    <section id="catalog" className="py-20 lg:py-28 bg-warm-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-terracotta font-body font-semibold mb-3">
            Browse by Category
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-warm-900 mb-4">
            Our Collections
          </h2>
          <p className="text-warm-500 font-body max-w-lg mx-auto">
            Explore our curated collections, each handpicked to bring joy to you and your loved ones.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              href={cat.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-warm-200"
            >
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-900/80 via-warm-900/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-warm-300 font-body mb-1">
                      {cat.count} Products
                    </p>
                    <h3 className="font-display text-2xl text-warm-50">
                      {cat.name}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-warm-50/10 backdrop-blur-sm flex items-center justify-center border border-warm-50/20 group-hover:bg-terracotta group-hover:border-terracotta transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-warm-50" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
