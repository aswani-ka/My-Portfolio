export type FrontendProject = {
  title: string;
  image: string;      
  tech: string[];    
  live?: string;
  github?: string;
};

export const frontendProjects: FrontendProject[] = [
  
  {
    title: "Huddle Landing Page",
    image: "/projects/huddle-landing-page.png",
    tech: ["HTML", "CSS"],
    github: "https://github.com/aswani-ka/Huddle-Landing-Page"
  },
  {
    title: "Four Card Feature Section",
    image: "/projects/four-card-feature.png",
    tech: ["HTML", "CSS"],
    github: "https://github.com/aswani-ka/Four-Card-Feature-Section"
  },
  {
    title: "Newsletter Sign Up Component",
    image: "/projects/newsletter-sign-up.png",
    tech: ["HTML", "CSS"],
    github: "https://github.com/aswani-ka/News-Letter-Sign-Up-Form"
  },
  {
    title: "Manage Landing Page",
    image: "/projects/manage-landing-page.png",
    tech: ["HTML", "CSS"],
    github: "https://github.com/aswani-ka/Manage-Landing-Page"
  },
  {
    title: "Space Tourism Website",
    image: "/projects/space-tourism-website.png",
    tech: ["HTML", "CSS"],
    github: "https://github.com/aswani-ka/Space-Tourism-Website"
  },
  {
    title: "Coming Soon Page",
    image: "/projects/coming-soon-page.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/aswani-ka/Base-Apparel-Coming-Soon-Page"
  },
  {
    title: "Sign Up Form",
    image: "/projects/sign-up-form.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/aswani-ka/Intro-Component-With-SignUp-Form",
  },
  {
    title: "Conference Ticket Generator Form",
    image: "/projects/conference-ticket-generator.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/aswani-ka/Conference-Ticket-Generator",
  },
  
];
