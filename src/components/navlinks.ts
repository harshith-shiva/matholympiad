export interface NavLink {
  text: string;
  link: string;
  isBlank?: boolean;
  isLive?: boolean; // for Results (or similar conditional links)
}

export const navLinks: NavLink[] = [
  { text: "PSG TECH", link: "https://www.psgtech.edu", isBlank: true },

  { text: "Home", link: "#" },

  {
    text: "Seating Arrangement",
    link: "/assets/docs/seating-arrangement.xlsx",
    isBlank: true,
     isLive: false, 
  },

  {
    text: "Brochure",
    link: "/assets/docs/brochure_2026.pdf",
    isBlank: true,
  },

  {
    text: "Syllabus",
    link: "/assets/docs/MathOlympiad_2026_syllabus.pdf",
    isBlank: true,
  },

  {
    text: "Instructions",
    link: "/assets/docs/InstructionsforStudents.pdf",
    isBlank: true,
  },

  {
    text: "Prize Pool",
    link: "https://drive.google.com/file/d/1CgrJcjLdOAgx9bM3_ktObkhOgKYSJflL/view?usp=share_link",
    isBlank: true,
  },

  {
    text: "Register here",
    link: "#Register Here",
  },

  {
    text: "Results",
    link: "/assets/docs/results.pdf", 
    isBlank: true,
    isLive: false, 
  },
];
