import React, { useState } from "react";
import Image from "next/image";

export type DropdownProps = {
  icons?: boolean;
  title: string;
  listItems: string[];
  position: string;
  onClick?: () => void;
  isOpen: boolean;
};

export const Dropdown = ({
  icons,
  title,
  listItems,
  position,
  onClick,
  isOpen,
}: DropdownProps) => {
  const fileName = (listItem: string): string => {
    const fileName = `icon-${listItem.toLowerCase().replace(/\s/g, "-")}.svg`;
    return fileName;
  };

  function toggleDropDown() {
    onClick && onClick();
  }

  // Styles
  const DropDownListStyles =
    "grid grid-cols-4 items-center w-full h-10 cursor-pointer gap-4";
  const DropDownIconStyles = "col-span-1 grid w-auto ";
  const DropDownBtnStyles = "col-span-3 grid text-start";

  return (
    <>
      <div
        className="flex cursor-pointer items-center justify-center gap-2"
        onClick={toggleDropDown}
      >
        <button className="text-almost-black/50 hover:text-almost-black">
          {title}
        </button>
        {!isOpen ? (
          <Image
            src={"/images/icon-arrow-down.svg"}
            width={10}
            height={10}
            alt="Down Arrow"
            className="text-almost-black/50 hover:text-almost-black"
          />
        ) : (
          <Image
            src={"/images/icon-arrow-up.svg"}
            width={10}
            height={10}
            alt="Up Arrow"
            className="text-almost-black/50 hover:text-almost-black"
          />
        )}
      </div>
      {isOpen ? (
        <div
          className={`fixed ${position} z-10 flex max-h-screen flex-col overflow-hidden rounded-xl bg-almost-white p-2 pb-5 transition-all duration-500 ease-in-out`}
          style={{
            boxShadow: "5px 5px 40px rgba(0, 0, 0, 0.2)",
          }}
        >
          {icons ? (
            <>
              {listItems.map((listItem) => (
                <div key={listItem} className={`${DropDownListStyles} p-4`}>
                  <Image
                    className={`${DropDownIconStyles}`}
                    src={`/images/${fileName(listItem)}`}
                    width={10}
                    height={10}
                    alt={`${listItem} Icon`}
                  />
                  <button className={`${DropDownBtnStyles}`}>{listItem}</button>
                </div>
              ))}
            </>
          ) : (
            <>
              {listItems.map((listItem) => (
                <div key={listItem} className={`${DropDownListStyles} p-4`}>
                  <button className={`${DropDownBtnStyles}`}>{listItem}</button>
                </div>
              ))}
            </>
          )}
        </div>
      ) : (
        <div
          className={`fixed max-h-0 ${position} z-0 overflow-hidden transition-all duration-500 ease-in-out`}
        />
      )}
    </>
  );
};

export default Dropdown;
