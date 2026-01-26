import React from 'react';
import { Monitor, Mic, Award, Rocket, Cpu, HeartHandshake } from 'lucide-react';

export interface Program {
  id: string;
  slug: string;
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  longDescription: string;
  color: string;
  duration: string;
  format: string;
  level: string;
  curriculum: string[];
  outcomes: string[];
}

export const programs: Program[] = [
  {
    id: '1',
    slug: 'digital-skills',
    icon: <Monitor className="h-6 w-6 text-white" />,
    title: "Digital Skills & ICT Training",
    shortDescription: "Equipping youth with essential coding, data literacy, and digital productivity skills to compete in the global economy.",
    color: "bg-blue-600",
    duration: "12 Weeks",
    format: "In-person & Online",
    level: "Beginner to Intermediate",
    longDescription: "In an increasingly digital world, technical literacy is not just an advantage—it's a necessity. Our Digital Skills & ICT Training program is designed to bridge the digital divide in Sierra Leone. We start with the fundamentals of computer usage and progress to advanced topics like web development, data analysis, and digital marketing. Students gain hands-on experience with modern tools, preparing them for remote work opportunities and the local tech job market.",
    curriculum: [
      "Computer Fundamentals & Internet Safety",
      "Microsoft Office Suite & Google Workspace Mastery",
      "Introduction to Web Development (HTML/CSS)",
      "Digital Marketing & Social Media Management",
      "Basic Graphic Design with Canva & Photoshop",
      "Freelancing 101: Upwork & Fiverr"
    ],
    outcomes: [
      "Proficiency in essential office productivity tools",
      "Ability to build and maintain basic websites",
      "Skills to manage social media for businesses",
      "Readiness for entry-level IT and administrative roles"
    ]
  },
  {
    id: '2',
    slug: 'media-journalism',
    icon: <Mic className="h-6 w-6 text-white" />,
    title: "Media, Journalism & Communication",
    shortDescription: "Training the next generation of storytellers and journalists to advocate for truth and social change.",
    color: "bg-indigo-600",
    duration: "8 Weeks",
    format: "Workshops & Field Work",
    level: "Intermediate",
    longDescription: "A healthy democracy relies on an informed citizenry and a robust press. This program empowers young Sierra Leoneans to become ethical storytellers, citizen journalists, and effective communicators. We focus on media literacy to combat misinformation, mobile journalism (MoJo) for reporting on the go, and the art of compelling storytelling to drive social change.",
    curriculum: [
      "Foundations of Ethical Journalism",
      "Mobile Journalism (MoJo): Shooting & Editing on Phones",
      "Media Law & Ethics in Sierra Leone",
      "Podcasting & Audio Storytelling",
      "Fact-Checking & Combating Misinformation",
      "Writing for the Web"
    ],
    outcomes: [
      "Create high-quality audio and video content",
      "Report news ethically and accurately",
      "Launch a podcast or blog",
      "Understand the legal landscape of media"
    ]
  },
  {
    id: '3',
    slug: 'leadership',
    icon: <Award className="h-6 w-6 text-white" />,
    title: "Leadership & Public Speaking",
    shortDescription: "Building confident leaders capable of articulating their vision and inspiring community action.",
    color: "bg-purple-600",
    duration: "6 Weeks",
    format: "Interactive Seminars",
    level: "All Levels",
    longDescription: "Leadership is about influence and service. This course helps youth discover their unique leadership style and find their voice. Through intensive public speaking drills, debate sessions, and community service projects, participants build the confidence to stand up for their beliefs and lead teams effectively.",
    curriculum: [
      "Understanding Leadership Styles",
      "Public Speaking & Presentation Mastery",
      "Emotional Intelligence & Conflict Resolution",
      "Team Building & Management",
      "Civic Engagement & Policy Advocacy",
      "Project Management Fundamentals"
    ],
    outcomes: [
      "Deliver powerful speeches with confidence",
      "Lead diverse teams effectively",
      "Resolve conflicts constructively",
      "Plan and execute community projects"
    ]
  },
  {
    id: '4',
    slug: 'entrepreneurship',
    icon: <Rocket className="h-6 w-6 text-white" />,
    title: "Entrepreneurship & Innovation",
    shortDescription: "Supporting young founders with mentorship and resources to turn ideas into sustainable businesses.",
    color: "bg-orange-500",
    duration: "16 Weeks",
    format: "Incubator Style",
    level: "Advanced",
    longDescription: "Unemployment is a major challenge, but entrepreneurship offers a path forward. This comprehensive incubator program takes participants from ideation to launch. We cover business model canvas generation, financial literacy, pitching to investors, and product development. Participants get access to mentors and potential seed funding.",
    curriculum: [
      "Ideation & Design Thinking",
      "Business Model Canvas & Lean Startup",
      "Financial Literacy & Bookkeeping",
      "Marketing & Branding Strategy",
      "Pitch Deck Creation & Public Speaking",
      "Legal Registration & Compliance"
    ],
    outcomes: [
      "A complete business plan",
      "A registered business entity",
      "A refined pitch deck for investors",
      "Access to a network of mentors"
    ]
  },
  {
    id: '5',
    slug: 'ai-tech',
    icon: <Cpu className="h-6 w-6 text-white" />,
    title: "AI & Emerging Technologies",
    shortDescription: "Demystifying Artificial Intelligence and future tech to prepare Sierra Leone for the 4th Industrial Revolution.",
    color: "bg-cyan-600",
    duration: "10 Weeks",
    format: "Online & Lab",
    level: "Intermediate",
    longDescription: "The future is powered by AI. We ensure Sierra Leonean youth are not left behind. This course provides a practical introduction to Artificial Intelligence, Machine Learning concepts, and how to use AI tools like ChatGPT, Midjourney, and data analytics platforms to boost productivity and solve local problems.",
    curriculum: [
      "Introduction to AI & Machine Learning",
      "Prompt Engineering for Generative AI",
      "AI for Business Productivity",
      "Ethics of AI",
      "Introduction to Python for Data Science",
      "Future Trends: Blockchain & IoT"
    ],
    outcomes: [
      "Understand how AI works",
      "Use AI tools to automate tasks",
      "Analyze data for insights",
      "Prepare for advanced tech careers"
    ]
  },
  {
    id: '6',
    slug: 'community-outreach',
    icon: <HeartHandshake className="h-6 w-6 text-white" />,
    title: "Community Outreach & Advocacy",
    shortDescription: "Grassroots initiatives driving positive social impact and civic engagement across the nation.",
    color: "bg-emerald-600",
    duration: "Ongoing",
    format: "Volunteer Based",
    level: "All Levels",
    longDescription: "Change happens at the grassroots level. This program is for those who want to be active changemakers. We organize health awareness campaigns, environmental cleanups, and educational drives in underserved rural areas. It's about putting values into action.",
    curriculum: [
      "Community Needs Assessment",
      "Volunteer Mobilization Strategy",
      "Fundraising for Non-Profits",
      "Stakeholder Engagement",
      "Campaign Planning & Execution",
      "Impact Measurement"
    ],
    outcomes: [
      "Experience in organizing large events",
      "Network with NGOs and government bodies",
      "Tangible impact on local communities",
      "Certificate of Service"
    ]
  }
];