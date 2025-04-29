export interface Achievement {
  title: string;
  description: string;
  type: 'award' | 'code';
}

export const achievementsData: Achievement[] = [
  {
    title: "1st Place in Deutsche Bank's AI-in-Fintech Hackathon",
    description: "Won first place for building a market risk app with real-time monitoring.",
    type: "award",
  },
  {
    title: "Solved 500+ Coding Questions",
    description: "Completed over 500 coding questions on different platforms and 350+ DSA questions on LeetCode.",
    type: "code",
  },
  {
    title: "JEE Advanced 2022",
    description: "Secured a rank under 7000 out of over 150,000 participants in JEE Advanced 2022 examination organized by IIT Bombay.",
    type: "award",
  },
  {
    title: "IMO 2020 Gold Medalist",
    description: "Attained a zonal rank of 425 in Maharashtra and Goa region and school rank 1 in IMO 2020 exam conducted by SOF.",
    type: "award",
  },
];