export const projects = [
  {
    slug: "booknook",
    name: "BookNook – Online Library Management System",
    shortName: "BookNook",
    tagline: "Online library management system",
    type: "Full-stack web application",
    featured: true,
    isPlaceholder: false,
    image: "/projects/booknook.png",
    imageAlt:
      "BookNook project preview placeholder showing a library catalog interface.",
    summary:
      "A full-stack online library where readers browse, borrow, and return books while inventory and borrowing history stay in sync.",
    description:
      "BookNook is an online library management system built with Next.js, React, Tailwind CSS, and Shadcn UI on the client, and Node.js, Express, MongoDB, and Better Auth on the server. The application provides a dynamic catalog with sorting and filtering, secure authentication and session management, protected CRUD operations for book listings, and borrowing and returning flows that update inventory automatically. Readers can also review their borrowing history from their account.",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
    ],
    features: [
      "Dynamic book catalog with sorting and filtering",
      "Secure registration, login, and session management",
      "Protected CRUD operations for book listings",
      "Borrowing and returning with automatic inventory updates",
      "Borrowing history for every reader",
    ],
    links: {
      live: "https://booknook-client-amber.vercel.app/",
      client: "https://github.com/abdullah-al-shahed/booknook-client.git",
      // Reference only. Detail pages show the client repository only.
      server: "https://github.com/abdullah-al-shahed/booknook-server.git",
    },
    status: "Live project",

    

    contentPlaceholders: {
      challenges: [
        "Challenge 01 — Describe the problem you ran into and why it mattered.",
      ],
      improvements: [
        "Idea 01 — Add the next feature or product improvement you have in mind.",
      ],
    },
  },


    {
    slug: "bazar-dor",
    name: "BazarDor (বাজার দর) – Commodity Price Tracker",
    shortName: "BazarDor",
    tagline: "Daily market price tracker",
    type: "Web application",
    featured: false,
    isPlaceholder: false,
    image: "/projects/bazar-dor.png",
    imageAlt:
      "BazarDor homepage showing the live price ticker and commodity listings.",
    summary:
      "A web app for tracking daily commodity prices, comparing market rates, and spotting price changes at a glance.",
    description:
      "BazarDor helps users follow daily commodity prices and compare market rates. It is built with Next.js (App Router), Tailwind CSS, and DaisyUI, with authentication handled by Better Auth. Visitors can filter products by category, open a dedicated page for each item, sort by price with Bengali numeral support, and watch daily price changes scroll across a live ticker on the homepage. Signed-in users can update their profile from the dashboard.",
    stack: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "DaisyUI",
      "Better Auth",
      "React Hot Toast",
    ],
    features: [
      "Category filtering with dynamic product and category pages",
      "Price sorting (low to high, high to low) with Bengali numeral support",
      "Live price ticker showing daily changes on the homepage",
      "Email/password and social sign-in with Better Auth",
      "Profile update from the user dashboard",
      "Fully responsive layout for mobile, tablet, and desktop",
    ],
    links: {
      live: "https://bazar-dor-mauve-beta.vercel.app/",
      client: "https://github.com/abdullah-al-shahed/bazar-dor.git",
      server: "",
    },
    status: "Live project",
    contentPlaceholders: { challenges: [], improvements: [] },
  },
    {
    slug: "fitlog",
    name: "FitLog – Workout Planner & Tracker",
    shortName: "FitLog",
    tagline: "Gym companion app",
    type: "Web application",
    featured: false,
    isPlaceholder: false,
    image: "/projects/fitlog.png",
    imageAlt:
      "FitLog homepage with the workout library hero and exercise cards in a dark theme.",
    summary:
      "A dark-themed gym companion where users browse a workout library, build a daily plan capped at five lifts, save workouts for later, and track completed sets.",
    description:
      "FitLog is a responsive, dark-themed workout app built with Next.js (App Router) and Tailwind CSS. Users browse a library of lifts loaded from the FitLog API, open a detail page with step-by-step instructions, and add exercises to a daily plan limited to five lifts. A separate Saved tab bookmarks workouts for later, a live summary totals planned exercises, workout minutes, and calories, and completed lifts can be marked as done. Plans and saved items persist in localStorage, and toast notifications confirm every action.",
    stack: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Lucide React",
      "React Hot Toast",
    ],
    features: [
      "Workout library loaded from an API, with a detail page and step-by-step instructions",
      "Daily plan capped at five lifts, plus a separate Saved tab",
      "Live summary of planned exercises, total minutes, and calories",
      "Mark lifts as done, and sort by duration, calories, or rating",
      "Plans and saved workouts persist in localStorage across reloads",
      "Toast feedback, active navigation highlights, and a custom 404 page",
    ],
    links: {
      live: "https://assignment-6-fit-log-alpha.vercel.app/",
      client: "https://github.com/abdullah-al-shahed/assignment-6-fit-log.git",
      server: "",
    },
    status: "Live project",
    contentPlaceholders: { challenges: [], improvements: [] },
  },
];

/* ==================================================================
  {
    slug: "task-manager",                       // URL হবে /projects/task-manager
    name: "Task Manager – Team To-do App",      // পুরো নাম
    shortName: "Task Manager",                  // ছোট নাম (breadcrumb, Next/Previous এ)
    tagline: "Team productivity app",           // কার্ডের ওপরের ছোট লেখা
    type: "Full-stack web application",         // ছবির ওপরের ব্যাজে দেখাবে
    featured: false,
    isPlaceholder: false,
    image: "/projects/task-manager.png",        // public/projects/ এ ছবি রাখুন
    imageAlt: "Task Manager dashboard showing ...",   // ছবির সত্যিকারের বর্ণনা
    summary: "এক-দুই লাইনের সারসংক্ষেপ।",       // কার্ডে দেখাবে
    description: "বিস্তারিত বর্ণনা (প্রজেক্ট পেজের Overview এ)।",
    stack: ["Next.js", "Node.js", "MongoDB"],
    features: [
      "ফিচার ১",
      "ফিচার ২",
      "ফিচার ৩",
    ],
    links: {
      live: "https://...",                      // না থাকলে "" রাখুন
      client: "https://github.com/...",         // না থাকলে "" রাখুন
      server: "",
    },
    status: "Live project",                     // বা "In progress"
    challenges: ["আসল চ্যালেঞ্জ ১"],            // ঐচ্ছিক, না থাকলে লাইনটা বাদ দিন
    improvements: ["আসল পরিকল্পনা ১"],          // ঐচ্ছিক
    contentPlaceholders: { challenges: [], improvements: [] },  // এটা থাকতেই হবে
  },

   ================================================================== */

const showPlaceholders = process.env.NODE_ENV !== "production";

/** পাবলিশ করা সাইটে প্লেসহোল্ডার বাদ, dev এ সব */
export const visibleProjects = projects.filter(
  (project) => showPlaceholders || !project.isPlaceholder,
);

export const featuredProject =
  projects.find((project) => project.featured) ?? projects[0];

/** Projects সেকশনের ছোট কার্ডগুলো */
export const otherProjects = visibleProjects.filter(
  (project) => !project.featured,
);

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) ?? null;
}

export function getProjectNeighbours(slug) {
  const index = visibleProjects.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return { previous: null, next: null };
  }

  const previous = visibleProjects[index - 1] ?? null;
  const next = visibleProjects[index + 1] ?? null;

  return { previous, next };
}