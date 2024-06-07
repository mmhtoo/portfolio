import React from "react";

const MENUS = [
  {
    id: "1",
    label: "Profile",
    href: "",
  },
  {
    id: "2",
    label: "Education",
    href: "",
  },
  {
    id: "3",
    label: "Experience",
    href: "",
  },
  {
    id: "4",
    label: "Projects",
    href: "",
  },
  {
    id: "5",
    label: "Contacts",
    href: "",
  },
];

export default function HeaderBar() {
  return (
    <section
      id="section"
      className="w-[100%] px-3 pb-3 fixed z-10 top-0 flex bg-white  justify-center items-center"
    >
      <header className="bg-white px-5 shadow border border-neutral-100 rounded-2xl mt-5 ">
        <ul className="flex items-center justify-center gap-5">
          {MENUS.map((menu) => (
            <li
              className="hover:cursor-pointer text-[14px] py-2 px-4 transition-all hover:font-medium hover:bg-neutral-50 rounded-lg leading-loose"
              key={menu.id}
            >
              <h3>{menu.label}</h3>
            </li>
          ))}
        </ul>
      </header>
    </section>
  );
}
