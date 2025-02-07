import React from "react";
import port1 from "../../assets/poert1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";

export default function Portfolio() {
  const images = [port1, port2, port3];

  return (
    <>
      <section className="container flex items justify-center items-center flex-col mx-auto py-6">
        <div className="min-h-screen text-center">
          <h1 className="text-slate-700 font-bold text-4xl ">PORTFOLIO</h1>

          <div className="star-item">
            <div className="star2 ">
              <i className="fa-solid fa-star text-xl"></i>
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-3 gap-6">
            <div>
              <img src={port1} alt="image" className="image-item rounded-3xl" />
            </div>
            <div>
              <img src={port2} alt="image" className="image-item rounded-3xl" />
            </div>
            <div>
              <img src={port3} alt="image" className="image-item rounded-3xl" />
            </div>
            <div>
              <img src={port1} alt="image" className="image-item rounded-3xl" />
            </div>
            <div>
              <img src={port2} alt="image" className="image-item rounded-3xl" />
            </div>
            <div>
              <img src={port3} alt="image" className="image-item rounded-3xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
