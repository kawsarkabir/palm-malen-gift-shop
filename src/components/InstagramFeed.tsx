import { motion } from "framer-motion";

import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";
import brandStoryImg from "@/assets/brand-story.jpg";
import booksImg from "@/assets/books.jpg";
import fashionImg from "@/assets/fashion.jpg";

const posts = [
  { image: hero1, likes: 234 },
  { image: booksImg, likes: 189 },
  { image: hero2, likes: 312 },
  { image: fashionImg, likes: 156 },
  { image: hero3, likes: 278 },
  { image: brandStoryImg, likes: 201 },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function InstagramFeed() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-terracotta font-body font-semibold mb-3">
            @PalmMalenShop
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-warm-900 mb-4">
            Follow Our Story
          </h2>
          <p className="text-warm-500 font-body max-w-md mx-auto">
            Get inspired by real moments from our community. Tag us to be featured.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="group relative aspect-square overflow-hidden rounded-lg bg-warm-200"
            >
              <img
                src={post.image}
                alt={`Instagram post ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-warm-900/0 group-hover:bg-warm-900/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-1">
                  <InstagramIcon className="w-6 h-6 text-white" />
                  <span className="text-white text-xs font-body font-medium">
                    {post.likes} likes
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
