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
            quote: "I can confidently say Mech-Weld Engineering is one of our most reliable and professional service providers. Their exceptional workmanship, prompt delivery, and commitment to safety have consistently supported our packaging operations. We’ve enjoyed a seamless partnership over the years, and their team’s expertise continues to add great value.",
            name: "Kunle Amao",
            position: "Packaging Manager, Nigerian Breweries, Lagos",
            image: Profile,
        },
        {
            quote: "I’m consistently impressed by MechWeld's professionalism and technical expertise. Their attention to detail, quality of work, and responsiveness set them apart in the engineering space. It’s clear they take pride in delivering lasting solutions, and they’ve earned my full trust and respect.",
            name: "Kola Abatan",
            position: "Engineering manager , Nigerian Breweries, Ibadan",
            image: Profile,
        },
        {
            quote: "Working with Mech Weld Engineering has been a standout experience. Their team brings a rare combination of skill, reliability, and integrity to every project. You can tell they are deeply committed to doing the job right the first time. In my experience, few companies match their level of dedication and technical know-how.",
            name: "Chinedu Uwajeh",
            position: "Engineering manager , Nigerian Breweries, Ama",
            image: Profile,
        },
    ];


    return (
        <>
            <div className="bg-[linear-gradient(160deg,#101010_0%,#1c2f57_54%,#0f172a_100%)]">
                <div className="w-[90%] mx-auto py-30">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <div className="uppercase text-white font-raleway font-semibold mb-2 md:mb-0 text-3xl tracking-wide fade-up">
                                Testimonials
                            </div>
                            <h2 className="text-[#d9e4ff] text-[18px] font-montserrat mt-2 fade-up-delay-1">
                                Here are a few kind words clients have to say about working with Mech-Weld
                            </h2>
                        </div>
                        <div className="hidden md:block">
                            <div className="text-white flex gap-5">
                                <button className="cursor-pointer btn-lift p-2 rounded-full border border-white/30 bg-white/10" onClick={previous}>
                                    <ArrowLeft size={40} />
                                </button>
                                <button className="cursor-pointer btn-lift p-2 rounded-full border border-white/30 bg-white/10" onClick={next}>
                                    <ArrowRight size={40} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-10">
                        <Slider ref={sliderRef} {...settings} className="testimonials-slider">
                            {testimonials.map((item, index) => (
                                <div key={index} className="h-full min-h-[400px] md:min-h-[360px]">
                                    <div className="h-full flex flex-col justify-between mx-4 border border-[#FDD028]/60 bg-[#FFFFFF] p-6 rounded-2xl shadow-[0_16px_30px_rgba(0,0,0,0.25)]">
                                        <Image src={QuoteIcon} alt="quote" />
                                        <div className="flex-grow">
                                            <p className="text-[#1A1A1A] font-montserrat text-sm mt-3 leading-7">
                                                {item.quote}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 mt-10">
                                            {/*<Image src={item.image} alt="profile" />*/}
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
