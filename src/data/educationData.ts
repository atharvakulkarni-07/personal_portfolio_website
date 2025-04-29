export interface Education {
  degree: string;
  grade?: string;
  institution: string;
  duration: string;
  location: string;
  courses?: string[];
  achievements?: string[];
}

export const educationData: Education[] = [
  {
    degree: "B.Tech (Aerospace Engineering)",
    grade: "8.17 CGPA",
    institution: "Indian Institute of Technology Madras",
    duration: "2022 - 2026",
    location: "Chennai, Tamil Nadu",
    courses: [
      "Introduction to Aerospace Engineering (AS2101)",
      "Series and Matrices (MA1101)",
      "Probability, Statistics and Stochastic Processes (MA2020)",
      "Design of Subsonic Aircrafts (AS5211)",
      "XFOIL",
      "XFLR5",
      "Ansys Fluent",
      "Salome Meca"
    ],
    achievements: [
      "1st Prize at DB AI-in-Fintech Hackathon",
      "Onboarded UNESCO, Startup India, Make in India as Patronages for E-Summit 2024",
    ]
  },
  {
    degree: "Higher Secondary",
    grade: "87.00%",
    institution: "JES College",
    duration: "2022",
    location: "Jalna, Maharashtra",
    courses: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Electronics",
      "English",
    ],
    achievements: [
      "Finished in top 5 in Final Board Examination in Physics with a score of 97%",
    ]
  },
  {
    degree: "Secondary",
    grade: "95.80%",
    institution: "St. Mary's High School",
    duration: "2020",
    location: "Jalna, Maharashtra",
    courses: [
      "Mathematics",
      "Science",
      "English",
      "Computer Applications",
      "Social Studies"
    ],
    achievements: [
      "Finished in top 3 in in Final Board Examination in School",
      "Scored a perfect 100% in Mathematics",
      "IMO Gold Medalist",
    ]
  }
];