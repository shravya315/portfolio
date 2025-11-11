export interface SiteData {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    leetcode?: string;
  };
}

export interface AboutData {
  bio: string;
  education: {
    degree: string;
    institute: string;
    year: string;
  }[];
  passions: string[];
  highlights: {
    icon: string;
    text: string;
  }[];
}

export interface Skill {
  name: string;
  category: "Web Dev" | "Programming" | "Cloud/DevOps" | "Tools" | "Soft Skills";
  icon: string;
  level?: string;
}

export interface Project {
  title: string;
  shortDescription: string;
  tech: string[];
  image: string;
  links: {
    demo?: string;
    repo?: string;
  };
  highlight?: string;
  year: string;
}

export interface Experience {
  title: string;
  org: string;
  start: string;
  end?: string;
  bullets: string[];
  type: "Internship" | "Hackathon" | "Award";
  location?: string;
}

export const site: SiteData = {
  name: "Shravya Atrey",
  role: "DSA & Problem Solving Enthusiast",
  tagline:
    "I solve complex problems through structured logic and clean thinking.",
  location: "Panipat, Haryana, India",
  email: "shravyatrey315@gmail.com",
  socialLinks: {
    github: "https://github.com/shravya315",
    linkedin: "https://linkedin.com/in/shravyatrey315",
    leetcode: "https://leetcode.com/u/shravya315/",
  },
};

export const about: AboutData = {
  bio: "I'm a Computer Science student who enjoys breaking down complex challenges and solving them with structured reasoning. I focus heavily on Data Structures & Algorithms, and I take pride in consistency, discipline, and continuous improvement. I also enjoy mentoring, leading student communities, and contributing to campus events.",
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institute: "Geeta University, Panipat",
      year: "2023 – 2027",
    },
  ],
  passions: [
    "Competitive Programming",
    "Problem Solving",
    "Leadership & Event Management",
    "Continuous Learning",
    "Helping Others Learn",
  ],
  highlights: [
    { icon: "MapPin", text: "Based in Panipat, Haryana" },
    { icon: "Code2", text: "Strong in DSA (C++) and logic building" },
    { icon: "BookOpen", text: "Active learner & problem solver" },
    { icon: "Coffee", text: "Loves discussions & collaboration" },
  ],
};

export const skills: Skill[] = [
  // Web Dev
  {
    name: "HTML",
    category: "Web Dev",
    icon: "FileCode",
    level: "Strong foundation",
  },
  {
    name: "CSS",
    category: "Web Dev",
    icon: "Palette",
    level: "Clean UI sense",
  },
  {
    name: "JavaScript",
    category: "Web Dev",
    icon: "Code",
    level: "Intermediate",
  },
  {
    name: "React.js",
    category: "Web Dev",
    icon: "Layout",
    level: "Learning & practicing",
  },
  {
    name: "Express.js",
    category: "Web Dev",
    icon: "CircleChevronRight",
    level: "Learning & practicing",
  },
  {
    name: "Node.js",
    category: "Web Dev",
    icon: "Workflow",
    level: "Learning & practicing",
  },
  {
    name: "MongoDB",
    category: "Web Dev",
    icon: "Database",
    level: "Learning & practicing",
  },

  // Backend / Core CS
  {
    name: "C",
    category: "Programming",
    icon: "Code",
    level: "Primary DSA language",
  },
  {
    name: "C++",
    category: "Programming",
    icon: "Terminal",
    level: "Primary DSA language",
  },
  {
    name: "DSA",
    category: "Programming",
    icon: "Boxes",
    level: "Solved 200+ problems",
  },
  {
    name: "Problem Solving",
    category: "Programming",
    icon: "Lightbulb",
    level: "Core strength",
  },

  // Cloud/DevOps (Basic)
  {
    name: "GitHub",
    category: "Cloud/DevOps",
    icon: "GitBranch",
    level: "Version control confident",
  },
  {
    name: "Vercel",
    category: "Cloud/DevOps",
    icon: "Triangle",
    level: "Version control confident",
  },

  // Tools & Soft Skills
  {
    name: "Git",
    category: "Tools",
    icon: "GitCommit",
    level: "Used in personal & team projects",
  },
  {
    name: "VS Code",
    category: "Tools",
    icon: "TerminalSquare",
    level: "Primary environment",
  },
  {
    name: "Communication",
    category: "Soft Skills",
    icon: "Users",
    level: "President | Secretary",
  },
  {
    name: "Leadership",
    category: "Soft Skills",
    icon: "User",
    level: "President | Secretary",
  },
  {
    name: "Teamwork",
    category: "Soft Skills",
    icon: "Handshake",
    level: "President | Secretary",
  },

];

