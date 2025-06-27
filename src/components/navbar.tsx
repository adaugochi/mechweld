"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

interface NavProps {
    theme?: string;
}

const Navbar = ({ theme = "dark" }: NavProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const pathname = usePathname();

    const handleMobileButton = () => {
        setIsOpen(true);
    };

    useEffect(() => {
        gsap.from(buttonRef.current, {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            ease: "back.out(1.7)",
        });
    }, []);

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(
                menuRef.current,
                { x: "-100%", y: "-100%", opacity: 0 },
                { x: "0%", y: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
            );

            gsap.fromTo(
                menuItemsRef.current,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    stagger: 0.2,
                    delay: 0.2,
                    ease: "power3.out",
                }
            );
        } else {
            gsap.to(menuItemsRef.current, {
                opacity: 0,
                x: -50,
                stagger: 0.2,
                ease: "power3.in",
                onComplete: () => {
                    gsap.to(menuRef.current, {
                        x: "-100%",
                        y: "-100%",
                        opacity: 0,
                        duration: 0.2,
                        ease: "power3.in",
                    });
                },
            });
        }
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`border-b border-[#bdbbbb] ${theme === "dark" ? `${scrolled && "backdrop-blur-xl bg-[#04359C]/5"}` : "backdrop-blur-xl bg-[#04359C]/5"
                } fixed w-full top-0 z-30`}>
            <nav className="w-[90%] mx-auto bg-transparent py-5 flex justify-between items-center lg:gap-40 relative">
                <div className="w-full flex justify-between">
                    <div className="">
                        <Link
                            href="#home"
                            className="transition-all duration-300 hover:scale-105 cursor-pointer ">
                            <Image
                                src="/assets/images/svg/logo.svg"
                                height={32}
                                width={155}
                                alt="mech-weld"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex">
                        <div
                            className={`flex items-center space-x-8 font-montserrat font-bold ${theme === "dark" ? "text-white" : `text-[#656565]`
                                }`}>
                            <Link
                                href=""
                                className={`transition-all font-bold duration-100 hover:scale-95 hover:border-b text-sm ${pathname === "" &&
                                    `border-b ${theme === "dark" ? "" : "text-blue-600"}`
                                    }`}>
                                HOME
                            </Link>
                            <Link
                                href=""
                                className={`transition-all font-bold duration-100 hover:scale-95 hover:border-b text-sm ${pathname === "" &&
                                    `border-b ${theme === "dark" ? "" : "text-blue-600"}`
                                    }`}>
                                ABOUT US
                            </Link>
                            <Link
                                href="#services"
                                className={`transition-all font-bold duration-100 hover:scale-95 hover:border-b text-sm ${pathname.startsWith("") &&
                                    `border-b ${theme === "dark" ? "" : "text-blue-600"}`
                                    }`}>
                                SERVICES
                            </Link>
                            <Link
                                href="#media"
                                className={`transition-all font-bold duration-100 hover:scale-95 hover:border-b text-sm ${pathname.startsWith("") &&
                                    `border-b ${theme === "dark" ? "" : "text-blue-600"}`
                                    }`}>
                                MEDIA
                            </Link>
                            <Link
                                href="#projects"
                                className={`transition-all font-bold duration-100 hover:scale-95 hover:border-b text-sm ${pathname.startsWith("") &&
                                    `border-b ${theme === "dark" ? "" : "text-blue-600"}`
                                    }`}>
                                PROJECTS
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Link
                            href="/auth/sign-up"
                            className="bg-[#04359C] justify-center items-center gap-2 py-4 px-6 flex rounded-[64px] text-sm font-bold font-montserrat text-white ">
                            Contant US <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden cursor-pointer ${theme === "dark" ? "text-white" : "text-white"
                        } hover:scale-105 transition-all duration-300`}
                    onClick={handleMobileButton}>
                    <MenuIcon />
                </button>

                {/* Mobile Menu Overlay */}
                <div
                    ref={menuRef}
                    className="fixed top-0 left-0 w-full h-full bg-[#04359C]/5 backdrop-blur-xl flex flex-col items-start p-6 transform -translate-x-full -translate-y-full opacity-0 z-50">
                    <div className="w-full">
                        <div className="w-full flex justify-between gap-10 mt-4">
                            <Link
                                href=""
                                className="transition-all duration-300 hover:scale-105 cursor-pointer ">
                                <Image
                                    src="/assets/images/svg/logo.svg"
                                    height={32}
                                    width={155}
                                    alt="mech-weld"
                                />
                            </Link>
                            {/* Close Button */}
                            <button
                                className="self-end text-white cursor-pointer"
                                onClick={() => setIsOpen(false)}>
                                <X size={28} />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="flex flex-col mt-10 space-y-8 text-white font-semibold text-xl w-full">
                            {["HOME", "ABOUT US", "SERVICES", "MEDIA", "PROJECTS"].map(
                                (item, index) => (
                                    <Link
                                        key={item}
                                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                                        onClick={() => setIsOpen(false)}
                                        className=" pb-2"
                                        ref={(el: HTMLAnchorElement | null) => {
                                            if (el) menuItemsRef.current[index] = el;
                                        }}>
                                        {item}
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                    <div className="mt-5">
                        <Link
                            href=""
                            className="bg-[#04359C] justify-center items-center gap-2 py-4 px-6 flex rounded-[64px] text-base font-bold font-montserrat text-white ">
                            Contant US <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
