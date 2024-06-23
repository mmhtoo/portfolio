import { Download, Facebook, Github, Linkedin, User } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Image from "next/image";

export const SOCIAL_PLATFORMS = [
  {
    id: "1",
    Icon: Github,
    href: "https://github.com/mmhtoo",
  },
  {
    id: "2",
    Icon: Linkedin,
    href: "www.linkedin.com/in/myo-min-htoo-380546249",
  },
  {
    id: "3",
    Icon: Facebook,
    href: "https://www.facebook.com/makhaing.makhaing.562329?mibextid=ZbWKwL",
  },
];

export default function ProfileSection() {
  return (
    <div className="w-[100%] p-5 bg-white">
      <div className="border-l-4 ps-5 py-3">
        <h1 className="text-[24px] md:text-[32px] font-medium">
          Hi, I&apos;m Myo Min Htoo!
        </h1>
        <h3 className="md:text-[16px] text-[14px]"> Web & Mobile Developer</h3>
        <ul className="flex items-center gap-5 py-1">
          {SOCIAL_PLATFORMS.map((social) => {
            return (
              <li
                className="hover:cursor-pointer hover:bg-neutral-200  p-2 rounded-full transition-all"
                key={social.id}
              >
                <a href={social.href} target="_blank">
                  <social.Icon width={16} height={16} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-[100%] my-5">
        <Image
          src={"/images/cover-image.jpeg"}
          alt="cover-image"
          width={200}
          height={200}
          className=" md:mx-0 mx-auto"
        />
      </div>
      <section className="py-3">
        <h3 className="text-[16px] md:text-[20px] mb-2 flex gap-2 items-center font-medium">
          <User className="md:w-[26px] md:h-[26px] w-[20px] h-[20px] font-medium" />{" "}
          Profile
        </h3>
        <p className="md:text-[16px] text-[14px]">
          I&apos;m from Yangon, Myanmar and 20 years old now. I&apos;ve 2 years
          experience about developing, maintaining and testing for dynamic,
          robust and scalable web applications, APIs and cross platform mobile
          development with React-Native. I&apos;m passionate to learn new
          technologies, interactive for colloboration with teammates and
          delivering my excellent experiences to enhance my business
          owners&apos; values.
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
