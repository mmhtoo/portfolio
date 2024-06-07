import {
  BrainCircuit,
  Contact,
  GraduationCap,
  PanelsTopLeft,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const MENUS = [
  {
    id: "1",
    label: "Profile",
    href: "/#profile",
    Icon: User,
  },
  {
    id: "2",
    label: "Education",
    href: "/#education",
    Icon: GraduationCap,
  },
  {
    id: "3",
    label: "Experiences",
    href: "/#experience",
    Icon: BrainCircuit,
  },
  {
    id: "4",
    label: "Projects",
    href: "/#projects",
    Icon: PanelsTopLeft,
  },
  {
    id: "5",
    label: "Contacts",
    href: "/#contacts",
    Icon: Contact,
  },
];

export default function HeaderBar() {
  return (
    <section
      id="section"
      className="w-[100%]  px-3 pb-5 md:pb-5 fixed z-10 bottom-0  md:bottom-[90%] md:top-0 flex  justify-center bg-white items-center"
    >
      <header className="bg-white bg-[url('/images/particles.png')] shadow border border-neutral-100 rounded-full md:rounded-2xl mt-5 ">
        <ul className="flex  items-center justify-center gap-1 md:gap-3">
          {MENUS.map((menu) => (
            <Link href={menu.href} key={menu.id}>
              <li
                className="hover:cursor-pointer flex gap-2 items-center text-[14px] py-2 px-4 transition-all hover:font-medium hover:bg-neutral-100 rounded-2xl leading-loose"
                key={menu.id}
              >
                <menu.Icon className="md:w-[16px] md:h-[16px] " />
                <h3 className="hidden md:block">{menu.label}</h3>
              </li>
            </Link>
          ))}
        </ul>
      </header>
    </section>
  );
}
