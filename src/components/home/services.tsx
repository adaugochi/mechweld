"use client";

import Slider from "react-slick"
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import MetalTreament from "../../../public/assets/images/png/metal-treatment.png"
import Consultancy from "../../../public/assets/images/png/consultancy.png"
import PipingDesign from "../../../public/assets/images/png/piping-design.png"
import PlantInstallation from "../../../public/assets/images/png/plant installation.png"
import WeldingFabrication from "../../../public/assets/images/png/welding-fabrication.png"
import CivilWorks from "../../../public/assets/images/png/civil-works.png"
import AgroServices from "../../../public/assets/images/png/agro-services.png"
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Services = () => {
    const sliderRef = useRef<Slider | null>(null);

    const next = () => sliderRef.current?.slickNext();
    const previous = () => sliderRef.current?.slickPrev();

    const settings = {
        dots: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        swipe: true,
        appendDots: (dots: React.ReactNode) => (
            <div className="flex justify-center md:hidden">
                <ul className="flex">{dots}</ul>
            </div>
        ),
        customPaging: () => (
            <div className="md:hidden">
                <button className="w-[8px] h-[8px] rounded-full bg-[#6B6D87] absolute top-[20px]"></button>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, slidesToScroll: 1, dots: true },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2, slidesToScroll: 1, dots: true },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1, slidesToScroll: 1, dots: true },
            },
        ],
    };

    const services = [
        { image: MetalTreament, category: "Metal Treatment" },
        { image: Consultancy, category: "Consultancy" },
        { image: PipingDesign, category: "Piping Designs & Installation" },
        { image: PlantInstallation, category: "Plant Installation & Maintenance" },
        { image: WeldingFabrication, category: "Welding & Fabrication" },
        { image: CivilWorks, category: "Civil Works" },
        { image: AgroServices, category: "Agro-Allied Services" },
    ]


    return (
        <section className="py-20 bg-[#04359C0D] px-4 my-10 w-full">
            <div className="w-[90%] mx-auto">
                <div className="flex justify-between items-center">
                    <div className="">
                        <div className="uppercase text-[#04359C] font-raleway font-semibold text-2xl">
                            Scope of Services
                        </div>
                        <h2 className="text-[#04359C] text-[18px] font-montserrat">
                            We take the best that exists and make it better.
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <div className="text-[#04359C] flex gap-20">
                            <button className="cursor-pointer" onClick={previous}>
                                <ArrowLeft size={40} />
                            </button>
                            <button className="cursor-pointer" onClick={next}>
                                <ArrowRight size={40} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative mt-10">
                    <Slider ref={sliderRef} {...settings} className="services-slider">
                        {services.map((service, index) => (
                            <div key={index} className="pr-4">
                                <div className="pt-2 w-full rounded-sm">
                                    <Image
                                        src={service.image}
                                        alt={service.category}
                                        width={421}
                                        height={416}
                                        className="w-full h-[416px] rounded-2xl"
                                    />
                                    <p className="text-[#1A1A1A] mt-6  font-montserrat font-semibold text-[20px]">
                                        {service.category}
                                    </p>
                                    <Link href={``}>
                                        <p className="text-[#04359C] font-montserrat text-[18px] flex gap-2 items-center">
                                            Learn More <ChevronRight size={24} />
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Custom pagination styling */}
            <style jsx global>{`
        .services-slider .slick-dots {
          display: flex !important;
          justify-content: center;
          margin-top: 20px;
        }
        .services-slider .slick-dots li {
          margin: 0 -2px;
        }
        .services-slider .slick-dots li button::before {
          font-size: 10px;
          color: #d9d9d9 !important; /* Default (Gray) */
          opacity: 1;
          transition: color 0.3s ease-in-out;
        }
        .services-slider .slick-dots li.slick-active button::before {
          color: #04359C !important; /* Active (Black) */
        }
      `}</style>
        </section>
    );
}