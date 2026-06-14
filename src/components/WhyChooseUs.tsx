import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Globe2, HeartHandshake, PackageCheck, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Hand-Curated Selection",
    description: "Every product is personally chosen by our editors — no algorithms, no filler. Only pieces worth your shelf, closet, or table.",
    stat: "1,200+",
    statLabel: "Curated SKUs",
  },
  {
    icon: ShieldCheck,
    title: "Authenticity Guaranteed",
    description: "Direct relationships with publishers, makers, and authorized distributors. What you see is exactly what arrives.",
    stat: "100%",
    statLabel: "Authentic",
  },
  {
    icon: Globe2,
    title: "Worldwide Reach",
    description: "From rare bilingual titles to tactical gear and beauty essentials — we source globally so you shop locally.",
    stat: "32",
    statLabel: "Countries shipped",
  },
  {
    icon: HeartHandshake,
    title: "Built on Trust",
    description: "Family-run, customer-obsessed. Read 8,400+ verified reviews and you'll see why people keep coming back.",
    stat: "4.9★",
    statLabel: "Average rating",
  },
  {
    icon: PackageCheck,
    title: "Thoughtful Packaging",
    description: "Recyclable mailers, protective inserts, and a handwritten note on every order over $50. Worth unboxing.",
    stat: "Free",
    statLabel: "Shipping over $50",
  },
  {
    icon: Headphones,
    title: "Real Human Support",
    description: "Email or chat with our small team — usually under 4 hours, never a bot. Returns are easy and no-questions-asked.",
    stat: "<4h",
    statLabel: "Reply time",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-terracotta font-body font-semibold mb-3">
            Why Palm Malen
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-warm-900 leading-[1.05]">
            Six reasons we're worth your shelf space
          </h2>
          <p className="mt-5 text-warm-700 font-body font-light text-base sm:text-lg">
            We're not the biggest store, and that's the point. Here's what you can expect every time you order from us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-200/60 border border-warm-200/60 rounded-2xl overflow-hidden">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group bg-cream p-8 lg:p-10 hover:bg-white transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="w-12 h-12 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center group-hover:bg-terracotta group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div className="text-right">
                    <div className="font-display text-2xl text-warm-900 leading-none">{r.stat}</div>
                    <div className="text-[10px] uppercase tracking-wider text-warm-600 font-body mt-1">{r.statLabel}</div>
                  </div>
                </div>
                <h3 className="font-display text-2xl text-warm-900 mb-3 leading-tight">{r.title}</h3>
                <p className="text-sm text-warm-700 font-body font-light leading-relaxed">{r.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
