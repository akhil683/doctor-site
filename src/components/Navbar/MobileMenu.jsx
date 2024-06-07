import React from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const MobileMenu = ({ showMenu, toggleMenu }) => {
  const show = showMenu ? "right-0" : "-right-[100%]";
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
        <button className="absolute top-6 left-6 text-3xl" onClick={toggleMenu}>
          <RxCross2 />
        </button>
        <div className="text-3xl text-center flex flex-col items-center justify-center gap-4">
          <p className="text-3xl text-orange font-semibold">App Name</p>
        </div>

        <hr className="bg-lightGray my-8" />

        <ul className=" pl-4 text-xl flex flex-col gap-4">
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