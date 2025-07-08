"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Cocacola from "../../../public/assets/images/png/cocacola-logo.png";
import CoatOfArm from "../../../public/assets/images/png/coatofarm.png";
import NB from "../../../public/assets/images/png/nb-logo.png";
import Nipco from "../../../public/assets/images/png/nipco-logo.png";
import AquaRapha from "../../../public/assets/images/png/aqua-rapha-logo.png";
import Image from "next/image";

const clientLogos = [Cocacola, CoatOfArm, NB, Nipco, AquaRapha];

export const OurClient = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".logo-track", {
        xPercent: -50,
        repeat: -1,
        ease: "linear",
        duration: 20,
      });
    }, scrollRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden py-10" ref={scrollRef}>
      <h1 className="text-center uppercase text-[#04359C] font-semibold font-raleway text-3xl">
        Our Clients
      </h1>

      <div className="w-full mt-10">
        <div className="flex logo-track whitespace-nowrap">
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] min-w-[200px] md:min-w-[250px] lg:min-w-[280px] h-[168px] mx-4 rounded-[28px] flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Client logo ${index}`}
                className="h-auto max-h-[100px] w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
