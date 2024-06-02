import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import main2 from "../assets/main2.png";

const Section2 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="p-10 tab:p-20 flex flex-col gap-20 tab:flex-row tab:place-content-between">
      <motion.div
        ref={ref}
        className="order-2 tab:order-1 flex flex-col gap-10 justify-center"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        <div className="font-bold text-xl">이달의 메이크업</div>
        <p>
          이달의 메이크업이달의 메이크업이달의 메이크업이달의 메이크업이달의
          메이크업이달의 메이크업이달의 메이크업이달의 메이크업
        </p>
      </motion.div>
      <motion.div
        className="order-1 tab:order-2 w-full tab:max-w-[500px] rounded-lg"
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        }}
      >
        <img
          className="rounded-xl w-full h-auto max-w-full tab:max-w-[500px]"
          src={main2}
          alt="1"
        />
      </motion.div>
    </div>
  );
};

export default Section2;
