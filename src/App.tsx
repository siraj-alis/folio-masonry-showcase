import React, { useState } from "react";
import { Toaster } from "sonner";
import Navbar from "./components/portfolio/Navbar";
import Hero from "./components/portfolio/Hero";
import MasonryGallery from "./components/portfolio/MasonryGallery";
import About from "./components/portfolio/About";
import Awards from "./components/portfolio/Awards";
import Testimonials from "./components/portfolio/Testimonials";
import ContactForm from "./components/portfolio/ContactForm";
import Footer from "./components/portfolio/Footer";
import { Project } from "./data/projects";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, User, Layout, ArrowRight } from "lucide-react";

const App = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-white text-zinc-950 selection:bg-primary selection:text-white">
      <Toaster position="top-right" />
      <Navbar />
      
      <main>
        <Hero />
        <MasonryGallery onProjectClick={setSelectedProject} />
        <About />
        <Awards />
        <Testimonials />
        <ContactForm />
      </main>

      <Footer />

      {/* Case Study Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-white">
          {selectedProject && (
            <div className="flex flex-col">
              <div className="relative aspect-video">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8 md:p-12 max-h-[60vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                  <div className="md:col-span-3">
                    <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">
                      {selectedProject.category}
                    </span>
                    <DialogTitle className="text-4xl md:text-5xl font-black mb-6">
                      {selectedProject.title}
                    </DialogTitle>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-bold uppercase text-zinc-400 mb-2">
                        <User className="w-3 h-3" /> Client
                      </h4>
                      <p className="font-bold">{selectedProject.client}</p>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-bold uppercase text-zinc-400 mb-2">
                        <Calendar className="w-3 h-3" /> Year
                      </h4>
                      <p className="font-bold">{selectedProject.year}</p>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-bold uppercase text-zinc-400 mb-2">
                        <Layout className="w-3 h-3" /> Role
                      </h4>
                      <p className="font-bold">{selectedProject.role}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      The Challenge <ArrowRight className="w-5 h-5 text-primary" />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      The Solution <ArrowRight className="w-5 h-5 text-primary" />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedProject.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${selectedProject.title} view ${i + 1}`}
                      className="rounded-2xl w-full"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default App;