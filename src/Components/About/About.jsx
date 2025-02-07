import React from "react";

export default function About() {
  return (
    <section className="bg-teal-500 min-h-screen flex justify-center items-center text-white px-6">
      <div className="container text-center">
        {/* Title */}
        <h1 className="font-bold text-5xl">ABOUT COMPONENT</h1>

        {/* Star Icon */}
        <div className="star">
          <i className="fa-solid fa-star text-xl py-2"></i>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          <p className="max-w-xl">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>

          <p className="max-w-xl">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </section>
  );
}
