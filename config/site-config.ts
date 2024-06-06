export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EqiupmentItem = {
  title: string;
  link: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  promotion?: string;
  liveLink?: string;
  price?: string;
  oldPrice?: string;
  Project?: string;
  stars?: number;
  /* Equipments */
  equipments?: EqiupmentItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "Linkedin",
    // icon:"linkedin",

    username: "@amaan-bhati",
    description:
      "CSE '25 || Web lead at MLSAKIIT || Web Dev intern at KIIT Digital || GSSOC'24 Mentor || Ex-Web developer and at TEDX and KIITFEST || Javascript || Reactjs || Tailwind CSS || TypeScript || Next.js || Three.js",
    color: "#1DA1F2",
    buttonTitle: "Connect",
    buttonLink: "https://www.linkedin.com/in/amaan-bhati",
    buttonSecondaryText: "5K",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@amaan-bhati",
    buttonTitle: "Follow",
    // buttonSecondaryText: "19",
    buttonLink: "https://github.com/amaan-bhati",
    color: "black",
    description:
      "Web Dev Lead at @MLSAKIIT || Enthusiastic tech geek || Aspiring Software Developer || reactjs/next || javascript || tailwind || typescript || threejs",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Portfolio Website",
    // icon: "twitter",
    username: "amaanbhati.tech",
    buttonTitle: "View Portfolio",
    buttonLink: "https://amaanbhati.tech",
    // buttonSecondaryText: "279",
    color: "#1DA1F2",
    description:
      "Built using reactjs, standing tall and responsive since the last 2 years, you'll get to know more about me. Make sure you visit!",
  },
 

  {
    layout: "1x2",
    type: "social",
    title: "Instagram",
    // icon: "discord",
    username: "@amaanbhatiii",
    buttonTitle: "Follow",
    buttonLink: "https://instagram.com/amaanbhatiii",
    // buttonSecondaryText: "44",
    color: "#1DA1F2",
    // description: "Keeps me connected with family and friends while we share memes and reels only to waste time in the name of relaxing ourselves.",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Twitter",
    // icon: "twitter",
    username: "@front_end_er",
    buttonTitle: "Follow",
    buttonLink: "https://twitter.com/front_end_er",
    // buttonSecondaryText: "279",
    color: "#1DA1F2",
    // description:
      // "Tech twitter is what keeps me updated with modern tech stacks and also keeps me entertained with technical memes and discussions.",
  },
 
  {
    layout: "2x2",
    type: "social",
    title: "Leetcode Profile",
    // icon: "twitter",
    username: "amaan-bhati",
    buttonTitle: "View Profile",
    buttonLink: "https://leetcode.com/amaanbhati",
    // buttonSecondaryText: "279",
    color: "#1DA1F2",
    description:
      "This is where I solve DSA and programming questions on a daily basis to improve my problem solving skills and still suck at it.",
  },
 
  {
    layout: "2x4",
    type: "equipment",
    title: "SKILLS AND TOOLS",
    image: "/image.png",
    equipments: [
      {
        title: "HTML/CSS",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Javascript",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Typescript",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Reactjs",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Nextjs",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Threejs",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Next Auth",
        link: "github.com/amaan-bhati",
      },
      {
        title: "NodeJS",
        link: "github.com/amaan-bhati",
      },
      {
        title: "ExpressJS",
        link: "github.com/amaan-bhati",
      },
      {
        title: "MongoDB",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Firebase",
        link: "github.com/amaan-bhati",
      },
      {
        title: "TailwindCSS",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Computer Vision",
        link: "github.com/amaan-bhati",
      },
      {
        title: "OpenCv",
        link: "github.com/amaan-bhati",
      },
      {
        title: "OpenAI",
        link: "github.com/amaan-bhati",
      },
      {
        title: "GenerativeAI",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Supabase",
        link: "github.com/amaan-bhati",
      },
      {
        title: "PostgreSQL",
        link: "github.com/amaan-bhati",
      },
      {
        title: "SQL",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Python",
        link: "github.com/amaan-bhati",
      },
      {
        title: "C++",
        link: "github.com/amaan-bhati",
      },
    ],
  },


  {
    layout: "2x2",
    type: "social",
    title: "Check out my Projects",
    // icon: "twitter",
    // username: "Neeche dekho",
    buttonTitle: "View Projects",
    buttonLink: "https://www.amaanbhati.tech/projectspage",
    // buttonSecondaryText: "279",
    color: "#1DA1F2",
    description:
      "Visit my portfolio website to view my projects accross multiple domains using various tech stacks. From basic to advanced, all at one place.",
      // username: "Elon Musk",
  },

 



  {
    layout: "2x2",
    type: "social",
    title: "One quote by Elon Musk that gets me going",
    // icon: "twitter",
    // username: "Neeche dekho",
    // buttonTitle: "Follow",
    // buttonLink: "https://twitter.com/makrdev",
    // buttonSecondaryText: "279",
    color: "#1DA1F2",
    description:
      "“It’s very important to have a feedback loop, where you’re constantly thinking about what you’ve done and how you could be doing it better.”",
      // username: "Elon Musk",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Make sure you visit again",
    // icon: "twitter",
    // username: "Neeche dekho",
    // buttonTitle: "Follow",
    // buttonLink: "https://twitter.com/makrdev",
    // buttonSecondaryText: "279",
    color: "#1DA1F2",
    description:
      "This is a shorter version of my portfolio that I designed and developed in two days, it is still in progress. Hence, make sure you visit again.",
      // username: "Elon Musk",
  },
  // {
  //   layout: "2x1",
  //   type: "mentor",
  //   title: "Web Dev Lead at MLSAKIIT",
  //   // icon: "superpeer",
  //   promotion: "Aug'23 - Present",
  //   // oldPrice: "$100",
  //   // price: "$50",
  //   buttonLink: "https://superpeer.com/makrdev/-/nextjs-mentor",
  // },
  // {
  //   layout: "2x1",
  //   type: "mentor",
  //   title: "Next.js Mentorship",
  //   icon: "superpeer",
  //   promotion: "MAKRDEVFELLOWS",
  //   oldPrice: "$100",
  //   price: "$50",
  //   buttonLink: "https://superpeer.com/makrdev/-/nextjs-mentor",
  // },
  // {
  //   layout: "2x1",
  //   type: "mentor",
  //   title: "Next.js Mentorship",
  //   icon: "superpeer",
  //   promotion: "MAKRDEVFELLOWS",
  //   oldPrice: "$100",
  //   price: "$50",
  //   buttonLink: "https://superpeer.com/makrdev/-/nextjs-mentor",
  // },
  // {
  //   layout: "2x1",
  //   type: "mentor",
  //   title: "Next.js Mentorship",
  //   icon: "superpeer",
  //   promotion: "MAKRDEVFELLOWS",
  //   oldPrice: "$100",
  //   price: "$50",
  //   buttonLink: "https://superpeer.com/makrdev/-/nextjs-mentor",
  // },
  // {
  //   layout: "2x1",
  //   type: "mentor",
  //   title: "Supabase Mentorship",
  //   icon: "superpeer",
  //   promotion: "MAKRDEVFELLOWS",
  //   // oldPrice: "$100",
  //   price: "$50",
  //   liveLink: "github.com/amaan-bhati",
  //   buttonLink: "https://superpeer.com/makrdev/-/supabase-mentor",
  // },
  // {
  //   layout: "2x1",
  //   type: "project",
  //   title: "makrAI",
  //   icon: "github",
  //   color: "#070707",
  //   buttonLink: "https://github.com/batuhanbilginn/makr-ai",

  //   stars: 73,
  // },
  // {
  //   layout: "2x2",
  //   type: "social",
  //   title: "Full-stack Multilingual Blog with Next.js 13",
  //   username: "@batuhanbilginn",
  //   description:
  //     "Learn how to build a full-stack, multilingual and high performant blog website with Next.js 13.4 and Directus.",
  //   icon: "udemy",
  //   buttonTitle: "Enroll",
  //   buttonSecondaryText: "%90 OFF",
  //   buttonLink:
  //     "https://www.udemy.com/course/nextjs13-fullstack-blog-seo-internationalization/?couponCode=MAKRDEVFELLOWS2",
  // },
  // {
  //   layout: "2x2",
  //   type: "social",
  //   title: "Full-stack Multilingual Blog with Next.js 13",
  //   username: "@batuhanbilginn",
  //   description:
  //     "Learn how to build a full-stack, multilingual and high performant blog website with Next.js 13.4 and Directus.",
  //   icon: "udemy",
  //   buttonTitle: "Enroll",
  //   buttonSecondaryText: "%90 OFF",
  //   buttonLink:
  //     "https://www.udemy.com/course/nextjs13-fullstack-blog-seo-internationalization/?couponCode=MAKRDEVFELLOWS2",
  // },
  // {
  //   layout: "2x1",
  //   type: "project",
  //   title: "AI Blog Post Generator",
  //   icon: "github",
  //   stars: 19,
  //   color: "#070707",
  //   buttonLink: "https://github.com/batuhanbilginn/ai-blog-post-generator",
  // },
];

export const siteConfig = {
  creator: "Amaan Bhati",
  title: "Web/Software Developer",
  
  bio: "Aspiring software engineer with early experience in professional web development. I create interactive, user-friendly websites and crave a software engineering role to leverage my web dev experience. Also a tech enthusiast hence, connect on socials if you wanna talk about modern web dev frameworks, libraries and best practices or anything related to tech in general! Recruiters, let's connect - my skills can be your asset!",
  location: "Bangalore, India",
  
  email: "amaanbhati49@gmail.com",
  items: GridItems,
  
} as const;
