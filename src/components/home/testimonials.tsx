"use client";

import Slider from "react-slick"
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import QuoteIcon from "../../../public/assets/images/svg/quote.svg"
import Profile from "../../../public/assets/images/png/testimonials-profile.png"

export const Testimonials = () => {

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

    const testimonials = [
        {
            quote:
                "We would love to hear from you. To find out more about what we do, or to discuss how we can work together, please reach out to us.",
            name: "John Doe",
            position: "MD, NB West Africa",
            image: Profile,
        },
        {
            quote:
                "We would love to hear from you. To find out more about what we do, or to discuss how we can work together, please reach out to us.",
            name: "John Doe",
            position: "MD, NB West Africa",
            image: Profile,
        },
        {
            quote:
                "We would love to hear from you. To find out more about what we do, or to discuss how we can work together, please reach out to us.",
            name: "John Doe",
            position: "MD, NB West Africa",
            image: Profile,
        },
        {
            quote:
                "We would love to hear from you. To find out more about what we do, or to discuss how we can work together, please reach out to us.",
            name: "John Doe",
            position: "MD, NB West Africa",
            image: Profile,
        },
        {
            quote:
                "We would love to hear from you. To find out more about what we do, or to discuss how we can work together, please reach out to us.",
            name: "John Doe",
            position: "MD, NB West Africa",
            image: Profile,
        },
        {
            quote:
                "We would love to hear from you. To find out more about what we do, or to discuss how we can work together, please reach out to us.",
            name: "John Doe",
            position: "MD, NB West Africa",
            image: Profile,
        },
    ];


    return (
        <>
            <div className="bg-[#1A1A1A]">
                <div className="w-[90%] mx-auto py-30">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <div className="uppercase text-white font-raleway font-semibold text-2xl">
                                Testimonials
                            </div>
                            <h2 className="text-white text-[18px] font-montserrat">
                                Here are a few kind words clients have to say about working with Mech-Weld
                            </h2>
                        </div>
                        <div className="hidden md:block">
                            <div className="text-white flex gap-20">
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
                        <Slider ref={sliderRef} {...settings} className="testimonials-slider">
                            {testimonials.map((item, index) => (
                                <div key={index} className="h-full min-h-[400px] md:min-h-[360px]">
                                    <div className="h-full flex flex-col justify-between mx-4 border-2 border-[#FDD028] bg-[#FFFFFF] p-6 rounded-2xl">
                                        <Image src={QuoteIcon} alt="quote" />
                                        <div className="flex-grow">
                                            <p className="text-[#1A1A1A] font-montserrat text-sm">
                                                {item.quote}
                                            </p>
                                            <p className="text-[#1A1A1A] font-montserrat text-sm mt-2">
                                                {item.quote}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 mt-10">
                                            <Image src={item.image} alt="profile" />
                                            <div>
                                                <h4 className="text-[#1A1A1A] font-bold text-[18px] font-montserrat">
                                                    {item.name}
                                                </h4>
                                                <p className="text-[#808080] text-[18px] font-montserrat">
                                                    {item.position}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </Slider>

                    </div>
                </div>
                <style jsx global>{`
        .testimonials-slider .slick-dots {
          display: flex !important;
          justify-content: center;
          margin-top: 20px;
        }
        .testimonials-slider .slick-dots li {
          margin: 0 -2px;
        }
        .testimonials-slider .slick-dots li button::before {
          font-size: 10px;
          color: #d9d9d9 !important; /* Default (Gray) */
          opacity: 1;
          transition: color 0.3s ease-in-out;
        }
        .testimonials-slider .slick-dots li.slick-active button::before {
          color: #FDD028 !important; /* Active (Black) */
        }
      `}</style>
            </div>
        </>
    )
}