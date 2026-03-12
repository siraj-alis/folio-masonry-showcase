import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="group cursor-pointer relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-200"
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-white"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground mb-2 block">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
          <div className="flex items-center gap-2 text-sm font-medium">
            View Case Study <ExternalLink className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
      
      <div className="absolute top-6 left-6 group-hover:opacity-0 transition-opacity">
        <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
          {project.category}
        </span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;