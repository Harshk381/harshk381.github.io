// All content below comes from Harsh's resume. Edit here to update the site.
export const profile = {
  name: "Harsh Khandelwal",
  role: "Software Engineer · Test Automation (SDET)",
  location: "Pune, India",
  email: "harshkhandelwal259@gmail.com",
  linkedin: "https://www.linkedin.com/in/harsh-khandelwal3",
  github: "https://github.com/harshk381",
  summary:
    "GAQM Certified QA Automation Engineer (SDET) with 2.5+ years of experience designing and scaling test automation frameworks using Java, Selenium WebDriver and Cucumber (BDD) across enterprise banking and streaming platforms. Skilled in API test automation (Postman, REST Assured), Jenkins CI/CD integration and cross-platform quality assurance in fast-paced Agile teams. Actively extending this QA foundation into AI-assisted testing workflows using Python and GenAI tools.",
};

export const stats = [
  { value: "2.5+", label: "Years in automation" },
  { value: "300+", label: "Automated tests (Citi)" },
  { value: "200+", label: "API test cases" },
  { value: "90%", label: "Fewer critical post-release defects" },
  { value: "40%", label: "Less manual testing effort" },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Automation Testing", items: ["Selenium WebDriver", "TestNG", "Cucumber BDD/Gherkin", "JUnit", "Selenium Grid", "Hybrid & Data-Driven Frameworks", "Playwright"] },
  { group: "API Testing", items: ["Postman", "REST Assured", "API Test Automation", "Service & Contract Validation"] },
  { group: "Development & Scripting", items: ["Java", "Python", "Maven", "JDBC", "Spring Boot", "JavaScript", "Node JS", "Data Structures & Algorithms"] },
  { group: "CI/CD & DevOps", items: ["Jenkins", "GitHub", "GitHub Actions", "Bitbucket", "Git", "Autosys", "Microsoft Azure", "Linux"] },
  { group: "Manual Testing", items: ["Functional", "Regression & Sanity", "Test Planning", "Test Case Design", "Test Data Management"] },
  { group: "Test Management & Data", items: ["SQL", "MySQL", "PostgreSQL", "Jira", "Zephyr", "Qase", "Agile/Scrum"] },
  { group: "AI / GenAI Tools", items: ["Prompt Engineering", "GitHub Copilot", "ChatGPT", "Gemini", "Claude Code"] },
];

export const experience = {
  company: "LTIMindtree",
  title: "QA Automation Engineer (SDET)",
  period: "Apr 2024 – Present",
  bullets: [
    "Designed and maintained a scalable hybrid and data-driven automation framework (FAST) using Java, Selenium WebDriver, TestNG and Cucumber (BDD), increasing automated test coverage by 35% and reducing manual testing effort by 40%.",
    "Created and executed 200+ API test cases using Postman and REST Assured for end-to-end service validation, identifying integration defects 25% earlier in the release lifecycle.",
    "Configured Jenkins CI/CD pipelines integrated with Bitbucket and GitHub, automating test execution on every build with HTML Spark report archiving for full traceability.",
    "Collaborated with cross-functional Agile teams on regression, functional and sanity testing each sprint, managing defect lifecycle and test planning in Jira and Zephyr, reducing defect escape rate by 30%.",
  ],
};

export const projects = [
  {
    title: "FAST Automation Framework",
    meta: "LTIMindtree · Apr 2024 – Present",
    desc: "Scalable hybrid and data-driven framework built on Java, Selenium WebDriver, TestNG and Cucumber BDD.",
    highlights: ["+35% automated test coverage", "−40% manual testing effort"],
    tags: ["Java", "Selenium", "TestNG", "Cucumber"],
  },
  {
    title: "Citi Bank · Digital Banking Platform",
    meta: "QA Automation Engineer · Aug 2024 – Jan 2026",
    desc: "300+ automated test cases for a high-traffic banking platform with Jenkins CI/CD and structured HTML Spark reports per release.",
    highlights: ["−40% manual test cycles", "−90% critical post-release defects"],
    tags: ["Selenium Grid", "Maven", "Jenkins", "Bitbucket"],
  },
  {
    title: "BritBox (BBC Studios) · Streaming Platform",
    meta: "QA Engineer · Feb 2026 – Present",
    desc: "End-to-end regression, functional and sanity cycles for a streaming app across 7 countries on web and Smart TV; 100+ backend API endpoints validated.",
    highlights: ["Zero critical defects per regional launch", "100+ API endpoints validated"],
    tags: ["Postman", "Charles Proxy", "Qase", "Jira"],
  },
  {
    title: "Made-in-China · E-Commerce Training Project",
    meta: "QA Automation Engineer · Apr – Jul 2024",
    desc: "50+ automated UI test cases with structured HTML Spark reports; ran QA sprints end-to-end in an Agile workflow.",
    highlights: ["50+ automated UI tests", "Test planning to delivery"],
    tags: ["Selenium", "Cucumber BDD", "TestNG"],
  },
];

export const certifications = [
  "GAQM Certified Professional Selenium Tester (CPST)",
  "API Testing Masterclass: Postman & REST Assured",
  "Microsoft Certified: Azure Fundamentals Badges",
  "Java Spring Framework, Spring Boot & Spring AI (GenAI)",
];

export const education = {
  degree: "Bachelor of Engineering, Computer Science and Engineering",
  school: "AISSMS College of Engineering, Pune",
  period: "Jun 2019 – Jun 2023",
  grade: "CGPA: 8.43",
};
