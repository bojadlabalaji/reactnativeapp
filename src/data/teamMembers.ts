export interface TeamMember {
  id: number;
  name: string;
  title: string;
  profile: string;
  location: {
    name: string;
    coordinates: [number, number];
  };
  github?: string;
  linkedin?: string;
  skills: string[];
  interests: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Bojadla Balaji",
    title: "Software Developer",
    profile: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/1c84e43c-afd5-4580-9fa0-b0dddb78e92f/ea33f5ae-32da-445a-858b-4ff734576ad9.png",
    location: {
      name: "Gudem Madhavaram, India",
      coordinates: [80.47504994887694, 16.792151444341382]
    },
    github: "https://github.com/BojadlaBalaji",
    linkedin: "https://linkedin.com/in/bojadlabalaji",
    skills: ["Machine Learning", "Python", "Springboot", "J2EE", "AzureAI", "JavaScript", "Node.js", "React", "SQL"],
    interests: ["Web Development", "Deep Learning", "Cloud Computing", "Natural Language Processing"]
  },
  {
    id: 2,
    name: "Manasa Reddy Kandimalla",
    title: "Software Engineer",
    profile: "https://api.dicebear.com/9.x/avataaars/svg?seed=dsdve",
    location: {
      name: "Miriyalaguda, India",
      coordinates: [79.5625, 16.8732]
    },
    github: "https://github.com/manasareddykandimalla",
    linkedin: "https://www.linkedin.com/in/manasa-reddy-562ba91aa/",
    skills: ["Python", "Java", "SQL", "Spark", "Scala", "HTML", "CSS", "JavaScript"],
    interests: ["Big Data", "Cloud Architecture", "Data Engineering", "Software Development"]
  },
  {
    id: 3,
    name: "Sai Aasritha Challa",
    title: "Data Engineer",
    profile: "https://api.dicebear.com/9.x/avataaars/svg?seed=Valentina",
    location: {
      name: "Khammam, India",
      coordinates: [80.1514, 17.2473]
    },
    linkedin: "https://www.linkedin.com/in/sai-aasritha-challa-553110210/",
    skills: ["Python", "SQL", "Spark", "Shell Scripting", "Kafka", "Pyspark"],
    interests: ["Big Data", "Data Analysis", "Data Engineering"]
  },
  {
    id: 4,
    name: "Sri Charita Kusampudi",
    title: "Associate Software Engineer",
    profile: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sara",
    location: {
      name: "Sathupalli, India",
      coordinates: [80.8395, 17.2083]
    },
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/sri-charita-kusampudi-7b70111b3",
    skills: ["Python", "Apex", "HTML", "CSS"],
    interests: ["Software Development", "Data Engineering", "Data Analysis"]
  },
  {
    id: 5,
    name: "Pranathi Dasa",
    title: "QA Engineer",
    profile: "https://api.dicebear.com/9.x/avataaars/svg?seed=elisa",
    location: {
      name: "Secunderabad, India",
      coordinates: [78.4983, 17.4399]
    },
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/pranathi-dasa-377a99268",
    skills: ["Python", "SQL", "Selenium and Java", "XPath", "Functional Testing", "Power BI"],
    interests: ["Data Analysis", "Data Engineering"]
  },
  {
    id: 6,
    name: "Sahithi Reddy Bathula",
    title: "Software Developer",
    profile: "https://img.freepik.com/premium-vector/girl-with-shirt-that-says-it_169196-12972.jpg?semt=ais_hybrid",
    location: {
      name: "Hyderabad, India",
      coordinates: [78.4772, 17.4065]
    },
    github: "https://github.com/sahithibathula21",
    linkedin: "https://www.linkedin.com/in/sahithi-bathula-7a462723b/",
    skills: ["Java", "SQL", "Python", "HTML", "CSS", "JavaScript"],
    interests: ["Web Development", "Software Development"]
  },
  {
    id: 7,
    name: "Priyanka Logani",
    title: "Software Developer",
    profile: "https://img.freepik.com/premium-photo/young-smiling-woman-ann-avatar-3d-vector-people-character-illustration-cartoon-minimal-style_1240525-12905.jpg?w=360",
    location: {
      name: "Bhadradri Kothagudem, India",
      coordinates: [80.619736, 17.554356]
    },
    github: "https://github.com/PriyankaLogani",
    linkedin: "https://www.linkedin.com/in/priyanka-logani-a74093280/",
    skills: ["Java", "SQL", "HTML", "CSS", "JavaScript"],
    interests: ["Big Data", "Data Analysis", "Data Engineering"]
  },
  {
    id: 8,
    name: "Mythri Reddy Gaddam",
    title: "Associate Software Engineer",
    profile: "https://cgpchristou.com/wp-content/uploads/2023/12/female-avatar.png",
    location: {
      name: "Nirmal, India",
      coordinates: [78.3258888, 19.0905569]
    },
    github: "https://github.com/mythri-rdy",
    linkedin: "https://www.linkedin.com/in/mythri-reddy-gaddam/",
    skills: ["Java", "SQL", "Linux", "HTML", "CSS", "JavaScript"],
    interests: ["Web Development", "DevOps Engineering", "Software Development"]
  },
  {
    id: 9,
    name: "Hasina Shaik",
    title: "Java Developer",
    profile: "https://api.dicebear.com/7.x/avataaars/svg?seed=thor&gender=female",
    location: {
      name: "Warangal, India",
      coordinates: [79.582103, 18.018742]
    },
    github: "https://github.com/HasinaShaik",
    linkedin: "https://linkedin.com/in/hasinashaik",
    skills: ["Java", "Problem Solving", "Algorithms"],
    interests: ["Software Development", "Problem Solving", "System Design"]
  }

];