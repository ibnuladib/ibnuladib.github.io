export type ExperienceEntry = {
  role: string;
  organization: string;
  type: string;
  period: string;
  location: string;
};

export const experienceEntries = [
  {
    role: "AI Engineer",
    organization: "bKash",
    type: "Full-time",
    period: "Oct 2026 - Present",
    location: "Dhaka",
  },
  {
    role: "Research Collaborator",
    organization: "ELITE Research Lab LLC",
    type: "Part-time",
    period: "Jun 2025 - Dec 2025",
    location: "Remote",
  },
] satisfies ExperienceEntry[];
