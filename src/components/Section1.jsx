import React from "react";
import main1 from "../assets/main1.png";
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <div className=" tab:p-20 flex flex-col gap-20 tab:flex-row tab:place-content-between">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full tab:max-w-[500px] rounded-lg"
      >
        <img className="rounded-xl" src={main1} alt="1" />
      </motion.div>
      <motion.div
        className="flex flex-col gap-10 justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="font-bold text-xl ">이달의 메이크업</div>
        이달의 메이크업이달의 메이크업이달의 메이크업이달의 메이크업이달의
        메이크업이달의 메이크업이달의 메이크업이달의 메이크업
      </motion.div>
    </div>
  );
};

export default Section1;
