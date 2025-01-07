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
    id: 8,
    name: "DevConnect",
    description:
      "A social platform enabling users to connect, share posts, and engage in real-time chat, fostering seamless interaction and communication",
    githubLink: "https://github.com/kunal021/devconnect",
    liveLink: "https://devconnectt.pages.dev/",
    image: "/projects/devconnect.png",
    technology: [
      "/skills/icons8-typescript-96.png",
      "/skills/icons8-react-native-96.png",
      "/skills/icons8-tailwindcss-96.png",
      "/skills/icons8-node-js-96.png",
      "/skills/icons8-express-js-96.png",
      "/skills/icons8-mongodb-96.png",
    ],
    featured: true,
  },
  {
    id: 7,
    name: "DevFlow",
    description:
      "A QA platform inspired by Stack Overflow, enabling users to post questions, provide answers, and engage in discussions",
    githubLink: "https://github.com/kunal021/devflow",
    liveLink: "https://devflow-flow.vercel.app/",
    image: "/projects/devflow.png",
    technology: [
      "/skills/icons8-typescript-96.png",
      "/skills/icons8-nextjs-96.png",
      "/skills/icons8-tailwindcss-96.png",
      "/skills/icons8-mongodb-96.png",
    ],
    featured: true,
  },
  {
    id: 6,
    name: "Trimr",
    description: "The only URL Shortener you’ll ever need.",
    githubLink: "https://github.com/kunal021/trimr",
    liveLink: "https://trimr.netlify.app/",
    image: "/projects/trimr.png",
    technology: [
      "/skills/icons8-react-native-96.png",
      "/skills/icons8-javascript-96.png",
      "/skills/icons8-tailwindcss-96.png",
      "/skills/icons8-supabase-96.png",
    ],
    featured: true,
  },
  // {
  //   id: 5,
  //   name: "Tickter",
  //   description: "Your one stop for all your event management needs.",
  //   githubLink: "https://github.com/kunal021/tickter",
  //   liveLink: "https://tickter.netlify.app/",
  //   image: "/projects/tickter.png",
  //   technology: [
  //     "/skills/icons8-react-native-96.png",
  //     "/skills/icons8-javascript-96.png",
  //     "/skills/icons8-tailwindcss-96.png",
  //     "/skills/icons8-express-js-96.png",
  //     "/skills/icons8-supabase-96.png",
  //     "/skills/icons8-mongodb-96.png",
  //   ],
  //   featured: true,
  // },
  {
    id: 4,
    name: "Medium-Blog",
    description: "Write stories & ideas, share it to the world.",
    githubLink: "https://github.com/kunal021/medium-blog",
    liveLink: "https://kunal-medium-blog.vercel.app/",
    image: "/projects/medium-blog.png",
    technology: [
      "/skills/icons8-nextjs-96.png",
      "/skills/icons8-typescript-96.png",
      "/skills/icons8-tailwindcss-96.png",
      "/skills/icons8-prisma-orm-96.png",
      "/skills/icons8-supabase-96.png",
    ],
    featured: true,
  },
  {
    id: 3,
    name: "Music Academy",
    description:
      "A place where music artist can sell courses. Made Using NextJs",
    githubLink: "https://github.com/kunal021/music-academy",
    liveLink: "https://music-academy-rho.vercel.app/",
    image: "/projects/music.png",
    technology: [
      "/skills/icons8-nextjs-96.png",
      "/skills/icons8-typescript-96.png",
      "/skills/icons8-tailwindcss-96.png",
    ],
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
    technology: ["/skills/icons8-react-native-96.png"],
    featured: true,
  },
  {
    id: 1,
    name: "Piggame",
    description: "A two player dice game.",
    githubLink: "https://github.com/kunal021/piggame",
    liveLink: "https://kunalpiggame.netlify.app/",
    image: "/projects/piggame.png",
    technology: [
      "/skills/icons8-html-96.png",
      "/skills/icons8-css-96.png",
      "/skills/icons8-javascript-96.png",
    ],
    featured: true,
  },
  {
    id: 0,
    name: "Bank Landing Page",
    description: "A landing page that all modern banks require.",
    githubLink: "https://github.com/kunal021/Bankist_Landing_Page",
    liveLink: "https://kunalbankistlandingpage.netlify.app/",
    image: "/projects/bankist.png",
    technology: [
      "/skills/icons8-html-96.png",
      "/skills/icons8-css-96.png",
      "/skills/icons8-javascript-96.png",
    ],
    featured: true,
  },
];

export default projectData;
