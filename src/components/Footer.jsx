import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white w-full mt-auto p-10">
      <div className="container mx-auto flex flex-col  justify-between tab:flex-row">
        <div className="flex flex-col  tab:items-start">
          <h4 className="text-lg font-bold">MUPSY</h4>
          <p className="text-sm mt-2">부산광역시 부산진구 오륙빌딩 6층</p>
          <p className="text-sm mt-2">전화: 010-1234-5678</p>
          <p className="text-sm mt-2">이메일: contact@mupsy.com</p>
        </div>
        <div className="mt-4 tab:mt-0">
          <h5 className="text-md font-semibold">Follow Us</h5>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-gray-400 text-xs">
        © 2024 MUPSY. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
