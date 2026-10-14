export type Certification = {
  name: string;
  issuer: "HackerRank" | "Programming Hero";
  credentialId: string;
  skills: string[];
  verificationUrl?: string;
  certificateFile?: string;
};

export const certifications: Certification[] = [
  {
    name: "Complete Web Development",
    issuer: "Programming Hero",
    credentialId: "WEB12-0898",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Web Development",
    ],
    verificationUrl:
      "https://drive.google.com/file/d/1-Nsz8hYQokMaTrDszplEDgwykwu086IH/view?usp=drive_link",
  },
  {
    name: "Software Engineer Intern",
    issuer: "HackerRank",
    credentialId: "7A47BA00E7F1",
    skills: ["Software Development"],
  },
  {
    name: "Software Engineer",
    issuer: "HackerRank",
    credentialId: "9A6997D7346D",
    skills: ["Software Development"],
  },
  {
    name: "Frontend Developer (React)",
    issuer: "HackerRank",
    credentialId: "9215A46E2B60",
    skills: ["React.js", "Front-End Development"],
  },
  {
    name: "Node.js (Intermediate)",
    issuer: "HackerRank",
    credentialId: "421802E5F3E1",
    skills: ["Node.js"],
    certificateFile: "/certificates/nodejs_intermediate-certificate.pdf",
  },
  {
    name: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    credentialId: "7EAE1CB65D60",
    skills: ["JavaScript"],
    certificateFile: "/certificates/javascript_intermediate-certificate.pdf",
  },
  {
    name: "Node.js (Basic)",
    issuer: "HackerRank",
    credentialId: "0BF03DE42656",
    skills: ["Node.js"],
    certificateFile: "/certificates/nodejs_basic-certificate.pdf",
  },
  {
    name: "JavaScript (Basic)",
    issuer: "HackerRank",
    credentialId: "093787A55EFB",
    skills: ["JavaScript"],
    certificateFile: "/certificates/javascript_basic-certificate.pdf",
  },
  {
    name: "Cascading Style Sheets",
    issuer: "HackerRank",
    credentialId: "E71D5BB82C9B",
    skills: ["CSS"],
    certificateFile: "/certificates/css-certificate.pdf",
  },
];
