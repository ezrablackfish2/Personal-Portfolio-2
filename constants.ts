export const METADATA = {
  title: "Portfolio | Ezra Yeneneh",
  description:
    "A versatile professional with expertise spanning full-stack web and blockchain developer React | Node | Django | Solidity.",
  siteUrl: "https://ezra-react.vercel.app/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  }, 
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I am a Full Stack Web and Block Chain Developer",
  "I develop modern React websites",
  "I build Scalable Django back end APIS",
  "I develop very fast and secure Node Backend",
  "I make very Complex and Advanced Smart Contracts",
  "I design and develop beautiful UI UX figma designs",
];

export const EMAIL = "ezrayeneneh1992@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/ezra-yeneneh-a07203260/",
  github: "https://github.com/ezrablackfish2",
  medium: "https://medium.com/@ezrayeneneh1992",
  instagram: "https://www.instagram.com/ezrablackfish/",
  facebook: "https://www.facebook.com/profile.php?id=61556500766435",
  twitter: "https://twitter.com/0x_Ezra",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
	{
    name: "Steelo",
    image: "/projects/works/31-1.PNG",
    blurImage: "/projects/blur/31-1-blurred.jpg",
    description: "Full Stack Developer React | Node | Solidity",
    gradient: ["#245B57", "#004741"],
    url: "https://steelo.io/",
    tech: ["solidity", "blockchain", "metamask", "web3"],
  },
  {
    name: "Hanout Boutique",
    image: "/projects/works/hanoul.PNG",
    blurImage: "/projects/blur/hanoul-blurred.jpg",
    description: "React/Django Developer for Hanout Boutique E-commerce Site",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.hanoutboutique.com/",
    tech: ["react", "nodejs", "javascript", "postgresql",],
  },
  {
    name: "Dogue",
    image: "/projects/works/douge.PNG",
    blurImage: "/projects/blur/douge-blurred.jpg",
    description: "Full-Stack Node React Developer for DOGUE E-commerce Platform",
    gradient: ["#245B57", "#004741"],
    url: "https://www.dogue.com.au/",
    tech: ["react", "django", "python", "mysql",],
  },
{
    name: "Big Blanket",
    image: "/projects/works/bigblanket.PNG",
    blurImage: "/projects/blur/bigblanket-blurred.jpg",
    description: "Node.js Developer for Big Blanket Co E-commerce Platform",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://bigblanket.com/",
    tech: ["react", "django", "mongodb", "python"],
  },
  {
    name: "Condado",
    image: "/projects/works/candado.PNG",
    blurImage: "/projects/blur/candado-blurred.jpg",
    description: "Full Stack MERN Developer",
    gradient: ["#245B57", "#004741"],
    url: "https://condadotacos.com/",
    tech: ["react", "nodejs", "mongodb", "express", "next"],
  },
  {
    name: "Kafu Games",
    image: "/projects/works/kanu.PNG",
    blurImage: "/projects/blur/kanu-blurred.jpg",
    description: "Django Developer Backend",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://kafugames.com/en",
    tech: ["django", "python", "firebase"],
  },
  
  
  {
    name: "Vanly",
    image: "/projects/works/vanly.PNG",
    blurImage: "/projects/blur/vanly-blurred.jpg",
    description: "",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://vanly.app",
    tech: ["react", "django", "mongodb", "python"],
  },
  {
    name: "Steelo",
    image: "/projects/works/31-1.PNG",
    blurImage: "/projects/blur/31-1-blurred.jpg",
    description: "UI / UX Designer",
    gradient: ["#245B57", "#004741"],
    url: "https://www.figma.com/proto/2yj8VNO4VYM7YWkWRYJT2m/Steelo-v0.5?page-id=0%3A1&node-id=237-8244&viewport=-1368%2C69%2C0.32&t=pHOceh8I1PF4iNbu-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=237%3A8244&show-proto-sidebar=1",
    tech: ["figma"],
  },
  {
    name: "Up Vs Down",
    image: "/projects/works/27-1.PNG",
    blurImage: "/projects/blur/27-1-blurred.jpg",
    description: "Introducing UPVsDOWN: a groundbreaking NFT and ERC20 token claiming platform for our Upcoming game website",
    gradient: ["#245B57", "#004741"],
    url: "https://upvsdown.com/",
    tech: ["solidity", "blockchain", "metamask", "web3"],
  },
  {
    name: "MBD GEMZ",
    image: "/projects/works/MBD GEMZ.PNG",
    blurImage: "/projects/blur/MBD GEMZ-blurred.jpg",
    description: "NFT ERC721 solidity Smart Contract Developer",
    gradient: ["#245B57", "#004741"],
    url: "https://nft-marketplace-aggrigator-git-main-weiblocks.vercel.app/",
    tech: ["solidity", "blockchain", "metamask", "web3"],
  },
  {
    name: "ACRU",
    image: "/projects/works/acru.PNG",
    blurImage: "/projects/blur/acru-blurred.jpg",
    description: "Full Stack Blockchain developer",
    gradient: ["#245B57", "#004741"],
    url: "https://akru.co/",
    tech: ["solidity", "blockchain", "metamask", "web3"],
  },

      
    
