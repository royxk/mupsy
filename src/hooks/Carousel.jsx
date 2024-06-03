import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import c1 from "../assets/c1.jpeg";
import c2 from "../assets/c2.jpeg";
import c3 from "../assets/c3.jpeg";

export function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 4000 }),
  ]);

  return (
    <div className="embla overflow-hidden pt-10" ref={emblaRef}>
      <div className="flex align-middle content-center gap-10">
        <div className="min-w-0 flex-[0_0_100%] relative h-[120px] tab:h-60   ">
          <div className="absolute inset-0 flex items-center justify-center text-[45px] tab:text-[75px] text-white">
            Pretty
          </div>
          <img
            src={c1}
            className="w-full h-full object-cover rounded-xl"
            alt="c1"
          />
        </div>
        <div className="min-w-0 relative flex-[0_0_100%] w-full h-[120px] tab:h-60 ">
          <div className="absolute inset-0 flex items-center justify-center text-[45px] tab:text-[75px] text-white">
            Georgious
          </div>
          <img
            src={c2}
            className="w-full rounded-xl h-full object-cover"
            alt="c2"
          />
        </div>
        <div className="min-w-0 relative flex-[0_0_100%] w-full h-[120px] tab:h-60 ">
          <div className="absolute inset-0 flex items-center justify-center text-[45px] tab:text-[75px] text-white">
            Amazing
          </div>
          <img
            src={c3}
            className="w-full rounded-xl h-full object-cover"
            alt="c3"
          />
        </div>
      </div>
    </div>
  );
}
