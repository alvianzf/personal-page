import picture from '../asssets/image.jpeg'
import devshore from '../asssets/logo/dev-removebg-preview.png'
import revou from '../asssets/logo/revo.webp'
import glints from '../asssets/logo/glitnts.png'
import glintsAcademy from '../asssets/logo/Glints-Academy-Logo.original.png'
import talenttribe from '../asssets/logo/talentttribe.jpeg'
import webimp from '../asssets/logo/webimp.png'

export const profile = {
  name: "Alvian Zachry Faturrahman",
  title: "Software Engineer | Recruitment Specialist | Educator",
  email: "alvianzf@gmail.com",
  github: "https://github.com/alvianzf",
  linkedin: "https://linkedin.com/in/alvianzf",
  picture: picture,
  about: `Experienced Program Manager and Technical Lead with years in software engineering and education. Proven success in leading teams, designing scalable curricula, and implementing technology solutions. Expertise in mentoring engineers and students
to meet industry standards, achieving measurable improvements in performance. Proficient in full-stack development with React.js, Node.js, Express.js, and AWS. Skilled in technical assessment design and project management, with a track record of
enhancing student outcomes and driving operational efficiency.`,

  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "PHP", "Java", "Ruby"],
    frontend: [
      "React.js",
      "Vue.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Material-UI",
    ],
    backend: ["Node.js", "Express", "Laravel", "Codeigniter", "Django", "Spring Boot", "Ruby on Rails"],
    databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "ElasticSearch", "Firestore"],
    tools: [
      "Docker",
      "Git",
      "AWS",
      "Linux",
      "Jenkins",
      "Kubernetes",
      "Algolia"
    ],
  },

  experience: [
    {
      company: "Devshore Partners, s.r.o",
      location: "Bratislava, Slovakia",
      logo: devshore,
      role: "Talent Acquisition Specialist & Regional Manager",
      period: "Oct 2023 - Present",
      description:
        "Recruited senior developers for placement in European partner companies.",
      achievements: [
        "Achieving a 60% shortlist-to-interview efficiency in the first quarter.",
        "Evaluated incoming profiles to determine their compatibility with client companies.",
        "Fostered collaboration with local hiring partners in Indonesia and Vietnam to identify potential candidates.",
        "Continuously enhanced and iterated upon the hiring assessment processes to ensure effectiveness and precision in candidate selection.",
        "Developed and iterated technical assessment processes, achieving a 50% interview-to-offer rate."
      ],
    },
    {
      company: "RevoU",
      role: "Program Manager",
      logo: revou,
      location: "Jakarta, Indonesia",
      period: "Feb 2023 – Apr 2024",
      description:
        "Lead and manage a dedicated team to continuously improve the Software Engineering program.",
      achievements: [
        "Oversee the design and development of scalable programs and curricula, integrating daily lectures, assignments, and projects to enhance students' skills.",
        "Create an experiential learning environment that empowers students to apply their knowledge through simulated real-life projects (RevoU Next).",
        "Ensure the effective delivery of the curriculum and code reviews by industry instructors and team leads.",
        "Collaborate with external hiring managers to align the curriculum with industry standards, optimising student preparation for the job market.",
        "Work with the Admission Team to refine the assessment process for applicants, ensuring a rigorous selection.",
        "Coordinate with the Career Support Team to tailor career support services, addressing the specific needs of students in the Software Engineering field.",
      ],
    },
    {
      company: "Glints",
      role: "Technical Assessment Designer",
      logo: glints,
      location: "Singapore",
      period: "Jan 2022 – Apr 2023",
      description:
        "Design and implement a comprehensive assessment system to accurately evaluate and filter high-quality Southeast Asian engineers.",
      achievements: [
        "Enhance the speed and accuracy of matching international employers with top-tier engineering talent.",
        "Develop fool-proof testing methodologies to ensure candidates meet the rigorous standards of the Glints Ecosystem.",
        "Collaborate with hiring managers and industry experts to continuously refine and improve the assessment criteria.",
        "Monitor and analyse assessment results to identify areas for improvement and ensure alignment with industry requirements.",
      ],
    },
    {
      company: "Glints Academy",
      role: "Technical Curriculum Lead",
      logo: glintsAcademy,
      location: "Singapore",
      period: "Nov 2020 – Dec 2021",
      description:
        "Implemented an Industry Trainers system, providing students with personalised mentorship and guidance.",
      achievements: [
        "Designed and developed curricula for various core products, ensuring comprehensive skill acquisition.",
        "Successfully transitioned Bootcamp models to hybrid self-paced learning formats with personalised support.",
        "Achieved high employment rates for graduates with competitive salaries through targeted curriculum design, with a 90%+ hire rate within 6 months and a median salary of 5 million IDR for fresh bootcamp graduates.",
      ],
    },
    {
      company: "Talent Tribe Asia",
      role: "Full Stack Engineer",
      logo: talenttribe,
      location: "Singapore",
      period: "Feb 2020 – Nov 2020",
      description:
        "Develop and maintain components for TalentTribe, a career platform targeting millennials.",
      achievements: [
        "Enhance existing products by implementing new features and fixing bugs to ensure optimal performance and user experience.",
        "Utilise a variety of technologies in development, including AWS, Next.js, Express.js, Firestore, Algolia, and Nginx.",
        "Set up and manage a WordPress application on AWS, including SSL configuration to ensure secure connections.",
        "Collaborate with cross-functional teams to deliver high-quality, scalable solutions.",
      ],
    },
    {
      company: "Webimp, pte. ltd.",
      role: "Software Developer",
      logo: webimp,
      location: "Singapore",
      period: "Mar 2019 – Feb 2020",
      description:
        "Developed web applications using PHP with the CodeIgniter Framework.",
      achievements: [
        "Utilised jQuery to manage front-end behaviours, consume APIs, and map data on the front-end side.",
        "Translated business processes into effective software logic, ensuring seamless operation and functionality.",
        "Contributed to the company's recognition as the best company to work for in 2019 by the Singapore Computer Society.",
      ],
      isLast: true,
    },
  ],

  education: [
    {
      degree: "Bachelor of Science in Chemistry",
      institution: "Universitas Padjadjaran",
      year: "2013",
      achievements: [
      ],
    },
  ],

  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2022",
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      year: "2021",
    },
    {
      name: "Docker Certified Associate",
      issuer: "Docker",
      year: "2020",
    },
  ],

  languages: [
    {
      language: "English",
      proficiency: "Professional Working Proficiency (TOEIC C2)",
    },
    {
      language: "Indonesian",
      proficiency: "Native",
    },
    {
      language: "Malay",
      proficiency: "Native",
    },
  ],

  projects: [
    {
      title: "TalentTribe Asia",
      description:
        "Developed a millenials targettting Job Platform",
      tags: ["NextJs", "Node.js", "PHP", "Wordpress", "AWS", "Algolia", "Firestore"],
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      // githubUrl: "https://github.com/alvianzf/erp-system",
    },
    {
      title: "Banking Integration Platform",
      description:
        "Built a secure platform for integrating multiple banking services",
      tags: ["Spring Boot", "MongoDB", "Kafka", "Kubernetes"],
      imageUrl:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/alvianzf/banking-integration",
    },
    {
      title: "E-commerce Analytics Dashboard",
      description: "Real-time analytics dashboard for e-commerce platforms",
      tags: ["Vue.js", "Express", "Redis", "ElasticSearch"],
      imageUrl:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/alvianzf/analytics-dashboard",
    },
  ],
};
