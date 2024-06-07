import React from "react";
import { HeaderBar, ProfileSection } from "@/components/fragements";

export default function HomePage() {
  return (
    <>
      <HeaderBar />
      <div className="w-[100%] mt-[80px] mx-auto sm:w-[60%]  p-5">
        <ProfileSection />
      </div>
    </>
  );
}
