import React from "react";
import { motion } from "framer-motion";
import { Download, Instagram, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-[12px] border-white shadow-2xl">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/9f674508-3c48-4316-a6f8-8e3184bdf27b/profile-picture-4b675988-1773322837672.webp"
                alt="Alex - Creative Director"
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-full h-40 w-40 flex flex-col items-center justify-center text-center shadow-xl rotate-12"
            >
              <span className="text-4xl font-black">10+</span>
              <span className="text-[10px] font-bold uppercase leading-tight">Years of Experience</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              ABOUT <br />
              <span className="text-primary">THE VISIONARY.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground mb-10">
              <p>
                I'm Alex, a multi-disciplinary creative director and designer based in New York. 
                I specialize in crafting digital experiences that are as functional as they are beautiful.
              </p>
              <p>
                My approach is rooted in minimalism, user-centric thinking, and a relentless 
                pursuit of detail. Every pixel has a purpose.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-10">
              {["UI/UX Design", "Brand Strategy", "Motion Graphics", "Webflow", "React", "Art Direction", "Photography"].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <Button size="lg" className="rounded-full gap-2">
                <Download className="w-4 h-4" /> Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;