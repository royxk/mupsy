import React from "react";
import { FaInstagram } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { ReactComponent as KaKaoTalk } from "../assets/kakaotalk.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";

const Reservation = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white gap-20 p-10">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          예약하기.
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Book your appointment easily
        </p>
      </div>
      <div className="mt-6 flex flex-col tab:flex-row tab:gap-20 items-center justify-center gap-10">
        <a
          href="https://pf.kakao.com/_VxkpFK"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-2 items-center justify-center"
        >
          <div className="flex text-xl font-bold mt-2">
            카카오톡
            <span className="text-yellow-400 ml-2">예약</span>
            하기
          </div>
          <div>
            <KaKaoTalk />
          </div>
          <div className="p-1 rounded-xl border-2 text-center text-black hover:bg-yellow-400">
            예약하기
          </div>
        </a>
        <a
          href="https://www.instagram.com/mup_sy/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-2 align-center items-center justify-center"
        >
          <div className="rounded-xl text-white p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-xl font-bold">
            인스타그램 문의하기
          </div>
          <div>
            <Instagram />
          </div>
          <div className="p-1 rounded-xl border-2 text-center hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white">
            예약하기
          </div>
        </a>
      </div>
    </div>
  );
};

export default Reservation;
