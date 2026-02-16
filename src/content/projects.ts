export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  links: { live?: string; github?: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "skillio-job-portal",
    title: "Skillio - Job Portal Platform",
    tagline: "Role-based job portal with recruiter + job seeker workflows",
    description:
      "Built dashboards, job posting flow, applications tracking, and secure auth with JWT. Implemented role-based access control and responsive design.",
    stack: ["Next.js", "MongoDB", "Node.js", "Tailwind", "JWT"],
    links: { github: "https://github.com/aswani-ka/Skillio-Job-Portal", live: "https://skillio-job-portal.vercel.app/" },
    featured: true,
  },
  {
    slug: "realtime-chat",
    title: "Realtime Chat App",
    tagline: "Socket-based chat with modern auth + presence",
    description:
      "Real-time messaging, typing indicators, online status, and media sharing.",
    stack: ["Next.js", "Socket.io", "MongoDB", "Tailwind"],
    links: { github: "https://github.com/aswani-ka/Real-Time-Chat-App", live: "https://real-time-chat-app-six-peach.vercel.app/" },
    featured: true,
  },
];
