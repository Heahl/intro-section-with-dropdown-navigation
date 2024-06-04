import React, { useState } from "react";
import Image from "next/image";
// Local Imports
import Dropdown from "@/components/Dropdown";
import MobileMenu from "@/components/MobileMenu";

export const MenuBar = () => {
  const [dropdownStates, setDropdownStates] = useState<Record<string, boolean>>(
    {},
  );

  const getDropdownState = (title: string) => dropdownStates[title] ?? false;

  const handleDropdownClick = (title: string) => {
    setDropdownStates((prevState) => {
      const newState = Object.keys(prevState).reduce(
        (acc, key) => {
          acc[key] = false;
          return acc;
        },
        {} as Record<string, boolean>,
      );

      newState[title] = true;

      return newState;
    });
  };

  return (
    <div className="fixed top-0 z-10 flex h-20 w-full items-center justify-between bg-almost-white p-6 md:justify-start">
      <Image src={"/images/logo.svg"} width={100} height={100} alt="Logo" />
      <div className="flex w-full items-center justify-between">
        <div className="ml-20 hidden items-center gap-8 md:flex">
          <Dropdown
            title="Features"
            listItems={["Todo List", "Calendar", "Reminders", "Planning"]}
            icons
            position="left-[120px] top-16"
            onClick={() => handleDropdownClick("Features")}
            isOpen={getDropdownState("Features")}
          />
          {/* eslint-disable-next-line dot-notation */}
          <Dropdown
            title="Company"
            listItems={["History", "Our Team", "Blog"]}
            position="left-[300px] top-16"
            onClick={() => handleDropdownClick("Company")}
            isOpen={getDropdownState("Company")}
          />
          <button className="text-almost-black/50 hover:text-almost-black">
            Careers
          </button>
          <button className="text-almost-black/50 hover:text-almost-black">
            About
          </button>
        </div>
        <div className="flex w-72 items-center justify-end gap-4">
          <button className="h-12 w-full rounded-2xl px-4 hover:bg-almost-black/10">
            Log In
          </button>
          <button className="h-12 w-full rounded-2xl border-2 border-almost-black px-4 hover:bg-almost-black/10">
            Register
          </button>
        </div>
        <MobileMenu />
      </div>
    </div>
  );
};

export default MenuBar;
