interface projectType {
  id: number;
  name: string;
  description: string;
  githubLink: string;
  liveLink: string;
  image: string;
  technology: string[];
  featured: boolean;
}

const projectData: projectType[] = [
  {
    id: 0,
    name: "Bank Landing Page",
    description: "A landing page that all modern banks require",
    githubLink: "https://github.com/kunal021/Bankist_Landing_Page",
    liveLink: "https://kunalbankistlandingpage.netlify.app/",
    image: "/projects/bankist.png",
    technology: ["HTML", "CSS", "JavaScript"],
    featured: true,
  },
  {
    id: 1,
    name: "Piggame",
    description: "A two player dice game build with HTML, CSS and JavaScript",
    githubLink: "https://github.com/kunal021/piggame",
    liveLink: "https://kunalpiggame.netlify.app/",
    image: "/projects/piggame.png",
    technology: ["HTML", "CSS", "JavaScript"],
    featured: true,
  },
  {
    id: 2,
    name: "Far Away",
    description:
      "A power packed tool that helps you making and organizing a list of things",
    githubLink: "https://github.com/kunal021/Far_Away",
    liveLink: "https://kunalfaraway.netlify.app/",
    image: "/projects/faraway.png",
    technology: ["ReactJs"],
    featured: true,
  },
  {
    id: 3,
    name: "goodFOOD",
    description:
      "Craving for food, want to make it, but don't know how, no worries just come to goodFOOD",
    githubLink: "https://github.com/kunal021/goodFood",
    liveLink: "https://kunal-goodfood.netlify.app/",
    image: "/projects/goodfood.png",
    technology: ["ReactJs", "Taiwind CSS", "TheMealDB(API)"],
    featured: true,
  },
  {
    id: 4,
    name: "Paatym",
    description: "A clone of paytm, let you transfer money with other users",
    githubLink: "https://github.com/kunal021/paaytm-frontend",
    liveLink: "https://paaytm.vercel.app/",
    image: "/projects/paytm.png",
    technology: [
      "ReactJs",
      "Tailwind CSS",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "Jwt",
    ],
    featured: true,
  },
  {
    id: 5,
    name: "Courses.io",
    description:
      "Gets distracted while learning from youtube, fear no more learn from courses.io without distraction",
    githubLink: "https://github.com/kunal021/courses.io-1.0-",
    liveLink: "https://courses-io.vercel.app/",
    image: "/projects/courses.png",
    technology: [
      "ReactJs",
      "Tailwind CSS",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "Jwt",
    ],
    featured: true,
  },
  {
    id: 6,
    name: "Music Academy",
    description: "A place where music artist can sell courses",
    githubLink: "https://github.com/kunal021/music-academy",
    liveLink: "https://music-academy-rho.vercel.app/",
    image: "/projects/music.png",
    technology: ["NextJs", "TypeScript", "Tailwind CSS", "Aceternity UI"],
    featured: true,
  },
];

export default projectData;
