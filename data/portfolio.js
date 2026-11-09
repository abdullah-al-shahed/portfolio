/**
 * Personal, education, skills and experience data.
 *
 * Content marked as a placeholder is intentionally incomplete. Replace the
 * bracketed values with real information — do not publish placeholder copy.
 */

export const profile = {
  name: "MD. ABDULLAH AL SHAHED",
  displayName: "MD. Abdullah Al Shahed",
  shortName: "Abdullah Al Shahed",
  initials: "AS",
  designation: "Junior Full Stack Developer",
  email: "alshahed6951@gmail.com",
  phone: "+880 1885-306951",
  phoneHref: "+8801885306951",
  github: "https://github.com/abdullah-al-shahed",
  linkedin: "https://www.linkedin.com/in/md-abdullah-al-shahed/",
  photo: "/shahed.jpg",
  resumeUrl: "/resume/MD-Abdullah-Al-Shahed-Resume.pdf",
  intro:
    "I build full-stack web applications with JavaScript, React, Next.js, and Node.js — from clean, responsive interfaces to REST APIs backed by MongoDB. I care about readable code, thoughtful details, and work that feels finished.",
  about: [
    "I'm a Junior Full Stack Developer with a strong interest in the JavaScript ecosystem. I work across the stack — building responsive interfaces with React, Next.js, and Tailwind CSS, and supporting them with Node.js, Express, and MongoDB.",
    "My approach is simple: understand the problem, keep the architecture clear, and pay attention to the small details that make a product easier to use. I enjoy learning by building, and I'm always looking for the next thing to improve.",
    "I completed a Diploma in Engineering (Power Technology) at Chattogram Polytechnic Institute in 2025, and now focus on full-stack web development.",
  ],
};

export const socialLinks = [
  {
    label: "GitHub",
    href: profile.github,
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: "linkedin",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: "mail",
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    icon: "frontend",
    description:
      "Building accessible, responsive interfaces with a component-first mindset.",
    skills: [
      { name: "JavaScript (ES6+)", icon: "javascript" },
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Shadcn UI", icon: "shadcn" },
    ],
  },
  {
    title: "Backend",
    icon: "backend",
    description:
      "Designing APIs and server-side flows with Node.js and Express.",
    skills: [
      { name: "Node.js", icon: "node" },
      { name: "Express.js", icon: "express" },
      { name: "REST API", icon: "api" },
      { name: "Better Auth", icon: "auth" },
    ],
  },
  {
    title: "Data & Tooling",
    icon: "database",
    description:
      "Modeling data in MongoDB and shipping with a clean, versioned workflow.",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
    ],
  },
];

export const education = {
  degree: "Diploma in Engineering (Power Technology)",
  institution: "Chattogram Polytechnic Institute",
  passingYear: "2025",
  cgpa: "3.12 / 4.00",
};

/**
 * Professional experience placeholder.
 *
 * Replace this single entry with real roles (duplicate the object if needed).
 * Keep the field names so the Experience section continues to render correctly.
 */
export const experiences = [
  {
    id: "quality-coordinator-unvague-garments",
    role: "Quality Coordinator",
    company: "Unvague Garments Company Ltd.",
    period: "5 months",
    highlights: [
      "Supported ERP software operations, quality coordination, and routine reporting.",
      "Prepared documentation and supported official communication and meeting coordination.",
      "Handled database maintenance, office documentation, and printing tasks.",
    ],
  },
];

export const navItems = [
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Skills", href: "/#skills", sectionId: "skills" },
  { label: "Education", href: "/#education", sectionId: "education" },
  { label: "Experience", href: "/#experience", sectionId: "experience" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];