//  {
//    name: "OpenSea",
//    image: "/projects/works/30-1.PNG",
//    blurImage: "/projects/blur/30-1-blurred.jpg",
//    description: "I have extensive experience working with OpenSea, specializing in the integration and development of SIP (Steelo Improvement Proposals).",
//    gradient: ["#245B57", "#004741"],
//    url: "https://opensea.io/",
//    tech: ["solidity", "blockchain", "metamask", "web3"],
//  },
//{
//    name: "Soundxyz",
//    image: "/projects/works/29-1.PNG",
//    blurImage: "/projects/blur/29-1-blurred.jpg",
//    description: "My contributions have enhanced Sound.xyz's protocol, facilitating seamless music rights management and monetization for artists",
//    gradient: ["#245B57", "#004741"],
//    url: "https://sound.xyz",
//    tech: ["solidity", "blockchain", "metamask", "web3"],
//  },
	
//	{
//    name: "Aave Ease",
//    image: "/projects/works/24-1.PNG",
//    blurImage: "/projects/blur/24-1-blurred.jpg",
//    description: "Aave Ease is a decentralized finance (DeFi) platform built on Ethereum, allowing users to stake and unstake ERC20 tokens securely",
//    gradient: ["#245B57", "#004741"],
//    url: "https://aave-ease.vercel.app/",
//    tech: ["solidity", "blockchain", "metamask", "web3"],
//  },
//  {
//    name: "SyncP2P",
//    image: "/projects/works/25-1.PNG",
//    blurImage: "/projects/blur/25-1-blurred.jpg",
//    description: "Decentralizing Teamwork, Unleashing Potential for Seamless Collaboration",
//    gradient: ["#245B57", "#004741"],
//    url: "https://syncp2p-hackfs.vercel.app/",
//    tech: ["solidity", "blockchain", "metamask", "web3"],
//  },
/**	{
    name: "Decentralized Course Market ",
    image: "/projects/works/23-1.PNG",
    blurImage: "/projects/blur/23-1-blurred.jpg",
    description: "Our platform promotes decentralized learning, providing a seamless marketplace for educational content.",
    gradient: ["#245B57", "#004741"],
    url: "https://eth-market-course.vercel.app/",
    tech: ["solidity", "blockchain", "metamask", "web3"],
  },
  {
    name: "NFT Market Sepolia",
    image: "/projects/works/26-1.PNG",
    blurImage: "/projects/blur/26-1-blurred.jpg",
    description: "Our project is a decentralized NFT marketplace built on Solidity and React. U",
    gradient: ["#245B57", "#004741"],
    url: "https://nft-marketplace-sepolia.vercel.app/",
    tech: ["solidity", "blockchain", "metamask", "web3"],
  },
	{
    name: "CYBERPUNK GIRL NFT COLLECTIONS",
    image: "/projects/works/10-1.PNG",
    blurImage: "/projects/blur/10-1-blurred.jpg",
    description: "With a seamless user experience,my project aims to revolutionize the digital art market, offering collectors a gateway to exclusive and verifiable digital assets.",
    gradient: ["#245B57", "#004741"],
    url: "https://cyberpunkgirl.vercel.app/",
    tech: ["solidity", "blockchain", "metamask", "web3"],
  },
  	
  {
    name: "OxygenX",
    image: "/projects/works/12-1.PNG",
    blurImage: "/projects/blur/12-1-blurred.jpg",
    description: "With an intuitive interface and robust security measures, Smart Swap Exchange revolutionizes token trading, offering a frictionless experience for all participants.",
    gradient: ["#245B57", "#004741"],
    url: "https://oxygenx-smart-contract.netlify.app/",
    tech: ["solidity", "blockchain", "metamask", "web3"],
  },
  
	{
    name: "Decentralized Casino",
    image: "/projects/works/14-1.PNG",
    blurImage: "/projects/blur/14-1-blurred.jpg",
    description: " Welcome to the future of gambling, where integrity and entertainment converge.",
    gradient: ["#245B57", "#004741"],
    url: "https://crypto-casino-chi.vercel.app/games/Roulette",
    tech: ["solidity", "blockchain", "metamask", "web3"],
  },
  	{
    name: "Smart Staking Wallet",
    image: "/projects/works/15-1.PNG",
    blurImage: "/projects/blur/15-1-blurred.jpg",
    description: " Our smart staking wallet website offers a hassle-free solution for maximizing returns on crypto investments, empowering users to grow their wealth with ease.",
    gradient: ["#245B57", "#004741"],
    url: "https://smart-staking-wallet.web.app/",
    tech: ["solidity", "blockchain", "metamask", "web3"],
  },
  {
    name: "Crowd Fund Me",
    image: "/projects/works/16-1.PNG",
    blurImage: "/projects/blur/16-1-blurred.jpg",
    description: "our website ensures transparency security and global accessibility for fundraising campaigns Smart contracts",
    gradient: ["#245B57", "#004741"],
    url: "https://crowdfundme-client.web.app/",
    tech: ["solidity", "blockchain", "metamask", "web3"],
  },
  
  {
    name: "Up Vs Down",
    image: "/projects/works/27-1.PNG",
    blurImage: "/projects/blur/27-1-blurred.jpg",
    description: "Introducing UPVsDOWN: a groundbreaking NFT Solana token claiming platform for our Upcoming game website",
    gradient: ["#245B57", "#004741"],
    url: "https://upvsdown.com/",
    tech: ["solana", "rust", "blockchain", "metamask", "web3"],
  },
  {
    name: "Star Man",
    image: "/projects/works/28-1.PNG",
    blurImage: "/projects/blur/28-1-blurred.jpg",
    description: "Starman is a cutting-edge NFT marketplace where creators can claim tokens representing their digital assets.",
    gradient: ["#245B57", "#004741"],
    url: "https://starmannft.app/",
    tech: ["solana", "rust", "blockchain", "metamask", "web3"],
  },
  {
    name: "Home Renovation Figma Design",
    image: "/projects/works/19-1.PNG",
    blurImage: "/projects/blur/19-1-blurred.jpg",
    description: " Welcome to your ultimate destination for home renovation inspiration, beautifully realized through Figma.",
    gradient: ["#245B57", "#004741"],
    url: "https://www.figma.com/file/OqIvchXAfmq3uca84Wp469/Home-Renovation-Website?type=design&node-id=246-1518&mode=design&t=riuX6jWUeAtITg7g-0",
    tech: ["figma"],
  },
  {
    name: "Food Delivery Application Figma Design",
    image: "/projects/works/20-1.PNG",
    blurImage: "/projects/blur/20-1-blurred.jpg",
    description: "Welcome to the future of food delivery, beautifully realized through Figma.",
    gradient: ["#245B57", "#004741"],
    url: "https://www.figma.com/file/mDj3PFXRugbWki5PMyfpov/Food-Delivery-Application?type=design&node-id=0-1&mode=design&t=TX5IbWStVR4rS165-0",
    tech: ["figma"],
  },
  {
    name: "Apps Me Figma Design",
    image: "/projects/works/21-1.PNG",
    blurImage: "/projects/blur/21-1-blurred.jpg",
    description: " Welcome to AppsMe, where innovation meets intuitive design, beautifully realized through Figma.",
    gradient: ["#245B57", "#004741"],
    url: "https://www.figma.com/file/wZs3CuAfTp5se2M7nGFQDD/Apps-Me-Design?type=design&node-id=0-1&mode=design&t=FoI9RAkAYt6Dlvq9-0",
    tech: ["figma"],
  },
  {
    name: "Siraq App Figma design",
    image: "/projects/works/22-1.PNG",
    blurImage: "/projects/blur/22-1-blurred.jpg",
    description: " , where delicious meals are just a tap away, beautifully realized through Figma",
    gradient: ["#245B57", "#004741"],
    url: "https://www.figma.com/file/7Kz2iGItzyQAMtw1krW0xH/Lattofato-App-UI?type=design&node-id=4-118&mode=design&t=FUEZ8ReKVvuQuiSs-0",
    tech: ["figma"],
  },
  {
    name: "Caribal Shopify Store",
    image: "/projects/works/17-1.PNG",
    blurImage: "/projects/blur/17-1-blurred.jpg",
    description: " Welcome to Caribal, where shopping meets seamless Shopify integration for an exceptional experience.",
    gradient: ["#245B57", "#004741"],
    url: "https://caribal.myshopify.com/",
    tech: ["shopify"],
  },
  {
    name: "Leishing Shopify Store",
    image: "/projects/works/18-1.PNG",
    blurImage: "/projects/blur/18-1-blurred.jpg",
    description: " Welcome to Leishing, where beauty and quality converge effortlessly on Shopify.",
    gradient: ["#245B57", "#004741"],
    url: "https://leishing.myshopify.com/",
    tech: ["shopify"],
  },
	
  {
    name: "Tondas Groceries",
    image: "/projects/works/7-1.PNG",
    blurImage: "/projects/blur/7-1-blurred.jpg",
    description: "a woocommerce integrated grocery and food eccomerce store",
    gradient: ["#245B57", "#004741"],
    url: "https://tondas.wuaze.com/",
    tech: ["wordpress", "php", "woocommerce"],
  },
  {
    name: "Sayron Preschool",
    image: "/projects/works/8-1.PNG",
    blurImage: "/projects/blur/8-1-blurred.jpg",
    description: "a children enrolling website done using wordpress and php",
    gradient: ["#245B57", "#004741"],
    url: "https://sayron.free.nf/",
    tech: ["wordpress", "php"],
  },
  {
    name: "Nifintron News",
    image: "/projects/works/9-1.PNG",
    blurImage: "/projects/blur/9-1-blurred.jpg",
    description: "a trending news website done using wordpress and php",
    gradient: ["#245B57", "#004741"],
    url: "https://ezrablackfish.rf.gd/",
    tech: ["wordpress", "php"],
  },
  {
    name: "Nsigma",
    image: "/projects/works/6-1.PNG",
    blurImage: "/projects/blur/6-1-blurred.jpg",
    description: "a UI intensified AI website done for clients to learn about data science",
    gradient: ["#245B57", "#004741"],
    url: "https://nsigma.io/",
    tech: ["react", "next", "javascript", "prisma"],
  },
  {
    name: "Shavath Mart",
    image: "/projects/works/5-1.PNG",
    blurImage: "/projects/blur/5-1-blurred.jpg",
    description: "an ecommerce product promoting website where sellers can promote thier products",
    gradient: ["#245B57", "#004741"],
    url: "https://shavathmart.com/",
    tech: ["react", "nodejs", "javascript", "postgresql", "python"],
  },
  {
    name: "EZam Ecommerce Website",
    image: "/projects/works/1-1.PNG",
    blurImage: "/projects/blur/1-1-blurred.jpg",
    description: "A fully functional Ecommerce website that checks with paypal",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://ezam-ecommerce-website-front-end.vercel.app/",
    tech: ["javascript", "react", "django", "postgresql", "python"],
  },
  {
    name: "IMDb Top 60 Video Games",
    image: "/projects/works/2-1.PNG",
    blurImage: "/projects/blur/2-1-blurred.jpg",
    description: "Rating website for top 60 most critically acclaimed video games",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://imdb-top-60-video-games-react-ezra.vercel.app/",
    tech: ["react", "django", "javascript", "python", "postgresql"],
  },
  {
    name: "School Management System",
    image: "/projects/works/4-1.PNG",
    blurImage: "/projects/blur/4-1-blurred.jpg",
    description: "a schoole management system where the admin controlls everything and sudents watch thier grade class and attendance",
    gradient: ["#245B57", "#004741"],
    url: "https://school-management-system-ezra.vercel.app/",
    tech: ["react", "nodejs", "javascript", "postgresql", "python"],
  },
  
  {
    name: "Jobber Job Portal",
    image: "/projects/works/3-1.PNG",
    blurImage: "/projects/blur/3-1-blurred.jpg",
    description: "a job finding site where clients post jobs and workers apply🚀",
    gradient: ["#245B57", "#004741"],
    url: "https://jobber-1upt.onrender.com/",
    tech: ["react", "django", "javascript", "postgresql", "python"],
  },
  **/
  
  ];

