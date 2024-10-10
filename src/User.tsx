
import { ExperienceInfo, ProjectInfo, SkillInfo, Slugs, socialLinks } from "./components/Skills/skillsinfo";

const Info = {
    name: "Hamza Ghaffar",
    stack: ["Software Engineer", "Full Stack Developer", "Competitive Programmer", "Freelancer", "Open Source Contributor"],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, delivering top-notch web applications, and providing freelance services that exceed client expectations. Let's connect and create something amazing together!"
}

const Education = [
    {
        id: 1,
        date: "Date: 2023-2025*",
        coursename: "M.SC. IN COMMUNICATION ENGINEERING",
        insitutename: "FH(Carinthia University of Applied Sciences)",
        address: "KLAGENFURT, AUSTRIA",
        courseworks: {
            coursework01: {
                title: "IOT / Web Embedded Application",
                detail:
                    "Focuses on securing web applications that are embedded within various systems and devices. It involves implementing measures to protect against cyber threats such as unauthorized access, data breaches, and malicious attacks. This field is crucial for ensuring the safety and integrity of web-based systems in diverse environments.",
                links: {
                    github: "https://www.linkedin.com/in/hamzaghaffar/",
                },
            },
            coursework02: {
                title: "Network Planning Automation and Security / Testing Framework",
                detail:
                    "Methodologies, tools, and best practices for identifying vulnerabilities, conducting security assessments, and implementing measures to mitigate risks. This framework is essential for building robust and secure software systems that withstand potential cyber threats and attacks.",
                links: {
                    github: "https://www.linkedin.com/in/hamzaghaffar/",
                },
            },
        },
        keysubjectslist: {
            keysub01: "API development for software design and architecture (FastAPI).",
            keysub02:
                "Web embedded application cybersecurity and vulnerability analysis (Linux, bash)",
            keysub03:
                "Understanding of signal processing and data transmission (Matlab)",
            keysub04: "Embedded systems development and IoT technologies",
        },
    },
    {
        id: 2,
        date: "Date: 2014-2018",
        coursename: "Bachelor of Information Technology",
        insitutename: "UOE(University of Education Lahore)",
        address: "MULTAN, PAKISTAN",
        courseworks: {
            coursework01: {
                title: "IOT / Web Embedded Application",
                detail:
                    "Focuses on securing web applications that are embedded within various systems and devices. It involves implementing measures to protect against cyber threats such as unauthorized access, data breaches, and malicious attacks. This field is crucial for ensuring the safety and integrity of web-based systems in diverse environments.",
                links: {},
            },
            coursework02: {
                title: "Network Planning Automation and Security / Testing Framework",
                detail:
                    "Methodologies, tools, and best practices for identifying vulnerabilities, conducting security assessments, and implementing measures to mitigate risks. This framework is essential for building robust and secure software systems that withstand potential cyber threats and attacks.",
                links: {},
            },
        },
        keysubjectslist: {
            keysub02:
                "Web embedded application cybersecurity and vulnerability analysis (Linux, bash)",
            keysub03:
                "Understanding of signal processing and data transmission (Matlab)",
            keysub04: "Embedded systems development and IoT technologies",
        },
    },
    {
        id: 2,
        date: "Date: 2012-2014",
        coursename: "Intermediate in Computer Science",
        insitutename: "Punjab College Mian Channu",
        address: "MULTAN, PAKISTAN",
        courseworks: {
            coursework01: {
                title: "IOT / Web Embedded Application",
                detail:
                    "Focuses on securing web applications that are embedded within various systems and devices. It involves implementing measures to protect against cyber threats such as unauthorized access, data breaches, and malicious attacks. This field is crucial for ensuring the safety and integrity of web-based systems in diverse environments.",
                links: {},
            },
            coursework02: {
                title: "Network Planning Automation and Security / Testing Framework",
                detail:
                    "Methodologies, tools, and best practices for identifying vulnerabilities, conducting security assessments, and implementing measures to mitigate risks. This framework is essential for building robust and secure software systems that withstand potential cyber threats and attacks.",
                links: {},
            },
        },
        keysubjectslist: {
            keysub02:
                "Web embedded application cybersecurity and vulnerability analysis (Linux, bash)",
            keysub03:
                "Understanding of signal processing and data transmission (Matlab)",
            keysub04: "Embedded systems development and IoT technologies",
        },
    },
];

// Rest of your components and code...

export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs, Education };
