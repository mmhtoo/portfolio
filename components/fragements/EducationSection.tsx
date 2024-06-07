import React from "react";
import { cn } from "@/lib/utils";
import {
  Calendar,
  GitCommitVertical,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { Separator } from "../ui/separator";

interface IEducationHistory {
  id: string;
  label: string;
  schoolName: string;
  timeFrom: string;
  timeTo: string;
  isPresent: boolean;
  schoolLink: string;
}

const EDUCATION_HISTORIES: Array<IEducationHistory> = [
  {
    id: "1",
    label: "Japanese Language - N2",
    timeFrom: "2024 May",
    timeTo: "Present",
    isPresent: true,
    schoolName: "BS Camp Japanese Language Academy",
    schoolLink: "https://www.facebook.com/byHsuNandar?mibextid=ZbWKwL",
  },
  {
    id: "2",
    label: "ITPEC FE Class",
    timeFrom: "2023 Mar",
    timeTo: "2023 Aug",
    isPresent: false,
    schoolName: "BS Camp Japanese Language Academy",
    schoolLink: "https://www.facebook.com/byHsuNandar?mibextid=ZbWKwL",
  },
  {
    id: "3",
    label: "On Job Training - (Spring Boot & Angular)",
    timeFrom: "2022 Aug",
    timeTo: "2022 Nov",
    isPresent: false,
    schoolName: "Ace Inspiration",
    schoolLink: "https://www.facebook.com/aceinspiration?mibextid=ZbWKwL",
  },
  {
    id: "4",
    label: "Web Development with Java",
    timeFrom: "2022 Feb",
    timeTo: "2022 May",
    isPresent: false,
    schoolName: "Ace Inspiration",
    schoolLink: "https://www.facebook.com/aceinspiration?mibextid=ZbWKwL",
  },
  {
    id: "5",
    label: "Japanese Language (N5 to N3)",
    timeFrom: "2021 Jun",
    timeTo: "2022 Jun",
    isPresent: false,
    schoolName: "JLink - Japanese Langugage & Education Centre",
    schoolLink: "https://www.facebook.com/jlinkmyanmar?mibextid=ZbWKwL",
  },
  {
    id: "6",
    label: "Computer Science",
    timeFrom: "2020 Dec",
    timeTo: "2021 Mar",
    isPresent: false,
    schoolName: "University of Computer Studies,Yangon",
    schoolLink: "https://www.ucsy.edu.mm",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="bg-white">
      <div className="w-[100%] p-5">
        <div className="mb-2">
          <h3 className="text-[16px] md:text-[20px] flex gap-2 items-center font-medium">
            <GraduationCap width={26} height={26} className="font-medium" />{" "}
            Education
          </h3>
          <span className="md:ext-[16px] text-[14px] text-neutral-500">
            My Education Background
          </span>
        </div>
        <ul className="w-[100%] border-l md:ps-5 mx-auto md:border-l-0 my-5 py-3 flex flex-col  items-center">
          {EDUCATION_HISTORIES.map((education) => {
            return (
              <li
                className={cn(
                  "md:w-[80%] md:border-l w-[100%] px-5 py-5 relative ",
                )}
                key={education.id}
              >
                <GitCommitVertical
                  width={20}
                  height={20}
                  className={cn(
                    "absolute top-[40%] animate-pulse rounded-full left-[-3%] md:left-[-1.6%]  ",
                    {
                      "text-green-500": education.isPresent,
                    },
                  )}
                />
                <div className="flex flex-col gap-3">
                  <span className="text-[12px] md:text-[14px]  flex gap-2 items-center">
                    <GraduationCap width={16} height={16} />
                    {education.label}
                  </span>
                  <span className="text-[12px] md:text-[14px] text-neutral-500 flex gap-2 items-center">
                    <Calendar width={14} height={14} />
                    {education.timeFrom} - {education.timeTo}
                  </span>
                  <a href={education.schoolLink} target="_blank">
                    <span className="text-[12px] md:text-[14px] text-blue-500 hover:cursor-pointer hover:text-blue-400 underline flex gap-2 items-center">
                      <MapPin width={14} height={14} />
                      {education.schoolName}
                    </span>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
        <Separator />
      </div>
    </section>
  );
}
