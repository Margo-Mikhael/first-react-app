import React from "react";

export default function Footer() {
  return (
    <>
      <footer
        className="bg-slate-700 text-white pt-10
      w-full"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center ">
          {/* Location */}
          <div>
            <h3 className="font-bold mb-2 text-xl">LOCATION</h3>
            <p className="text-xs mb-3">2215 John Daniel Drive</p>
            <p className="text-xs">Clark, MO 65243</p>
          </div>

          {/* Web */}
          <div>
            <h3 className="font-bold mb-2 text-xl">AROUND THE WEB</h3>

            <div className="social-media-icons space-x-4">
              <a href="#">
                <i className="fa-brands fa-facebook "></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fa-solid fa-globe"></i>
              </a>
            </div>
          </div>

          {/* Freelancer */}
          <div>
            <h3 className="text-white text-lg font-bold mb-2">
              ABOUT FREELANCER
            </h3>
            <p className="text-xs">
              Freelancer is a free-to-use, licensed Bootstrap theme created by
              Route.
            </p>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="text-center text-xs bg-gray-800 py-3 mt-10">
          <p>Copyright © Your Website {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
}
