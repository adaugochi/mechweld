"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import { PhoneCall } from "lucide-react";
import { MapPin } from "lucide-react";


export const Footer = () => {
    const pathname = usePathname();

    const navLinks = [
        { name: "HOME", href: "/" },
        { name: "ABOUT US", href: "/about" },
        { name: "SERVICES", href: "/services" },
        { name: "MEDIA", href: "/media" },
        { name: "PROJECTS", href: "/projects" },
    ];

    return (
        <div
            className="relative bg-cover bg-center bg-[#04359C]"
            style={{ backgroundImage: `url('/assets/images/png/footer-bg.png')` }}
        >
            <div className="absolute inset-0 bg-opacity-50 z-0" />
            <div className="relative z-[1] flex flex-col py-10">
                <div className="flex flex-1 items-center">
                    <div className="w-[90%] mx-auto">
                        <div className="flex flex-col md:flex-row md:justify-between gap-6 mt-10 md:mt-0">
                            <div className="space-y-4">
                                <Link href="/">
                                    <Image
                                        src="/assets/images/svg/logo.svg"
                                        height={32}
                                        width={155}
                                        alt="mech-weld"
                                        className="transition-all duration-300 hover:scale-105"
                                    />
                                </Link>
                                <p className="text-white text-sm font-montserrat md:mt-35 mt-6">
                                    © 2025 Mech-Weld. ALL RIGHTS RESERVED
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 text-white font-montserrat my-10 md:my-0">
                                {navLinks.map(({ name, href }) => (
                                    <Link
                                        key={name}
                                        href={href}
                                        className={`transition-all duration-100 hover:scale-95`}
                                    >
                                        {name}
                                    </Link>
                                ))}
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start text-white gap-2">
                                    <Mail />
                                    <div>
                                        <p className="text-white font-montserrat">mechweldltd@yahoo.com</p>
                                        <p className="text-white font-montserrat">Info@mech-weld.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start text-white gap-2">
                                    <PhoneCall />
                                    <div>
                                        <p className="text-white font-montserrat">08034101240, 08038807313,</p>
                                        <p className="text-white font-montserrat">08038743676, 08038606044</p>
                                    </div>
                                </div>
                                <div className="flex items-start text-white gap-2">
                                    <MapPin />
                                    <div>
                                        <p className="text-white font-montserrat">1, Mech Weld Lane, opposite</p>
                                        <p className="text-white font-montserrat">NB Plc-Ama By Eke Road,</p>
                                        <p className="text-white font-montserrat">9th mile corner, Enugu.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-[1px] border-[#F5F5F5] w-full mt-12"></div>
                        <p className="text-white text-center font-medium font-montserrat mt-10">Built with 💕 by Malzatov Group</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
