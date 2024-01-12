// import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const sidebarName = ["Explore", "Trending", "Music", "Live", "Game", "Movie"];
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className=" absolute z-50  cursor-pointer top-[56.3px] transition-all h-screen  bg-white w-40 md:w-[16.5rem] drop-shadow-2xl p-2   flex flex-col overflow-y-auto">
      <ul className=" flex flex-col items-center content-center gap-3 pb-4 border-b-2 font-bold ">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <ul className=" flex flex-col items-center pb-4  border-b-2 content-center gap-3">
        <h1 className=" font-bold  p-2 ">Explore</h1>
        {sidebarName.map((item) => (
          <li key={item} className=" font-bold  p-2">
            {item}
          </li>
        ))}
      </ul>
      <ul className=" flex flex-col items-center pt-4 content-center gap-3 mb-0">
        <h1 className=" font-bold  ">You </h1>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
    </div>
  );
};

export default Sidebar;
