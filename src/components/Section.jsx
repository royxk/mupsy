import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section = ({ image, text, title, animateOnScroll, id, highlight }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && animateOnScroll) {
      controls.start("visible");
    }
  }, [controls, inView, animateOnScroll]);

  const imageVariants = animateOnScroll
    ? {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
      }
    : { opacity: 1, x: 0 };

  const textVariants = animateOnScroll
    ? {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
      }
    : { opacity: 1, y: 0 };

  const isOdd = id % 2 !== 0;

  return (
    <div className="p-10 tab:p-20 flex flex-col gap-10 tab:flex-row tab:place-content-between">
      <motion.button
        ref={ref}
        className={`w-full tab:max-w-[500px] rounded-lg  ${
          isOdd ? "tab:order-2" : "tab:order-1"
        }`}
        initial="hidden"
        animate={controls}
        variants={imageVariants}
        whileHover={{ scale: 1.05, originY: 1 }}
      >
        <img
          className="w-full object-cover h-[300px] rounded-lg"
          src={image}
          alt={title}
        />
      </motion.button>
      <motion.div
        className={`flex flex-col gap-10 justify-center ${
          isOdd ? "tab:order-1" : "tab:order-2"
        }`}
        initial="hidden"
        animate={controls}
        variants={textVariants}
      >
        <div className="font-bold text-3xl">
          {title}
          <span
            className={`bg-gradient-to-r ${
              isOdd
                ? "from-blue-200 to-cyan-200"
                : "from-fuchsia-500 to-pink-500"
            } text-transparent bg-clip-text`}
          >
            {highlight}
          </span>
        </div>
        <p>{text}</p>
      </motion.div>
    </div>
  );
};

export default Section;
