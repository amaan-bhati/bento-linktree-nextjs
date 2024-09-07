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
    // buttonTitle: "View Portfolio",
    buttonLink: "https://amaanbhati.tech",
    // buttonSecondaryText: "279",
    color: "#1DA1F2",
    description:
      "Built using reactjs, standing tall and responsive since the last 2 years, you'll get to know more about me. Make sure you visit!",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Linkedin",
    icon:"Linkedin",

    username: "@amaan-bhati",
    description:
      "CSE '25 || Web lead at MLSAKIIT || Web Dev intern at KIIT Digital || GSSOC'24 Mentor || Ex-Web developer and at TEDX and KIITFEST || Javascript || Reactjs || Tailwind CSS || TypeScript || Next.js || Three.js",
    color: "#1DA1F2",
    buttonTitle: "Connect",
    buttonLink: "https://www.linkedin.com/in/amaan-bhati",
    // buttonSecondaryText: "5K",
  },

  {
    layout: "1x2",
    type: "social",
    title: "Instagram",
    icon: "Instagram",
    username: "@amaanbhatiii",
    // buttonTitle: "Follow",
    // buttonSecondaryText: "44",
    color: "#f24d58",
    buttonLink: "https://instagram.com/amaanbhatiii",
    // description: "Keeps me connected with family and friends while we share memes and reels only to waste time in the name of relaxing ourselves.",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Twitter",
    icon: "twitter",
    username: "@front_end_er",
    // buttonTitle: "Follow",
    buttonLink: "https://twitter.com/front_end_er",
    // buttonSecondaryText: "279",
    color: "#1DA1F2",
    // description:
    // "Tech twitter is what keeps me updated with modern tech stacks and also keeps me entertained with technical memes and discussions.",
  },

  // {
  //   layout: "1x2",
  //   type: "social",
  //   title: "Leetcode",
  //   icon: "leetcode",
  //   username: "@amaan-bhati",
  //   // buttonTitle: "View Profile",
  //   buttonLink: "https://leetcode.com/amaanbhati",
  //   // buttonSecondaryText: "279",
  //   color: "grey",
  //   // description:
  // },

  // {
  //   layout: "1x2",
  //   type: "social",
  //   title: "Youtube",
  //   icon: "youtube",
  //   // icon: "discord",
  //   username: "@amaan-bhati",
  //   // buttonTitle: "Subscribe",
  //   buttonLink: "https://youtu.be/xvFZjo5PgG0?si=oroLylgt6dbhY8WQ",
  //   // buttonSecondaryText: "44",
  //   color: "red",
  //   // description: "Keeps me connected with family and friends while we share memes and reels only to waste time in the name of relaxing ourselves.",
  // },

  {
    layout: "2x2",
    type: "social",
    title: "Check out my Projects",
    // icon: "twitter",
    // username: "Neeche dekho",
    // buttonTitle: "View Projects",
    buttonLink: "https://github.com/amaan-bhati?tab=repositories",
    // buttonSecondaryText: "279",
    color: "#1DA1F2",
    description:
      "Visit my portfolio website to view my projects accross multiple domains using various tech stacks. From basic to advanced, all at one place.",
    // username: "Elon Musk",
  },

  {
    layout: "2x2",
    type: "social",
    title: "Blog Website",
    // icon: "twitter",
    username: "blog.amaanbhati.tech",
    // buttonTitle: "Follow",
    buttonLink: "https://blog.amaanbhati.tech",
    // buttonSecondaryText: "279",
    color: "#1DA1F2",
    description:
      "Blog site built on top of nextjs where I post blogs based on my experiences, interests, best practices and productivity.",
    // username: "Elon Musk", https://open.spotify.com/playlist/04DEjJ6oWgthgqYpFa9ULX?si=Vxw4f0-XRmCcuUpao1bNkQ&pi=EV3W6r_2RE6sW&nd=1&dlsi=65725a32417046df
  },

  {
    layout: "2x2",
    type: "social",
    title: "Spotify work mode playlist",
    icon: "spotify",
    // username: "amaan",
    // buttonTitle: "Follow",
    buttonLink:
      " https://open.spotify.com/playlist/04DEjJ6oWgthgqYpFa9ULX?si=Vxw4f0-XRmCcuUpao1bNkQ&pi=EV3W6r_2RE6sW&nd=1&dlsi=65725a32417046df",
    // buttonSecondaryText: "279",
    color: "#1DB954",
    description:
      "My very own Spotify playlist with a bunch of songs that I listen to while writing code to bring the best out of my productivity.  ",
    // username: "Elon Musk",
  },

  {
    layout: "2x4",
    type: "equipment",
    title: "SKILLS/Languages",
    image: "/8.jpg",
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
        title: "C++",
        link: "github.com/amaan-bhati",
      },
      {
        title: "C",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Python",
        link: "github.com/amaan-bhati",
      },
      {
        title: "SQL",
        link: "github.com/amaan-bhati",
      },
    ],
  },

  {
    layout: "2x4",
    type: "equipment",
    title: "SKILLS/Libraries and Frameworks",
    image: "/7.jpg",
    equipments: [
      {
        title: "React.js",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Next.js",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Redux",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Express.js",
        link: "github.com/amaan-bhati",
      },
      {
        title: "NextAuth",
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
    ],
  },

  {
    layout: "2x4",
    type: "equipment",
    title: "SKILLS/Styling Tools",
    image: "/1.jpg",
    equipments: [
      {
        title: "CSS",
        link: "github.com/amaan-bhati",
      },
      {
        title: "SCSS",
        link: "github.com/amaan-bhati",
      },
      {
        title: "TailwindCSS",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Shadcn",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Framer Motion",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Material UI",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Figma",
        link: "github.com/amaan-bhati",
      },
    ],
  },

  {
    layout: "2x4",
    type: "equipment",
    title: "SKILLS/Development tools",
    image: "/5.jpg",
    equipments: [
      {
        title: "Visual Studio",
        link: "github.com/amaan-bhati",
      },
      {
        title: "VS Code",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Wappalyzer",
        link: "github.com/amaan-bhati",
      },
      {
        title: "GIT/Github",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Bash/Shell",
        link: "github.com/amaan-bhati",
      },
     
      {
        title: "Docker",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Vercel",
        link: "github.com/amaan-bhati",
      },
    ],
  },

  {
    layout: "2x4",
    type: "equipment",
    title: "SKILLS/Database and other tools",
    image: "/8.jpg",
    equipments: [
      {
        title: "MongoDb",
        link: "github.com/amaan-bhati",
      },
      {
        title: "NeonDb",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Supabase",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Firebase",
        link: "github.com/amaan-bhati",
      },
      {
        title: "Postgress",
        link: "github.com/amaan-bhati",
      },
     
      {
        title: "AWS S3",
        link: "github.com/amaan-bhati",
      },
    ],
  },

  // {
  //   layout: "2x2",
  //   type: "social",
  //   title: "Make sure you visit again",

  //   color: "#1DA1F2",
  //   description:
  //     "I designed and developed this site in two days, it is still in progress. Hence, make sure you visit again.",
  // },

];

export const siteConfig = {
  creator: "Amaan Bhati",
  title: "Web/Software Developer",

  bio: "Aspiring software engineer with early experience in professional web development.  Also a tech enthusiast! hence, connect on socials if you wanna talk about potential opportunities, modern web dev frameworks, libraries and best practices or anything related to tech in general!",
  location: "Download Resume",

  email: "amaanbhati.tech",
  items: GridItems,
} as const;
