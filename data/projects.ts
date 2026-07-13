export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  challenges: string[];
  improvements: string[];
};

export const projects: Project[] = [
  {
    slug: "petnest",
    title: "PetNest",
    description: "A comprehensive pet adoption platform that connects animals in need with loving families. Features a user-friendly interface for browsing available pets and a streamlined adoption process.",
    image: "/images/petNest.png",
    stack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    liveUrl: "https://petnest-client.vercel.app",
    githubUrl: "https://github.com/fardinSanjida/petnest-client",
    challenges: [
      "Implementing a robust search and filter system for various pet categories and locations.",
      "Managing complex state transitions during the multi-step adoption application process.",
      "Ensuring real-time updates for pet availability to prevent double applications."
    ],
    improvements: [
      "Integrate a real-time chat system between potential adopters and shelters.",
      "Add an AI-driven matching system to recommend pets based on user lifestyle.",
      "Implement a donation gateway to support local animal shelters directly."
    ],
  },
  {
    slug: "booknest",
    title: "BookNest",
    description: "A digital library and bookstore application that allows users to explore a vast collection of books, manage their reading lists, and discover new titles through curated categories.",
    image: "/images/bookNest.png",
    stack: ["React", "React Router", "Tailwind CSS", "Context API"],
    liveUrl: "https://mango-booknest.vercel.app",
    githubUrl: "https://github.com/fardinSanjida/mango-bookstall",
    challenges: [
      "Optimizing the performance of large book lists with efficient rendering techniques.",
      "Creating an intuitive and responsive navigation system for deep-nested book categories.",
      "Handling persistent storage of user's personal reading lists and favorites."
    ],
    improvements: [
      "Add a 'Read Sample' feature using a PDF viewer integration.",
      "Implement user reviews and a star-rating system for books.",
      "Integrate a global book API for automatic metadata and cover image fetching."
    ],
  },
  {
    slug: "keenkeeper",
    title: "KeenKeeper",
    description: "KeenKeeper is a responsive friendship dashboard designed to help users maintain meaningful relationships. It tracks contact frequency, reviews interaction history, and allows for quick check-ins directly from a friend's detail page.",
    image: "/images/keenkeeper.png",
    stack: ["React 19", "Vite", "Tailwind CSS", "DaisyUI", "Recharts", "React Router"],
    liveUrl: "https://fardin-keenkeeper.netlify.app",
    githubUrl: "https://github.com/fardinSanjida/fardin-keeper",
    challenges: [
      "Implementing dynamic charting with Recharts to visualize interaction frequency over time.",
      "Designing a responsive dashboard that remains functional and intuitive on mobile devices using DaisyUI.",
      "Managing complex state for friend lists and interaction logs using React's latest features."
    ],
    improvements: [
      "Add automated push notifications for scheduled check-ins and birthdays.",
      "Implement a backend with Firebase or Node.js for persistent data synchronization across devices.",
      "Integrate contact imports from major social platforms to streamline friend setup."
    ],
  },
];