export const SKILLS = {
  frontend: [
    "solidity",
    "blockchain",
    "metamask",
    "web3",
    "solana",
    "rust",
    "figma",
    "shopify",
    "javascript",
    "php",
    "typescript",
    "wordpress",
    "react",
    "redux",
    "next",
    "material",
    "bootstrap",
    "tailwind",
    "sass",
    "html",
    "css",
  ],
  backend: [
	"solidity",
	"blockchain",
    	"metamask",
    	"web3",
	"solana",
	"rust",
	"shopify",
	"django",
	"postgresql",
	"woocommerce",
	"mysql",
	"express",
        "python",
    	"nodejs",
	"mongodb",
	"firebase",
	"prisma",
  ],
  mobile: [
	"reactnative",
	"firebase",
	"mysql",
	"postgresql",
	"mongodb",
  ],
  userInterface: ["figma", "xd"],
  other: ["git", "postman", "cpanel", "vercel", "netlify", "docker"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer (Current)",
    size: ItemSize.SMALL,
    subtitle: "Working on flipkart wholesale platform 😎",
    image: "/timeline/flipkart.svg",
    slideImage: "/timeline/flipkart.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer (freelance)",
    size: ItemSize.SMALL,
    subtitle:
      "Built solutions for employee engagement, productivity and performance 🎯",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/huminos-freelance.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Motion Graphics (freelance)",
    size: ItemSize.SMALL,
    subtitle: "Motion Graphics content for Product Launch 🚀",
    image: "/timeline/octanner.svg",
    slideImage: "/timeline/aftereffects.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.",
    image: "/timeline/dltlabs.svg",
    slideImage: "/timeline/dlt-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UX Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "First job! 🥳 Product design and development for employee engagement chatbot suite for workplace by facebook",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/huminos-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from College 🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Fitness!",
    image: "/timeline/akgec.svg",
    slideImage: "/timeline/farewell.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Student lead at SDC-SI",
    size: ItemSize.SMALL,
    subtitle:
      "Represented a team of 39 talented developers. Served different roles of leadership, project management and delivery.",
    image: "/timeline/si.svg",
    slideImage: "/timeline/si-head.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on SVG animations",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 200 students to create their first animated SVG using CSS/SMIL at PHP Workshop, SDC-SI",

    slideImage: "/timeline/svg-lecture.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Designing, IMSU",
    size: ItemSize.SMALL,
    subtitle:
      "Competed against 20+ teams for design and development of web project from scratch",
    slideImage: "/timeline/ims-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on Javascript",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 200 students for javascript fundamentals at Game Development workshop, SDC-SI",
    slideImage: "/timeline/js-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Design, ABES ACM",
    size: ItemSize.SMALL,
    subtitle:
      "Competed in web and graphic design challenge with 100+ participants.",
    slideImage: "/timeline/abes-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on Web Technologies",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 300+ students on getting started with web technologies like HTML/CSS and JS",
    slideImage: "/timeline/web-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2016",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Designing, IMSU",
    size: ItemSize.SMALL,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/timeline/ims-16.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX, Frontend Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Started journey in SDC-SI, where I learnt the fundamentals of Frontend, UI/UX, Graphic design and more...",
    image: "/timeline/si.svg",
    slideImage: "/timeline/si-start.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2014",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Recognized Themer",
    size: ItemSize.SMALL,
    subtitle:
      "Awarded as recognized themer,  Developed themes and ROMs for Xperia 2011 devices lineup with over 15k+ downloads. Featured on xda portal twice.",
    image: "/timeline/xda.svg",
    slideImage: "/timeline/xda-rt.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
