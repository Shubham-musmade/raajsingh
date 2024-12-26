"use client";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import IconCloud from "@/components/ui/icon-cloud";
import ScrollProgress from "@/components/ui/scroll-progress";
// import Link from "next/link";
import React from "react";
import WordPullUp from "@/components/ui/word-pull-up";
import { WorkExp } from "@/components/pageComponents/work";
import { GithubStats } from "@/components/stats/github";
import { Skills } from "@/components/pageComponents/skills";



const slugs = [
  "typescript",
  "javascript",
  "python",
  "vectordb",
  "mysql",
  "mongodb",
  "r",
  "flask",
  "NextJS",
  "tailwind",
  "postman",
  "restapi",
  "kubernetes",
  "dart",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "docker",
  "apachekafka",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "google",
  "redis",
  "celery",
  "django",
  "linux",
  "ngrok",
  "spring",
  "remix",
];


const workExpData = [
  {
    id: 1,
    companyName: "Kwiqreply.io",
    iconSrc: "/kwiqreply.png",
    duration: "January 2024 - May 2024",
    role: "SDE Intern",
    description: "Worked on various frontend and backend tasks.",
    skills:["Python","Django","REST API","AWS","Google Cloud", "Google APIs","MySql","JS","ReactJs","Tailwind","HTML","CSS",]
  },
  {
    id: 2,
    companyName: "Kwiqreply.io",
    iconSrc: "/kwiqreply.png",
    duration: "September 2022 - August 2025",
    role: "SDE Intern",
    description: "Developed scalable solutions for chat-based systems.",
    skills:["Python","Django","REST API","AWS","MySql","HTML","CSS","Bootstrap"]
  },
  {
    id: 3,
    companyName: "Khairnar Technologies Private Limited.",
    iconSrc: "/KT.png",
    duration: "May 2022 - August 2022",
    role: "SDE Intern",
    description: "Focused on enhancing application performance.",
    skills:["Python","Django","MySql","HTML","CSS","Bootstrap"]
  },
];


const allSkills = [
  {
    id: 1,
    title: "💻 Programming Language:-",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "R"]
  },
  {
    id: 2,
    title: "🔧 Core Skills:-",
    skills: ["Data Structure", "Algorithms", "Object-oriented programming (OOP)", "DBMS", "Operating Systems"]
  },
  {
    id: 3,
    title: "🗄️ Database:-",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "VectorDB"]
  },
  {
    id: 4,
    title: "⚙️ Framework:-",
    skills: ["Django", "Flask", "NodeJS", "NextJS", "ReactJS", "ReactNative"]
  },
  {
    id: 5,
    title: "🛠️ Tools & Technologies:-",
    skills: ["GoogleAPI’s", "REST APIs", "Redis", "Celery", "Redux", "Linux", "MicroServices", "JWT", "Postman", "Docker", "Kubernetes", "Git&Github", "Ngrok", "Jira", "Tailwind", "Bootstrap", "ChartJS", "Figma"]
  },
  {
    id: 6,
    title: "☁️ Cloud & Storage:-",
    skills: ["AWS", "IBM Cloud", "SupaBase"]
  },
  {
    id: 7,
    title: "🧠 Soft Skills:-",
    skills: ["Problem-Solving", "Communication", "Critical Thinking", "Attention to Detail", "Creativity"]
  }
];



export default function Home() {
  return (
    <div className="relative md:w-8/12 w-11/12 mx-auto pt-28">
      <ScrollProgress />


      {/* Intro */}
      <div className="flex relative transition-transform duration-300 my-8 group">
          {/* Bio */}
          <div className="flex-1 mx-auto">
              <div className="md:text-4xl text-lg font-bold font-mono group-hover:glowing-text w-fit">
              <WordPullUp>
                  Hi there 👋 
              </WordPullUp>
              <WordPullUp>
                  I&apos;m Raaj Singh
              </WordPullUp>
              </div>
            <div className="md:text-base text-xs font-mono  text-gray-600">
              <Typewriter
                options={{
                  strings: ['Software Engineer','Python Developer'],
                  autoStart: true,
                  loop: true,

                }}
              />
            </div>
              
          </div>

          {/* Profile */}
          <div className="profile absolute w-28 h-28 -top-10 right-0">
            {/* <Image src="/Hello.png" alt="profile" width={100} height={350} className="z-50 relative rounded-full"/> */}
              <IconCloud iconSlugs={slugs} />
          </div>
      </div>
      <hr className=" border-gray-700 " />
        
      {/* About Me */}
      <div className="my-5">
        <div className="md:text-2xl text-xl font-bold font-mono hover:glowing-text w-fit">
          About Me 🧑‍💻
        </div>
        <br/>
        <div className=" text-xs font-mono  text-gray-600">
        
          I am a passionate Software Engineer focusing on <strong>building scalable, efficient, and user-centric applications.</strong> With hands-on experience in <strong>Python, Java, SpringBoot Django, and React</strong>, I specialize in creating seamless solutions that bridge the gap between complex backend systems and intuitive user experiences.
          <br /><br />
          From developing advanced AI tools like <strong>Docsnap AI</strong> for document summarization to <strong>crafting education platforms like BlockchainPathshala</strong>, I thrive on tackling challenging problems and delivering innovative solutions. My technical expertise spans <strong>web development, API integration, chatbot development, and automation, with a strong foundation in tools like Docker, Kubernetes, and AWS.</strong> 
          <br/><br/>
          <strong>What I Bring:</strong>
          <br/><strong>👉Proficiency:</strong> in Python, Java, JavaScript, and modern frameworks such as Django, Flask, React, and Next.js.
          <br/><strong>👉Experience</strong> with databases like PostgreSQL, MySQL, and MongoDB, ensuring robust and efficient data management.
          <br/><strong>👉A track record</strong>of delivering projects that enhance user engagement and streamline operations.
        </div>
      </div>

      <hr className=" border-gray-500 " />

      {/* WorkExp */}
      <div className="my-5">
        <div className="md:text-2xl text-xl font-bold font-mono hover:glowing-text w-fit relative flex">
          Skills 
        </div>
        <Skills AllSkills={allSkills} />
      </div>

      <hr className=" border-gray-500 " />


      {/* WorkExp */}
      <div className="my-5">
        <div className="md:text-2xl text-xl font-bold font-mono hover:glowing-text w-fit">
          Work Experience
        </div>
        <WorkExp workExp={workExpData} />
      </div>




      
      <GithubStats />
    </div>
  );
}
