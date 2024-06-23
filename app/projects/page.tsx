import { IProjectCard, ProjectCard } from "@/components/card";
import { ContactSection } from "@/components/fragements";
import { Separator } from "@/components/ui/separator";
import { PanelsTopLeft } from "lucide-react";
import React from "react";

const PROJECTS: Array<IProjectCard> = [
  {
    id: 1,
    name: "Cloud Logger",
    projectType: "personally",
    duration: "Work In Progress",
    detail:
      "A platform for storing debug logs in centralized way to be able to manage efficiently production stage's occurances and trace informations with the easier ways.",
    technologies: "Typescript, NestJs & PostgreSQL.",
    position: "Personal Project",
    projectLink: "https://github.com/mmhtoo/cloud-logger",
    developedAt: "Personally",
  },
  {
    id: 2,
    name: "Engineer Life",
    projectType: "commercially",
    duration: "3.5 months",
    developedAt: "WeR Inc.",
    companyLink: "https://wer.co.jp",
    detail:
      "Engineer Life is a platform on whick we can create and sell tickets for sharing our experienes to other users. We can also purchase via Credit Cards and connect easily with seniors for taking mentoring sessions.",
    technologies:
      "Typescript, NestJs, React-Native, PostgreSQL, Firebase, Stripe, Docker, AWS.",
    responsibilities:
      "I was responsible for transforming requirement wire-frames into system design, implement interactive user interfaces and efficient API services, deploy on AWS Elastic BeanStalk, ECR, unit-testing and E2E testing for API. I implemented Google, Apple SignIn for React-Native App, Two-Factor Authentication with Firebase, Ticket CRUD, Share Tickets to other platform, Push-Notifications with Firebase Cloud Messaging, Deep-linking to app & Payment Features with StripeSDK.",
    position: "Remote Full Stack Developer",
  },
  {
    id: 3,
    name: "Tawwin Hinthar Online Shop",
    projectType: "commercially",
    duration: "2 months",
    detail:
      "It is a website for selling products online and to be able to manage orders easily in admin dashboard. ",
    technologies:
      "Typescript, NextJs, PostgreSQL, Firebase, Supabase & AWS S3.",
    position: "Freelance",
    projectLink: "https://www.tawwinhinthar.com",
    developedAt: "Freelance",
  },
  {
    id: 4,
    name: "Drunk Ducks",
    projectType: "commercially",
    duration: "2 months",
    detail:
      "It is a mini-wallet application for purchasing in dedicated shops which was developed by using React-Native. Users will be able to buy points, manage cards for payments and sending points to staffs. ",
    technologies: "Typescript & React-Native",
    position: "Freelance",
    projectLink: "https://www.tawwinhinthar.com",
    developedAt: "Freelance",
  },
  {
    id: 5,
    name: "SMEDB Mobile Banking App",
    projectType: "commercially",
    duration: "3 months",
    detail:
      "A mobile banking application that able to use basic mobile banking features. Most of informations are internal.",
    technologies: "Typescript & React-Native",
    position: "React-Native Developer",
    developedAt: "ACE Data Systems Ltd.",
    companyLink: "https://acedatasystems.com",
    responsibilities:
      "I worked as mobile lead developer and implement project structures, workflows, management about task assigns to junior members, share  knowledges and experiences about screen flows and developed dynamic biller screen designs. ",
  },
  {
    id: 6,
    name: "FPB Mobile Banking App",
    projectType: "commercially",
    duration: "5 months",
    detail:
      "A mobile banking application that able to use basic mobile banking features. Most of informations are internal.",
    technologies: "Typescript & React-Native",
    position: "React-Native Developer",
    developedAt: "ACE Data Systems Ltd.",
    companyLink: "https://acedatasystems.com",
    responsibilities:
      "I worked as junior mobile developer and implement developing UI designs, screen flows, secret word CAPTHA box, drag-drop feature menus like mobile phone's icon, management beneficiary, google map integration, application drawer designs and API integrations.",
  },
  {
    id: 7,
    name: "AIA Wellness",
    projectType: "commercially",
    duration: "5 months",
    detail:
      "An application which take challenges by walking and complete rewards.",
    technologies: "Java, Spring-Boot, Spring Data JPA, Spring Security & MSSQL",
    position: "Junior Software Engineers",
    developedAt: "ACE Data Systems Ltd.",
    companyLink: "https://acedatasystems.com",
    responsibilities:
      "I worked as junior software engineer and I collaborated in backend team for maintenance admin dashboard and API features. I developed role based page access control features on admin dashboard.",
  },
  {
    id: 7,
    name: "Bulletin Board",
    projectType: "with-friends",
    duration: "2 months",
    detail: "A web application which can take tasks managements like Trello.",
    technologies:
      "Java, Spring-Boot, Spring Data JPA, Spring Security & Angular.",
    position: "On Job Training",
    developedAt: "ACE Inspiration",
    companyLink: "https://www.facebook.com/aceinspiration?mibextid=ZbWKwL",
  },
  {
    id: 8,
    name: "Hexa News",
    projectType: "with-friends",
    duration: "2 months",
    detail:
      "News website that includes admin dashboard for managing news contents and read daily news.",
    technologies: "VueJs, Java, Spring Boot & MySQL.",
    position: "Student",
    developedAt: "ACE Inspiration",
    companyLink: "https://www.facebook.com/aceinspiration?mibextid=ZbWKwL",
  },
];

export default function ProjectsPage() {
  return (
    <div className="w-[100%] mt-[80px] mx-auto sm:w-[60%] p-1 md:p-5">
      <header className="p-3 sm:p-0">
        <h1 className="text-[18px] flex gap-2 items-center">
          <PanelsTopLeft className="md:w-[16px] md:h-[16px]" />
          Projects.
        </h1>
        <p className="text-neutral-600 text-[14px]">
          The projects which I developed personally, with my friends and
          internally at my worked companies.
        </p>
      </header>
      <main className="w-[100%]  p-3 my-5 grid sm:grid-cols-2 grid-cols-1 gap-5 sm:gap-3">
        {PROJECTS.map((project) => {
          return <ProjectCard {...project} key={project.id.toString()} />;
        })}
      </main>
      <Separator />
      {/* contacts section */}
      <ContactSection />
    </div>
  );
}
