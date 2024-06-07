"use client";
import React, { useState } from "react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { IExperienceHistory } from "./ExperienceSection";

export default function ExperienceHistory(experience: IExperienceHistory) {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => setIsReadMore((prev) => !prev);

  return (
    <Card
      className={cn("p-3 flex flex-col gap-1 border-l-4 border-l-black", {})}
    >
      <h6>
        {experience.timeFrom} - {experience.timeTo}
      </h6>
      <h3 className="flex text-neutral-600 gap-2 items-center md:text-[16px] text-[14px]">
        {experience.position}
        {experience.company.length > 0 && " - "}
        <a className="text-blue-500 underline hover:cursor-pointer hover:text-blue-400 transition-colors">
          {experience.company}
        </a>
      </h3>
      <p className="text-neutral-600 md:text-[14px] text-[12px]">
        <span className={cn({ "line-clamp-3": !isReadMore })}>
          {experience.previewDescription}
        </span>
        {isReadMore && <span>{experience.detailDescription}</span>}
        <span
          onClick={toggleReadMore}
          className="text-blue-500 underline hover:cursor-pointer hover:text-blue-400 transition-colors"
        >
          Read {isReadMore ? "Less" : "More"}
        </span>
      </p>
    </Card>
  );
}
