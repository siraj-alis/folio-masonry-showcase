import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Alex is a rare talent who combines technical precision with deep artistic intuition. Working together was a game-changer for our brand.",
      author: "Sarah Jenkins",
      role: "CEO, Nova Financial",
    },
    {
      text: "The website Alex built for us isn't just a site; it's a piece of art that actually converts customers. Exceeded all expectations.",
      author: "Michael Chen",
      role: "Marketing Director, Ether Studio",
    },
    {
      text: "Incredible attention to detail. Every interaction feels deliberate and polished. A true professional.",
      author: "Emma Watson",
      role: "Founder, Aura Luxury",
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-black mb-12 text-center">WHAT CLIENTS SAY</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm relative"
            >
              <Quote className="w-10 h-10 text-primary/10 absolute top-8 left-8" />
              <p className="text-lg italic text-zinc-700 mb-8 relative z-10">"{t.text}"</p>
              <div>
                <h4 className="font-bold">{t.author}</h4>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;