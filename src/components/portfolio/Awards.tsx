import React from "react";
import { motion } from "framer-motion";
import { Trophy, Star, Award, Zap } from "lucide-react";

const Awards = () => {
  const awards = [
    { year: "2024", title: "Site of the Day", org: "Awwwards", icon: Trophy },
    { year: "2023", title: "Best Portfolio 2023", org: "Behance", icon: Star },
    { year: "2023", title: "Design Excellence", org: "CSS Design Awards", icon: Award },
    { year: "2022", title: "Webby Winner", org: "The Webby Awards", icon: Zap },
  ];

  return (
    <section id="awards" className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">RECOGNITION</h2>
          <p className="text-zinc-500">Industry accolades and achievements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 border border-zinc-800 rounded-3xl hover:bg-zinc-900 transition-colors text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <award.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-zinc-500 text-sm font-bold mb-2 block">{award.year}</span>
              <h3 className="text-xl font-bold mb-1">{award.title}</h3>
              <p className="text-zinc-400 text-sm">{award.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;