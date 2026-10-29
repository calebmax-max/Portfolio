export const projects = [
  {
    id: "elitehotels",
    title: "EliteHotels",
    category: "Business Systems",
    description: "A comprehensive hotel management and booking platform demonstrating room reservations, food ordering, event requests, user accounts, and administrative workflows.",
    coverImage: "/images/projects/elitehotels/cover.webp",
    technologies: ["React", "Python", "Flask", "MySQL"],
    liveUrl: "https://elitehotel-4pgo.onrender.com/",
    githubUrl: "",
    screenshots: [
      { src: "/images/projects/elitehotels/dashboard.webp", title: "Admin Dashboard", description: "Main application dashboard with analytics" },
      { src: "/images/projects/elitehotels/booking.webp", title: "Room Booking", description: "Intuitive room reservation interface" },
      { src: "/images/projects/elitehotels/food-ordering.webp", title: "Food Ordering", description: "In-app food and beverage ordering system" }
    ],
    videos: [
      { title: "Platform Walkthrough", type: "local", src: "/videos/projects/elitehotels-demo.mp4", poster: "/images/projects/elitehotels/cover.webp" }
    ],
    features: ["Room reservations", "Food ordering", "Event requests", "User account management", "Admin workflows"]
  },
  {
    id: "typearena",
    title: "TypeArena",
    category: "Learning Platforms",
    description: "A typing practice and learning platform designed to help users improve typing speed, accuracy, and overall keyboard skills through interactive exercises.",
    coverImage: "/images/projects/typearena/cover.webp",
    technologies: ["JavaScript", "HTML", "CSS", "Local Storage"],
    liveUrl: "",
    githubUrl: "https://github.com/calebmax-max/TypeArena",
    screenshots: [
      { src: "/images/projects/typearena/homepage.webp", title: "Homepage", description: "Clean landing page with quick start options" },
      { src: "/images/projects/typearena/practice.webp", title: "Practice Mode", description: "Real-time typing accuracy and WPM tracking" }
    ],
    videos: [],
    features: ["Real-time WPM tracking", "Accuracy metrics", "Progressive difficulty levels", "Clean, distraction-free UI"]
  },
  {
    id: "school-management",
    title: "School Management System",
    category: "Business Systems",
    description: "A robust school management system focused on student records, registration, dashboards, and streamlined administrative workflows for educational institutions.",
    coverImage: "/images/projects/school-management/cover.webp",
    technologies: ["React", "Python", "PostgreSQL", "REST API"],
    liveUrl: "",
    githubUrl: "https://github.com/calebmax-max/School-management-system",
    screenshots: [
      { src: "/images/projects/school-management/dashboard.webp", title: "Admin Dashboard", description: "Overview of school metrics and recent activities" },
      { src: "/images/projects/school-management/students.webp", title: "Student Records", description: "Comprehensive student registration and record management" }
    ],
    videos: [
      { title: "System Overview", type: "local", src: "/videos/projects/school-management-demo.mp4", poster: "/images/projects/school-management/cover.webp" }
    ],
    features: ["Student registration", "Record management", "Role-based dashboards", "Administrative reporting"]
  },
  {
    id: "pos-system",
    title: "POS System",
    category: "Business Systems",
    description: "A modern point-of-sale system project intended to support sales, inventory tracking, and related business workflows for retail and service environments.",
    coverImage: "/images/projects/pos/cover.webp",
    technologies: ["JavaScript", "React", "Node.js", "MySQL"],
    liveUrl: "",
    githubUrl: "https://github.com/calebmax-max/POS",
    screenshots: [
      { src: "/images/projects/pos/dashboard.webp", title: "Sales Dashboard", description: "Daily sales overview and quick actions" },
      { src: "/images/projects/pos/sales.webp", title: "Checkout Interface", description: "Fast and intuitive point-of-sale checkout screen" }
    ],
    videos: [],
    features: ["Quick checkout", "Inventory tracking", "Sales reporting", "Receipt generation"]
  }
];

export const categories = ["All Projects", "Websites", "Web Applications", "Business Systems", "Learning Platforms"];