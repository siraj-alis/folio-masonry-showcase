export type Project = {
  id: string;
  title: string;
  category: "Web Design" | "Branding" | "Photography" | "App Design" | "Product";
  thumbnail: string;
  client: string;
  year: string;
  role: string;
  description: string;
  challenge: string;
  solution: string;
  images: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Nova Financial Suite",
    category: "App Design",
    thumbnail: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9f674508-3c48-4316-a6f8-8e3184bdf27b/project-app-design-1-41e67cf3-1773322843274.webp",
    client: "Nova Corp",
    year: "2024",
    role: "Lead UI/UX Designer",
    description: "A comprehensive fintech application focused on accessibility and intuitive financial management for the next generation of investors.",
    challenge: "The challenge was to simplify complex financial data into a digestible and engaging mobile interface without compromising on functionality.",
    solution: "We implemented a custom design system with high-contrast elements and interactive data visualizations that prioritize clarity and ease of use.",
    images: [
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9f674508-3c48-4316-a6f8-8e3184bdf27b/project-app-design-1-41e67cf3-1773322843274.webp",
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9f674508-3c48-4316-a6f8-8e3184bdf27b/project-web-design-1-09404e13-1773322838448.webp"
    ]
  },
  {
    id: "2",
    title: "Aura Brand Identity",
    category: "Branding",
    thumbnail: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9f674508-3c48-4316-a6f8-8e3184bdf27b/project-branding-1-4c8ffdc8-1773322838708.webp",
    client: "Aura Luxury",
    year: "2023",
    role: "Creative Director",
    description: "Reimagining the visual language for a high-end luxury perfume house, focusing on minimalism and sensory storytelling.",
    challenge: "The brand needed to transition from a traditional look to a modern, digital-first identity while maintaining its heritage of elegance.",
    solution: "A bespoke typeface combined with a muted, sophisticated color palette and tactile packaging design that emphasizes the luxury experience.",
    images: [
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9f674508-3c48-4316-a6f8-8e3184bdf27b/project-branding-1-4c8ffdc8-1773322838708.webp",
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9f674508-3c48-4316-a6f8-8e3184bdf27b/project-product-1-35129a42-1773322838585.webp"
    ]
  },
  {
    id: "3",
    title: "Urban Monoliths",
    category: "Photography",
    thumbnail: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9f674508-3c48-4316-a6f8-8e3184bdf27b/project-photography-1-cdf8b7c0-1773322838693.webp",
    client: "Self-Initiated",
    year: "2023",
    role: "Photographer",
    description: "An architectural photography series exploring the intersection of brutalist architecture and the vastness of the morning sky.",
    challenge: "Capturing the sense of scale and texture of massive concrete structures during specific lighting conditions in various cities.",
    solution: "A multi-city exhibition series that highlights the often overlooked beauty of urban geometry and minimalist composition.",
    images: [
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9f674508-3c48-4316-a6f8-8e3184bdf27b/project-photography-1-cdf8b7c0-1773322838693.webp",
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9f674508-3c48-4316-a6f8-8e3184bdf27b/project-photography-2-20c8a4eb-1773322837656.webp"
    ]
  },
  {
    id: "4",
    title: "Ether Digital Platform",
    category: "Web Design",
    thumbnail: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9f674508-3c48-4316-a6f8-8e3184bdf27b/project-web-design-1-09404e13-1773322838448.webp",
    client: "Ether Studio",
    year: "2024",
    role: "Web Designer & Developer",
    description: "A dark-themed, immersive web experience for a digital creative agency showcasing their portfolio through advanced web animations.",
    challenge: "Creating a high-performance website with complex animations that remains accessible and responsive across all devices.",
    solution: "Using React and Framer Motion to build a modular, component-based site with lazy loading and optimized assets.",
    images: [
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9f674508-3c48-4316-a6f8-8e3184bdf27b/project-web-design-1-09404e13-1773322838448.webp",
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9f674508-3c48-4316-a6f8-8e3184bdf27b/project-app-design-1-41e67cf3-1773322843274.webp"
    ]
  },
  {
    id: "5",
    title: "Vogue Editorial Series",
    category: "Photography",
    thumbnail: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9f674508-3c48-4316-a6f8-8e3184bdf27b/project-photography-2-20c8a4eb-1773322837656.webp",
    client: "Vogue Magazine",
    year: "2023",
    role: "Fashion Photographer",
    description: "An avant-garde editorial series exploring high-fashion through the lens of dramatic lighting and high-contrast photography.",
    challenge: "Pushing the boundaries of traditional fashion photography while maintaining a коммерческий appeal for a major publication.",
    solution: "We used unconventional lighting setups and bold posing to create a series that felt more like fine art than commercial photography.",
    images: [
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9f674508-3c48-4316-a6f8-8e3184bdf27b/project-photography-2-20c8a4eb-1773322837656.webp",
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9f674508-3c48-4316-a6f8-8e3184bdf27b/project-photography-1-cdf8b7c0-1773322838693.webp"
    ]
  },
  {
    id: "6",
    title: "Zenith Smart Device",
    category: "Product",
    thumbnail: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9f674508-3c48-4316-a6f8-8e3184bdf27b/project-product-1-35129a42-1773322838585.webp",
    client: "Zenith Tech",
    year: "2024",
    role: "Industrial Designer",
    description: "Designing the physical form and user interaction model for a next-generation smart home controller.",
    challenge: "Balancing ergonomic physical controls with a sleek, minimalist aesthetic that fits seamlessly into modern home environments.",
    solution: "A matte-finish body with haptic feedback controls and a hidden-until-lit display that minimizes visual clutter.",
    images: [
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9f674508-3c48-4316-a6f8-8e3184bdf27b/project-product-1-35129a42-1773322838585.webp",
      "https://storage.googleapis.com/dala-prod-public-storage/generated-images/9f674508-3c48-4316-a6f8-8e3184bdf27b/project-branding-1-4c8ffdc8-1773322838708.webp"
    ]
  }
];

export const CATEGORIES = ["All", "Web Design", "Branding", "Photography", "App Design", "Product"] as const;