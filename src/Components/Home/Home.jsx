import React from "react";
import avatar from "../../assets/avataaars.svg";

export default function Home() {
  return (
    <>
      <header className="bg-teal-500 min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center text-white gap-y-7">
          <img src={avatar} alt="avatar" className="w-3xs" />
          <h1 className="font-bold text-5xl">START FRAMEWORK</h1>

          <div className="star">
            <i className="fa-solid fa-star text-xl"></i>
          </div>

          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </header>
    </>
  );
}
