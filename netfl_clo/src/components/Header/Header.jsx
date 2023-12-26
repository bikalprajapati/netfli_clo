import React from "react";
import logo from "/src/assets/Netflix-Logo.svg";
import { IoMdSearch } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { ImProfile } from "react-icons/im";
import { IoMdArrowDropdown } from "react-icons/io";

const list = [
  {
    name: "Home",
    lbl: "Home",
  },
  {
    name: "TV_Shows",
    lbl: "TV",
  },
  {
    name: "Trending",
    lbl: "Trend",
  },
];

const icon = [
  {
    name: "search",
    lbl: "search",
  },
  {
    name: "bell",
    lbl: "bell",
  },
  { name: "profile", lbl: "profile" },
];

const Header = () => {
  return (
    <div className="bg-black text-[18px] font-semibold flex space-x-8 text-xs items-center h-16 px-3">
      <div className="logo ">
        <img src={logo} alt="netflix-logo" className="w-36" />
      </div>
      {list.map((lists) => (
        <label htmlFor={lists.lbl} className="text-whiteColor" key={lists.name}>
          {lists.name}
        </label>
      ))}

      <label htmlFor="Browse_By_Language" className="text-whiteColor">
        Browse By Language
      </label>

      <div className="left-header text-[20px]  absolute pr-16 space-x-8 right-0 flex gap-5 p-[5px]">
        <label htmlFor="Search" className="text-whiteColor">
          <IoMdSearch />
        </label>
        <label htmlFor="Bell" className="text-whiteColor">
          <GoBell />
        </label>
        <label htmlFor="profile" className="text-whiteColor">
          <ImProfile />
        </label>
        <label htmlFor="dropdown" className="text-whiteColor">
          <IoMdArrowDropdown />
        </label>
      </div>
    </div>
  );
};

export default Header;
