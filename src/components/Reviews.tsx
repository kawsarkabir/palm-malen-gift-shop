import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Mitchell",
    avatar: "SM",
    location: "New York, NY",
    rating: 5,
    text: "I ordered a gift for my sister's birthday and was blown away by the quality and packaging. It arrived beautifully wrapped with a handwritten note. Palm Malen truly understands the art of gifting.",
    product: "Silver Moonlight Pendant",
    verified: true,
  },
  {
    id: 2,
    name: "James Rodriguez",
    avatar: "JR",
    location: "Austin, TX",
    rating: 5,
    text: "The children's book set I bought for my nephew is absolutely wonderful. The illustrations are stunning and the stories are engaging. Fast shipping too — arrived in two days!",
    product: "Children's Adventure Book Set",
    verified: true,
  },
  {
    id: 3,
    name: "Emily Chen",
    avatar: "EC",
    location: "Seattle, WA",
    rating: 5,
    text: "Customer service went above and beyond when I had a question about sizing. They helped me pick the perfect work boots for my husband. He loves them! Will definitely be a repeat customer.",
    product: "Premium Leather Work Boot",
    verified: true,
  },
  {
    id: 4,
    name: "Michael Thompson",
    avatar: "MT",
    location: "Denver, CO",
    rating: 4,
    text: "Great selection of outdoor gear. The tactical knife exceeded my expectations — solid build, sharp blade, beautiful leather sheath. Competitive pricing compared to other specialty stores.",
    product: "Tactical Outdoor Knife",
    verified: true,
  },
  {
    id: 5,
    name: "Lisa Park",
    avatar: "LP",
    location: "Chicago, IL",
    rating: 5,
    text: "I've been shopping here for a year now and every single purchase has been fantastic. The curated collections make it so easy to find unique gifts that people actually love.",
    product: "Pro Team Football Jersey",
    verified: true,
  },
];

export function Reviews() {
  const [active, setActive] = useState(0);
  const review = reviews[active];

  const next = () => setActive((a) => (a + 1) % reviews.length);
  const prev = () => setActive((a) => (a - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-20 lg:py-28 bg-warm-50">
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
            Loved by Customers
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-warm-900 mb-4">
            What People Are Saying
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className="w-5 h-5 fill-terracotta text-terracotta"
                />
              ))}
            </div>
            <span className="text-warm-600 font-body">
              4.9 out of 5 from 1,200+ reviews
            </span>
          </div>
        </motion.div>

        {/* Main Review Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-warm-100 rounded-xl p-8 lg:p-12 border border-warm-200/60">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-terracotta/20" />

            <AnimatePresence mode="wait">
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-terracotta text-terracotta"
                    />
                  ))}
                </div>

                <blockquote className="font-display text-xl lg:text-2xl text-warm-800 leading-relaxed mb-8 italic">
                  "{review.text}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center">
                      <span className="font-body font-bold text-terracotta text-sm">
                        {review.avatar}
                      </span>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-warm-900">
                        {review.name}
                      </p>
                      <p className="text-sm text-warm-500 font-body">
                        {review.location} · Purchased {review.product}
                      </p>
                    </div>
                  </div>
                  {review.verified && (
                    <span className="hidden sm:inline-block px-3 py-1 bg-warm-200/60 text-warm-600 text-[10px] uppercase tracking-wider font-body font-semibold rounded-sm">
                      Verified Purchase
                    </span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-3">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? "bg-terracotta w-8"
                      : "bg-warm-300 hover:bg-warm-400"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-warm-300 flex items-center justify-center text-warm-600 hover:border-terracotta hover:text-terracotta transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-warm-300 flex items-center justify-center text-warm-600 hover:border-terracotta hover:text-terracotta transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-16 pt-12 border-t border-warm-200"
        >
          {[
            { value: "12,000+", label: "Happy Customers" },
            { value: "98%", label: "Would Recommend" },
            { value: "4.9", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl lg:text-4xl text-terracotta mb-1">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-wider text-warm-500 font-body">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
