import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-xl font-black">
          ALEX<span className="text-primary">.</span>STUDIO
        </div>
        
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Alex Studio.
        </div>
      </div>
    </footer>
  );
};

export default Footer;