import React from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const MobileMenu = ({ showMenu, toggleMenu }) => {
  const show = showMenu ? "left-0" : "-left-[100%]";
  const bgShow = showMenu ? "block" : "hidden";

  return (
    <>
      <div
        className={`${bgShow} w-screen h-screen absolute top-0 left-0 z-40 bg-gray bg-opacity-50`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`${show} py-20 px-4 absolute top-0 duration-200 h-screen font-roboto bg-white md:hidden w-[70%] z-50`}
      >
        <button className="absolute top-6 right-6 text-gray text-2xl" onClick={toggleMenu}>
          <RxCross2 />
        </button>
        <div className="text-3xl flex flex-col pl-4 gap-4">
          <p className="text-3xl font-semibold text-orange font-semiboldo">App Name</p>
        </div>

        {/* <hr className="bg-lightGray my-8" /> */}

        <ul className=" pl-4 font-semibold text-gray text-xl flex flex-col gap-6 mt-16">
            <li>Our Clinics</li>
            <li>Programs</li>
            <li>Health Tracking</li>
            <li>Locker</li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;