import React from "react";
import about1 from "../assets/about1.png"; // Make sure to replace this path with the correct path to your image file

const About = () => {
  return (
    <div className="py-[200px] px-4 flex flex-col items-center">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
        About MUPSY.{" "}
      </h2>
      <div className="bg-white rounded-lg p-6 max-w-4xl flex flex-col gap-[30px] tab:flex-row items-center">
        <div className="w-60 h-60 tab:w-50 tab:h-64 mb-4 tab:mb-0 tab:mr-6 flex-shrink-0">
          <img
            src={about1}
            alt="Director"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div>
          <h3 className="flex felx-row text-xl font-bold text-pink-400 mb-2">
            <p className="text-sm pr-4">대표원장</p> 김 소 연
          </h3>
          <p className="text-gray-700 mb-4">
            Dr. John Doe is the founder and chief director of our clinic. With
            over 20 years of experience in the medical field, Dr. Doe is
            committed to providing the best care possible. He has a background
            in both traditional and modern medical practices, ensuring a
            holistic approach to patient care.
          </p>
          <p className="text-gray-700">
            Under his leadership, our clinic has grown to become a leading
            provider of healthcare services in the region. Dr. Doe's passion for
            medicine and dedication to his patients is evident in everything he
            does. Outside of work, he enjoys spending time with his family and
            staying active in the community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
