import { motion } from "framer-motion";
import { Truck, ShieldCheck, RefreshCw, Headphones } from "lucide-react";

const badges = [
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "On orders over $50",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    desc: "100% protected checkout",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    desc: "30-day return policy",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Dedicated help center",
  },
];

export function TrustBadges() {
  return (
    <section className="bg-warm-100 border-y border-warm-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x-0 lg:divide-x divide-warm-200/60">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-4 py-6 lg:py-8 px-4 lg:first:pl-0 lg:last:pr-0"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center">
                <badge.icon className="w-5 h-5 text-terracotta" />
              </div>
              <div>
                <p className="text-sm font-body font-semibold text-warm-800">
                  {badge.title}
                </p>
                <p className="text-xs text-warm-500 font-body">{badge.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
