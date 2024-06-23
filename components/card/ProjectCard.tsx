"use client";

import React, { FC, useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export interface IProjectCard {
  id: number;
  name: string;
  projectType: "personally" | "with-friends" | "commercially";
  duration: string;
  projectLink?: string;
  developedAt?: string;
  detail: string;
  companyLink?: string;
  technologies: string;
  responsibilities?: string;
  position: string;
}

export const ProjectCard: FC<IProjectCard> = ({
  name,
  developedAt,
  companyLink,
  technologies,
  position,
  duration,
  responsibilities,
  detail,
  projectLink,
  projectType,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Accordion collapsible type="single">
      <AccordionItem value="experience">
        <Card className="p-3 col-span-1 min-h-[300px] flex sm:mb-5 flex-col gap-2">
          <h3 className="text-[14px]">
            <span className=" font-semibold">Project Name:</span>{" "}
            {projectLink ? (
              <a
                className="text-blue-500 underline hover:cursor-pointer hover:text-blue-400"
                href={projectLink}
                target="_blank"
              >
                {name}
              </a>
            ) : (
              name
            )}
          </h3>
          <h3 className="text-[14px]">
            <span className="font-semibold">Position:</span> {position}
          </h3>
          <h3 className="text-[14px]">
            <span className="font-semibold">Developed at: </span>{" "}
            {companyLink ? (
              <a
                href={companyLink}
                target="_"
                className="text-blue-500 underline hover:cursor-pointer hover:text-blue-400"
              >
                {developedAt}
              </a>
            ) : (
              developedAt
            )}
          </h3>
          <h3 className="text-[14px]">
            <span className="font-semibold">Duration: </span> {duration}
          </h3>
          <h3 className="text-[14px]">
            <span className="font-semibold">Technologies: </span> {technologies}
          </h3>
          <AccordionTrigger>
            <Button
              className="text-blue-500 hover:text-blue-400"
              variant={"link"}
            >
              See More
            </Button>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              {responsibilities && (
                <h3 className="text-[14px]">
                  <span className="font-semibold">Responsibilities: </span>{" "}
                  {responsibilities}
                </h3>
              )}
              <h3 className="text-[14px]">
                <span className="font-semibold">Project Informations: </span>{" "}
                {detail}
              </h3>
            </div>
          </AccordionContent>
        </Card>
      </AccordionItem>
    </Accordion>
  );
};