export const projects: Project[] = [
  {
    title: "Unicode Bold Style Generator",
    shortDescription:
      "A Next.js tool that converts plain text into multiple Unicode bold variations with instant copy support.",
    tech: ["Next.js", "JavaScript", "Tailwind CSS"],
    image: "/unicode.png",
    links: {
      demo: "https://bold-text-generator-three.vercel.app/", // <- Replace when ready
      repo: "https://github.com/shravya315/bold-text-generator", // <- Replace when ready
    },
    highlight: "One-click copy + 95% browser compatibility",
    year: "2025",
  },
  {
    title: "Fashion Website",
    shortDescription:
      "A modern, aesthetic fashion landing page with responsive layout and smooth scaling.",
    tech: ["HTML", "CSS", "Responsive Design"],
    image: "/fashion.png",
    links: {
      demo: "https://social-media-alpha-topaz.vercel.app/", // optional
      repo: "https://github.com/shravya315/social-media", // optional
    },
    highlight: "Works seamlessly across all device sizes",
    year: "2024",
  },
  {
    title: "Railway Management System",
    shortDescription:
      "A DSA-based railway record and lookup system designed to improve operational data efficiency.",
    tech: ["C++", "DSA", "OOP"],
    image: "/rail.png",
    links: {
      demo: "",
      repo: "https://github.com/yourusername/railway-management-system", // optional
    },
    highlight: "Improved data lookup efficiency by ~40%",
    year: "2023",
  },
];

export const experience: Experience[] = [
  {
    title: "DSA Intern",
    org: "Geeta Technical Hub",
    start: "2025-06",
    end: "2025-08",
    type: "Internship",
    location: "Panipat, Haryana",
    bullets: [
      "Solved 100+ DSA problems across LeetCode and GFG.",
      "Strengthened core understanding of arrays, trees, graphs, and DP.",
      "Improved problem-solving efficiency and code clarity.",
    ],
  },
  {
    title: "DSA Intern",
    org: "Geeta Technical Hub",
    start: "2024-06",
    end: "2024-08",
    type: "Internship",
    location: "Panipat, Haryana",
    bullets: [
      "Solved 100+ algorithmic problems.",
      "Worked with problem patterns and performance optimization.",
      "Developed consistency and logical reasoning.",
    ],
  },
  {
    title: "President - School of CSE",
    org: "Geeta University",
    start: "2024-01",
    end:"Present",
    type: "Award",
    location: "Panipat, Haryana",
    bullets: [
      "Led academic initiatives, events, and student engagement activities.",
      "Lead Engineer's Day 2025 with 5+ events",
      "Record podcast episode with Cyber Security Expert Mr. Mayank Jagota",
      "Coordinated Deeksharambh 2024",
      "Organized Engineer's Day 2024",
      "Coordinated Yugantran Techfest 2024",
      "Mentored peers and promoted collaborative learning culture.",
    ],
  },
  {
    title: "Secretary - CodeForge Society",
    org: "Geeta University",
    start: "2023-09",
    end:"Present",
    type: "Award",
    location: "Panipat, Haryana",
    bullets: [
      "Organized National Level Hackathon - NexHack 2025",
      "Organized Internal Hackathon - HackForge'25",
      "Helped build a supportive and active student tech community.",
    ],
  },
];

export const contact = {
  formPrompt: "Tell me about what you'd like to work on together.",
  successMessage: "Thanks! I’ll get back to you soon.",
  errorMessage: "Something went wrong. You can email me directly:",
  reassurance: "I usually reply within 24 hours.",
};
