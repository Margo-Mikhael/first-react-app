import React from "react";

export default function Contact() {
  return (
    <>
      <section className="flex justify-center items-center min-h-screen bg-gray-100 py-5">
        <div className="container text-center px-4">
          <h1 className="text-slate-700 font-bold text-4xl mb-6">
            CONTACT SECTION
          </h1>

          <div className="star2 mb-6">
            <i className="fa-solid fa-star text-xl"></i>
          </div>

          {/* Form */}
          <form
            action=""
            className="max-w-lg mx-auto  rounded-lg p-8 space-y-6"
          >
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="text"
              placeholder="Age"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <button className="w-full bg-teal-500 text-white py-3 rounded-2xl text-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
