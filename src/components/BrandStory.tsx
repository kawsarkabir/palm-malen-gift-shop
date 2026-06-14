import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake, Globe, Award } from "lucide-react";

import brandStoryImg from "@/assets/brand-story.jpg";

const values = [
  {
    icon: HeartHandshake,
    title: "Curated with Care",
    desc: "Every item in our store is hand-selected by our team to ensure quality and uniqueness.",
  },
  {
    icon: Globe,
    title: "Direct from Makers",
    desc: "We partner directly with artisans and manufacturers to bring you authentic products at fair prices.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    desc: "If you're not completely happy, we'll make it right. That's our promise to you.",
  },
];

export function BrandStory() {
  return (
    <section className="py-20 lg:py-28 bg-warm-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={brandStoryImg}
                alt="Palm Malen Gift Shop interior"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-terracotta/30 rounded-lg -z-10 hidden lg:block" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-terracotta/10 rounded-lg -z-10 hidden lg:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-terracotta font-body font-semibold mb-4">
              Our Story
            </span>
            <h2 className="font-display text-4xl lg:text-5xl text-warm-900 mb-6 leading-tight">
              Where Every Gift<br />Tells a Story
            </h2>
            <div className="space-y-4 text-warm-600 font-body leading-relaxed mb-8">
              <p>
                Founded with a simple belief — that the best gifts come from the heart —
                Palm Malen Gift Shop has grown into a beloved destination for thoughtful
                shoppers seeking something beyond the ordinary.
              </p>
              <p>
                We work directly with artisans, independent publishers, and ethical
                manufacturers across the globe. When you shop with us, you're not just
                buying a product — you're supporting real people and real craftsmanship.
              </p>
            </div>

            <a
              href="#about"
              className="group inline-flex items-center gap-3 bg-warm-800 hover:bg-warm-900 text-warm-50 px-8 py-4 rounded-sm text-sm font-body font-semibold uppercase tracking-wider transition-all duration-300 mb-12"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Values */}
            <div className="space-y-5 border-t border-warm-200 pt-8">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-terracotta" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-warm-900 mb-1">
                      {value.title}
                    </h4>
                    <p className="text-sm text-warm-500 font-body">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
