import React, { useEffect } from "react";
import location1 from "../assets/location1.JPG";
import location2 from "../assets/location2.JPG";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LOCATION_DATA = [
  {
    title: "MUPSY 서면 본점",
    address: "123 Main Street, City, Country",
    phone: "(123) 456-7890",
    email: "",
    image: location1,
  },
  {
    title: "MUPSY 홍대점",
    address: "456 Suburb Lane, Suburb, Country",
    phone: "(987) 654-3210",
    email: "",
    image: location2,
  },
];

const Location = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="py-12 px-4 flex flex-col gap-10 items-center">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">위치.</h2>
      {LOCATION_DATA.map((location, index) => (
        <motion.button
          ref={ref}
          key={index}
          initial="hidden"
          animate={controls}
          variants={textVariants}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-[300px] tab:w-[800px] bg-white rounded-lg flex flex-col gap-1 shadow-lg p-6 mb-8 max-w-4xl">
            <h3 className="text-base tab:text-2xl font-bold text-start text-pink-400 mb-2">
              {location.title}
            </h3>
            <p className="text-xs tab:text-base text-gray-700 mb-4 text-start">
              Our main office located in the heart of the city.
            </p>
            <div className="flex flex-col tab:flex-row items-center">
              <div className="tab:w-1/2 mb-4 tab:mb-0 tab:pr-4">
                <h4 className="text-xs tab:text-base font-semibold text-gray-800">
                  Address:
                </h4>
                <p className="text-gray-600 text-xs tab:text-base">
                  {location.address}
                </p>
                <p className="text-gray-600 text-xs tab:text-base">
                  Phone: {location.phone}
                </p>
                <p className="text-gray-600 text-xs tab:text-base">
                  Email: {location.email}
                </p>
              </div>
              <div className="w-[200px] h-[100px] tab:w-[400px] tab:h-[300px]">
                <img
                  src={location.image}
                  alt={location.title}
                  className="rounded-lg shadow-md object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
};

export default Location;
