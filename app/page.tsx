import React from "react";
import {
  ContactSection,
  EducationSection,
  ExperienceSection,
  ProfileSection,
} from "@/components/fragements";

export default function HomePage() {
  return (
    <>
      <div className="w-[100%] mt-[80px] mx-auto sm:w-[60%] p-1 md:p-5">
        {/* profile section */}
        <ProfileSection />
        {/* education section */}
        <EducationSection />
        {/* professional experience section */}
        <ExperienceSection />
        {/* contacts section */}
        <ContactSection />
      </div>
    </>
  );
}
