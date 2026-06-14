import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Gift, Sparkles } from "lucide-react";

export function EmailCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-warm-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center">
                <Gift className="w-5 h-5 text-terracotta-light" />
              </div>
              <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-terracotta-light" />
              </div>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl text-warm-50 mb-4">
              Join the Inner Circle
            </h2>
            <p className="text-warm-300 font-body text-lg mb-2">
              Get 15% off your first order, early access to new arrivals, and exclusive gift guides delivered to your inbox.
            </p>
            <p className="text-warm-400 text-sm font-body mb-8">
              No spam, ever. Unsubscribe anytime.
            </p>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              >
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-warm-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-sm bg-warm-700 border border-warm-600 text-warm-50 placeholder:text-warm-500 font-body text-sm focus:outline-none focus:border-terracotta transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta-light text-white px-8 py-4 rounded-sm text-sm font-body font-semibold uppercase tracking-wider transition-all duration-300 shrink-0"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-warm-700/50 border border-warm-600 rounded-lg py-8 px-6 max-w-lg mx-auto"
              >
                <div className="w-12 h-12 rounded-full bg-terracotta/20 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-terracotta-light" />
                </div>
                <h3 className="font-display text-2xl text-warm-50 mb-2">
                  Welcome to the Family!
                </h3>
                <p className="text-warm-300 font-body">
                  Check your inbox for your 15% welcome discount. We're so glad you're here.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
