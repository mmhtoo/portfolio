import React from "react";
import { BrainCircuit } from "lucide-react";
import { Separator } from "../ui/separator";
import ExperienceHistory from "./ExperienceHistory";

export interface IExperienceHistory {
  id: string;
  position: string;
  timeFrom: string;
  timeTo: string;
  previewDescription: string;
  detailDescription: string;
  isPresent: boolean;
  company: string;
  companyLink: string;
}

const PROFESSIONALEXPERIENCES: Array<IExperienceHistory> = [
  {
    id: "1",
    position: "Remote Full Stack Developer",
    timeFrom: "2024 Mar",
    timeTo: "Present",
    isPresent: true,
    previewDescription:
      "As a full stack developer, I'm responsible for developing web APIs, cross-platform mobile applications with React-Native, building system basic designs, deploying on AWS cloud services and testing applications.",
    detailDescription:
      "I'm currently developing Mentoring Application that focus on ticket management for taking mentoring sessions from other users.I'm specially using NestJs for developing Web APIs, React-Native for mobile applications, Jest for testing our typescript code bases, PostgreSQL for database, Firebase for authentication, cloud storage and push notifications, Stripe for secure payment gateway, Docker for containerization, AWS Elastic Bean Stalk for deployments and ECR for storing our docker images. As communication with customers, I mostly use Japanese and English.",
    company: "WeR Inc.",
    companyLink: "https://wer.co.jp",
  },
  {
    id: "2",
    position: "Freelance Developer",
    timeFrom: "2023 Jun",
    timeTo: "Present",
    isPresent: true,
    previewDescription:
      "As a freelance developer, I focus on my customers' products to launch successfully and enhance their values.I'm responsible for gathering customers' requirements, scope management, time management and cost management to be effective for customers.",
    detailDescription:
      " I can develop, maintain, test and deploy java, javascript, typescript and php based web and mobile applications. More than that, I can  also handle for server migrations and taking database backups. You can openly discuss about your business and ready to deliver my excellent experiences for your products successfully.",
    company: "",
    companyLink: "",
  },
  {
    id: "3",
    position: "Project Supervisor",
    timeFrom: "2023 Jan",
    timeTo: "2024 Feb",
    isPresent: false,
    previewDescription:
      "As a project supervisor, I was responsible for giving effective advices about students' projects to complete in the target duration and helped to structure ERD Designs, project features, explain their unfamiliar technologies and fix errors during development.",
    detailDescription:
      "I specially handled for java servlet and spring based web applications by using MySQL database and javascript as client side language. I instructed  about AJAX, Javascript's Asynchronous and Promise Nature, DOM API and RESTful APIs.",
    company: "Ace Inspiration",
    companyLink: "https://www.facebook.com/aceinspiration?mibextid=ZbWKwL",
  },
  {
    id: "4",
    position: "Junior Software Engineer",
    timeFrom: "2023 Dec",
    timeTo: "2024 Feb",
    isPresent: false,
    previewDescription:
      "As a junior software engineer, I was responsible for developing web and mobile banking applications with my senior guidelines and deploying java based web applications on VMs.",
    detailDescription:
      "I maintained AIA Wellness application that was built by using spring framework and developed Admin Dashboard Page Access Control Feature for Role-Based Authorization. And I developed FPB and SMEDB Mobile Banking Application for about 0.5 year with React-Native. I was responsible for implementing interactive user interfaces according to Figma Prototypes, integration APIs, project configurations.",
    company: "Ace Data Systems Ltd.",
    companyLink: "https://acedatasystems.com",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="p-5 bg-white">
      <div>
        <h3 className="text-[16px] md:text-[20px] flex gap-2 items-center font-medium">
          <BrainCircuit width={26} height={26} className="font-medium" />{" "}
          Professional Experiences
        </h3>
        <span className="md:ext-[16px] text-[14px] text-neutral-500">
          My Professional Experiences
        </span>
      </div>
      <ul className="w-[100%] md:w-[90%] md:ps-5 mx-auto md:border-l-0 my-5 py-3 ">
        {PROFESSIONALEXPERIENCES.map((experience) => {
          return (
            <li key={experience.id} className="my-5 ">
              <ExperienceHistory {...experience} />
            </li>
          );
        })}
      </ul>
      <Separator />
    </section>
  );
}
