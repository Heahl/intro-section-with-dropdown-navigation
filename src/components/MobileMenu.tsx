import React, { useState } from "react";
import Image from "next/image";

export const MenuIcon: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [featuresMobileOpen, setFeaturesMobileOpen] = useState(false);
  const [companyMobileOpen, setCompanyMobileOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleFeaturesMobile = () => {
    setFeaturesMobileOpen(!featuresMobileOpen);
  };

  const toggleCompanyMobile = () => {
    setCompanyMobileOpen(!companyMobileOpen);
  };

  // Styles
  const accordionListStyles = "grid grid-cols-6 w-full cursor-pointer gap-4";
  const accordionIconStyles = "col-span-1 grid h-6 w-auto";
  const accordionBtnStyles = "col-span-5 grid text-start";

  return (
    <>
      <div className="md:hidden">
        <button
          className={`relative h-full w-16 items-center justify-center`}
          onClick={toggleMenu}
        >
          <div
            className={`flex transform items-center justify-center transition-all duration-500 ease-in-out ${menuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
          >
            <Image
              className="block h-6 w-auto md:hidden"
              src={"/images/icon-menu.svg"}
              width={100}
              height={100}
              alt="Menu Icon"
            />
          </div>
        </button>
        {menuOpen && (
          <div
            className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50"
            onClick={toggleMenu}
          />
        )}
        <div
          className={`fixed bottom-0 right-0 top-0 transition-transform duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"} z-30 bg-white`}
          style={{ width: "280px" }}
          onClick={() => {
            if (featuresMobileOpen) {
              toggleFeaturesMobile();
            } else if (companyMobileOpen) {
              toggleCompanyMobile();
            }
          }}
        >
          <button onClick={toggleMenu}>
            <Image
              src={"/images/icon-close-menu.svg"}
              width={24}
              height={24}
              alt="Close Menu Icon"
              className="absolute right-5 top-5 h-8 w-8"
            />
          </button>
          <div className="mt-[25%] flex flex-col items-start pl-6 text-xl font-light tracking-wider">
            <div
              className="mb-3 flex cursor-pointer items-center justify-start gap-4"
              onClick={toggleFeaturesMobile}
            >
              <button>Features</button>
              {!featuresMobileOpen ? (
                <Image
                  src={"/images/icon-arrow-down.svg"}
                  width={10}
                  height={10}
                  alt="Down Arrow"
                />
              ) : (
                <Image
                  src={"/images/icon-arrow-up.svg"}
                  width={10}
                  height={10}
                  alt="Up Arrow"
                />
              )}
            </div>
            {featuresMobileOpen ? (
              <div className="ml-6 flex max-h-screen w-full flex-col gap-4 overflow-hidden transition-all duration-500 ease-in-out">
                <div className={`${accordionListStyles}`}>
                  <Image
                    className={`${accordionIconStyles}`}
                    src={"/images/icon-todo-list.svg"}
                    width={10}
                    height={10}
                    alt="List Icon"
                  />
                  <button className={`${accordionBtnStyles}`}>Todo List</button>
                </div>
                <div className={`${accordionListStyles}`}>
                  <Image
                    className={`${accordionIconStyles}`}
                    src={"/images/icon-calendar.svg"}
                    width={10}
                    height={10}
                    alt="List Icon"
                  />
                  <button className={`${accordionBtnStyles}`}>Calendar</button>
                </div>
                <div className={`${accordionListStyles}`}>
                  <Image
                    className={`${accordionIconStyles}`}
                    src={"/images/icon-reminders.svg"}
                    width={10}
                    height={10}
                    alt="List Icon"
                  />
                  <button className={`${accordionBtnStyles}`}>Reminders</button>
                </div>
                <div className={`${accordionListStyles}`}>
                  <Image
                    className={`${accordionIconStyles}`}
                    src={"/images/icon-planning.svg"}
                    width={10}
                    height={10}
                    alt="List Icon"
                  />
                  <button className={`${accordionBtnStyles}`}>Planning</button>
                </div>
              </div>
            ) : (
              <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out" />
            )}
            <div
              className="my-3 flex cursor-pointer items-center justify-start gap-4"
              onClick={toggleCompanyMobile}
            >
              <button>Company</button>
              {!companyMobileOpen ? (
                <Image
                  src={"/images/icon-arrow-down.svg"}
                  width={10}
                  height={10}
                  alt="Down Arrow"
                />
              ) : (
                <Image
                  src={"/images/icon-arrow-up.svg"}
                  width={10}
                  height={10}
                  alt="Up Arrow"
                />
              )}
            </div>
            {companyMobileOpen ? (
              <div className="mb-4 mt-2 flex max-h-screen w-full flex-col items-start gap-4 overflow-hidden pl-6 transition-all duration-500 ease-in-out">
                <button>History</button>
                <button>Our Team</button>
                <button>Blog</button>
              </div>
            ) : (
              <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out" />
            )}
            <button className="my-3">Careers</button>
            <button className="my-3">About</button>
            <div className="mt-10 flex w-full flex-col items-center gap-4 pr-6">
              <button className="h-12 w-full rounded-2xl hover:bg-almost-black/10">
                Login
              </button>
              <button className="h-12 w-full rounded-2xl border-2 border-almost-black hover:bg-almost-black/10">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuIcon;
