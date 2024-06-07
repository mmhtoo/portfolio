import {
  Contact,
  Facebook,
  Github,
  Heart,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import React from "react";
import { Separator } from "../ui/separator";

const CONTACT_INFOS = [
  {
    id: "1",
    label: "Github",
    href: "https://github.com/mmhtoo",
    Icon: Github,
  },
  {
    id: "2",
    label: "LinkedIn",
    href: "",
    Icon: Linkedin,
  },
  {
    id: "3",
    label: "Facebook",
    href: "",
    Icon: Facebook,
  },
  {
    id: "4",
    label: "Mail",
    href: "mailto:mmhtoo.dev@gmail.com",
    Icon: Mail,
  },
  {
    id: "5",
    label: "+959758353726",
    href: "tel:09758353726",
    Icon: Phone,
  },
];

export default function ContactSection() {
  return (
    <section id="contacts" className="w-[100%] pb-[100px] md:pb-0 p-5">
      <div className="mb-2 flex flex-col gap-2 items-center">
        <h3 className="text-[16px]  md:text-[20px] flex gap-2 items-center font-medium">
          <Contact width={26} height={26} className="font-medium" /> Contacts
        </h3>
        <span className="md:ext-[16px] text-[14px] text-neutral-500">
          Contact Informations to connect me
        </span>
      </div>
      <ul className=" flex flex-col pt-5 pb-10 gap-3 ">
        {CONTACT_INFOS.map((contact) => {
          return (
            <li key={contact.id} className="w-[150px]  mx-auto">
              <a className="flex items-center gap-1" href={contact.href}>
                <contact.Icon width={16} height={16} />
                <span>{contact.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <Separator />
      <div className="flex justify-center mt-5">
        <h6 className="flex text-neutral-600 items-center gap-2">
          Created By myominhtoo with{" "}
          <Heart width={16} height={16} className="mt-1 text-purple-500" />{" "}
        </h6>
      </div>
    </section>
  );
}
