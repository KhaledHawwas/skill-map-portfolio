export interface Skill {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Mobile" | "Database" | "Tools";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Open-Source" | "Client Paid";
  skills: string[]; // skill IDs
  link?: string;
  featured?: boolean;
}

export const skills: Skill[] = [
  { id: "kotlin", name: "Kotlin", category: "Mobile" },
  { id: "java", name: "Java", category: "Backend" },
  { id: "jetpack-compose", name: "Jetpack Compose", category: "Mobile" },
  { id: "room", name: "Room Database", category: "Database" },
  { id: "firebase", name: "Firebase", category: "Backend" },
  { id: "sql", name: "SQL", category: "Database" },
  { id: "react", name: "React", category: "Frontend" },
  { id: "typescript", name: "TypeScript", category: "Frontend" },
  { id: "git", name: "Git", category: "Tools" },
  { id: "android", name: "Android Development", category: "Mobile" },
];

export const projects: Project[] = [
  {
    id: "task-manager-app",
    title: "Task Manager Android App",
    description: "A modern task management application built with Jetpack Compose and Room database. Features include task categorization, priority levels, and offline support.",
    category: "Open-Source",
    skills: ["kotlin", "jetpack-compose", "room", "android"],
    featured: true,
  },
  {
    id: "ecommerce-backend",
    title: "E-commerce API",
    description: "RESTful API for an e-commerce platform with user authentication, product management, and order processing. Built with Spring Boot and PostgreSQL.",
    category: "Client Paid",
    skills: ["java", "sql", "firebase"],
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio",
    description: "A responsive portfolio website showcasing projects and skills with smooth animations and modern design principles.",
    category: "Open-Source",
    skills: ["react", "typescript"],
    featured: true,
  },
  {
    id: "inventory-system",
    title: "Inventory Management System",
    description: "Desktop application for small businesses to manage inventory, track sales, and generate reports. Built with Java Swing and MySQL.",
    category: "Client Paid",
    skills: ["java", "sql"],
  },
  {
    id: "weather-app",
    title: "Weather Forecast App",
    description: "Android app providing detailed weather forecasts with beautiful UI animations and location-based services.",
    category: "Open-Source",
    skills: ["kotlin", "jetpack-compose", "android"],
  },
];