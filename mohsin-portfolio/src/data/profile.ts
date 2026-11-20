// ------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update the site.
// Data taken from the LinkedIn profile of Mohsin Ali.
// Items marked "TODO" are placeholders — replace them with real info.
// ------------------------------------------------------------------

export type SkillCategory = "Industry Knowledge" | "Tools & Technologies";

export interface Skill {
  name: string;
  category: SkillCategory;
  /** Where this skill was used (shown under the skill) */
  usedAt?: string;
}

export interface Experience {
  role: string;
  company: string;
  employmentType: string;
  start: string;
  end: string;
  location: string;
  workMode: string;
  summary: string;
  highlights: string[];
  skills: string[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export const profile = {
  name: "Mohsin Ali",
  title: "Senior Project Executive",
  company: "EurosHub",
  location: "Rawalpindi, Punjab, Pakistan",
  photo: "/profile.jpg",
  tagline:
    "Customer-focused professional helping teams deliver smooth support, organised accounts and data-driven decisions.",
  about: [
    "I am a Senior Project Executive at EurosHub, where I work on customer support operations and account management for our clients.",
    "My work sits at the point where customers, data and day-to-day operations meet. I keep accounts running smoothly, track performance in Microsoft Excel, and turn raw numbers into clear reports that help the team act quickly.",
    "I enjoy solving problems for people, keeping processes organised, and supporting clients and managers as a reliable virtual assistant.",
  ],
  // TODO: replace with your real email / phone
  email: "your.email@example.com",
  phone: "",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohsin-ali-8779652b8/",
    },
  ] as SocialLink[],
};

export const stats = [
  { value: "2+", label: "Years at EurosHub" },
  { value: "6", label: "Core skills" },
  { value: "Since 2024", label: "Senior Project Executive" },
];

export const skills: Skill[] = [
  {
    name: "Customer Service Operations",
    category: "Industry Knowledge",
    usedAt: "Senior Project Executive at EurosHub",
  },
  {
    name: "Microsoft Excel",
    category: "Tools & Technologies",
    usedAt: "Senior Project Executive at EurosHub",
  },
  {
    name: "Account Management",
    category: "Industry Knowledge",
    usedAt: "Senior Project Executive at EurosHub",
  },
  { name: "Data Analysis", category: "Tools & Technologies" },
  { name: "Virtual Assistance", category: "Industry Knowledge" },
  { name: "Customer Service", category: "Industry Knowledge" },
];

export const experience: Experience[] = [
  {
    role: "Senior Project Executive",
    company: "EurosHub",
    employmentType: "Full-time",
    start: "Feb 2024",
    end: "Present",
    location: "Punjab, Pakistan",
    workMode: "On-site",
    summary: "Customer Support",
    // TODO: edit these to describe your real day-to-day work and achievements
    highlights: [
      "Handle customer support operations and resolve client queries on time.",
      "Manage client accounts and keep communication clear and consistent.",
      "Maintain trackers and reports in Microsoft Excel for the team.",
    ],
    skills: ["Microsoft Excel", "Customer Service Operations", "Account Management"],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
