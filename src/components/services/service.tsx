"use client";

import Image from "next/image";
import DotList from "../../../public/assets/images/svg/dot-list.svg";
import DotListLeave from "../../../public/assets/images/svg/dot-list-leave.svg";
import { serviceData } from "../constants/serviceData";
import { useEffect, useRef, useState } from "react";

const ServiceListItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-2 mb-6">
        <Image src={DotList} alt="dot" />
        <p className="text-[#1A1A1A] font-montserrat">{text}</p>
    </div>
);

const SubListItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-2 mb-2">
        <Image src={DotListLeave} alt="sub-dot" />
        <p className="text-[#1A1A1A] font-montserrat">{text}</p>
    </div>
);

const ServiceCard = ({
    title,
    image,
    alt,
    points,
    reversed,
}: {
    title: string;
    image: any;
    alt: string;
    points: (string | { title: string; subpoints: string[] })[];
    reversed?: boolean;
}) => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    const imageEnterClass = isVisible
        ? "opacity-100 translate-x-0"
        : reversed
            ? "opacity-0 translate-x-16"
            : "opacity-0 -translate-x-16";

    const textEnterClass = isVisible
        ? "opacity-100 translate-x-0"
        : reversed
            ? "opacity-0 -translate-x-16"
            : "opacity-0 translate-x-16";

    return (
        <section
            ref={sectionRef}
            className={`flex flex-col-reverse ${reversed ? "md:flex-row-reverse" : "md:flex-row"
                } justify-between items-center gap-10 md:gap-20 mt-10 pb-6 ${title !== "Agro-Allied Services" ? "md:border-b-[4px] border-[#F5F5F5]" : ""
                }`}
        >
            <div className={`md:w-1/2 w-full transition-all duration-700 ease-out ${imageEnterClass}`}>
                <Image src={image} alt={alt} className="w-full" />
            </div>
            <div className={`md:w-1/2 w-full transition-all duration-700 delay-150 ease-out ${textEnterClass}`}>
                <h1 className="text-[#1A1A1A] font-semibold font-raleway text-2xl mb-6">
                    {title}
                </h1>
                {points.map((point, idx) =>
                    typeof point === "string" ? (
                        <ServiceListItem key={idx} text={point} />
                    ) : (
                        <div key={idx} className="mb-4">
                            <ServiceListItem text={point.title} />
                            <div className="ml-8">
                                {point.subpoints.map((sub, subIdx) => (
                                    <SubListItem key={subIdx} text={sub} />
                                ))}
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    );
};

export const Service = () => {
    return (
        <div className="w-[90%] lg:w-[80%] mx-auto my-20">
            <h1 className="text-[#04359C] text-3xl font-semibold font-raleway">
                Services We Offer
            </h1>

            {serviceData.map((service, index) => (
                <ServiceCard
                    key={index}
                    title={service.title}
                    image={service.image}
                    alt={service.alt}
                    points={service.points}
                    reversed={index % 2 !== 0}
                />
            ))}
        </div>
    );
};
