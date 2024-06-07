import { Download, User } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function ProfileSection() {
  return (
    <div className="w-[100%] p-5 ">
      <div className="border-l-4 ps-5">
        <h1 className="text-[24px] md:text-[32px] font-medium">
          Hi, I&apos;m Myo Min Htoo!
        </h1>
        <h3 className="md:text-[16px] text-[14px]">
          {" "}
          Web & Mobile Developer with 2 Years Experience
        </h3>
      </div>
      <section className="py-5 mt-[32px]">
        <h3 className="text-[16px] md:text-[20px] mb-2 flex gap-2 items-center font-medium">
          <User className="md:w-[26px] md:h-[26px] w-[20px] h-[20px] font-medium" />{" "}
          Profile
        </h3>
        <p className="md:text-[16px] text-[14px]">
          I&apos;m from Yangon, Myanmar and 20 years old now. Currently,
          I&apos;m working as remote fulltime web and mobile developer at{" "}
          <a
            href="https://wer.co.jp"
            className="text-blue-500 underline hover:text-blue-400 hover:transition-colors hover:cursor-pointer"
          >
            WeR Inc
          </a>
          . I&apos;ve 2 years experience about developing, maintaining and
          testing for dynamic, robust and scalable web applications, APIs and
          cross platform mobile development with React-Native. I&apos;m
          passionate to learn new technologies, interactive for colloboration
          with teammates and delivering my excellent experiences to enhance my
          business owners&apos; values.
        </p>
        <div className="w-[100%] px-8 py-10 flex justify-end ">
          <Button className="flex items-center gap-2">
            <Download width={20} height={20} className="font-bold" />
            Resume
          </Button>
        </div>
        <Separator />
      </section>
    </div>
  );
}
