import picture from '../asssets/image.jpeg'

export const profile = {
  name: "Alvian Zachry Faturrahman",
  title: "Software Engineer | Recruitment Specialist | Educator",
  email: "alvianzf@gmail.com",
  github: "https://github.com/alvianzf",
  linkedin: "https://linkedin.com/in/alvianzf",
  picture: picture,
  about: `Experienced Program Manager and Technical Lead with years in software engineering and education. Proven success in leading teams, designing scalable curricula, and implementing technology solutions. Expertise in mentoring engineers and students
to meet industry standards, achieving measurable improvements in performance. Proficient in full-stack development with React.js, Node.js, Express.js, and A WS. Skilled in technical assessment design and project management, with a track record of
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
      company: "PT. Infosys Solusi Terpadu",
      role: "Full Stack Developer",
      period: "2019 - Present",
      description:
        "Lead developer for enterprise applications, focusing on microservices architecture and cloud-native solutions.",
      achievements: [
        "Implemented microservices architecture reducing system downtime by 40%",
        "Led team of 5 developers in modernizing legacy applications",
        "Developed CI/CD pipelines improving deployment efficiency by 60%",
      ],
    },
    {
      company: "PT. Multipolar Technology, Tbk.",
      role: "Software Engineer",
      period: "2017 - 2019",
      description:
        "Developed and maintained core banking applications and payment systems.",
      achievements: [
        "Integrated multiple payment gateways processing over 1M transactions daily",
        "Optimized database queries reducing response time by 50%",
        "Implemented real-time monitoring systems for critical services",
      ],
    },
    {
      company: "PT. Sigma Cipta Caraka",
      role: "Junior Developer",
      period: "2016 - 2017",
      description: "Worked on web application development and maintenance.",
      achievements: [
        "Developed responsive web applications using React and Laravel",
        "Implemented automated testing reducing bug reports by 30%",
        "Contributed to API documentation and system architecture design",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Science in Chemistry",
      institution: "Universitas Padjadjaran",
      year: "2013",
      achievements: [
        // "Final Project: Development of Real-time Analytics Dashboard",
        // "Active member of Computer Science Student Association",
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
      proficiency: "Professional Working Proficiency",
    },
    {
      language: "Indonesian",
      proficiency: "Native",
    },
  ],

  projects: [
    {
      title: "Enterprise Resource Planning System",
      description:
        "Developed a comprehensive ERP system for manufacturing industry",
      tags: ["React", "Node.js", "PostgreSQL", "Docker"],
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/alvianzf/erp-system",
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
