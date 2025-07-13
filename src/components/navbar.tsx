"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { MenuIcon, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "HOME", href: "/" },
        { name: "ABOUT US", href: "/about" },
        { name: "SERVICES", href: "/services" },
        { name: "MEDIA", href: "/media" },
        { name: "PROJECTS", href: "/projects" },
    ];

    return (
        <div
            className={`border-b border-[#bdbbbb] fixed w-full top-0 z-[100] ${theme === "dark"
                ? scrolled
                    ? "bg-[#1A1A1A]"
                    : ""
                : "bg-[#1A1A1A]"
                }`}
        >
            <nav className="w-[90%] lg:w-[80%] mx-auto bg-transparent py-5 flex justify-between items-center lg:gap-40 relative">
                <div className="w-full flex justify-between">
                    <div>
                        <Link href="/">
                            <Image
                                src="/assets/images/svg/logo.svg"
                                height={32}
                                width={155}
                                alt="mech-weld"
                                className="transition-all duration-300 hover:scale-105"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex">
                        <div
                            className={`flex items-center space-x-8 font-montserrat font-bold ${theme === "dark" ? "text-white" : "text-[#656565]"
                                }`}
                        >
                            {navLinks.map(({ name, href }) => (
                                <Link
                                    key={name}
                                    href={href}
                                    className={`transition-all text-sm font-bold duration-100 hover:scale-95 ${pathname === href ? "text-[#fdd028]" : ""
                                        }`}
                                >
                                    {name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Contact Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className="bg-[#04359C] justify-center items-center gap-2 py-4 px-6 flex rounded-[64px] text-sm font-bold font-montserrat text-white"
                        >
                            Contact Us <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    
                    className={`md:hidden cursor-pointer ${theme === "dark" ? "text-white" : "text-white"} hover:scale-105`}
                    onClick={handleMobileButton}
                >
                    <MenuIcon size={24}/>
                </button>

                {/* Mobile Menu Overlay */}
                <div
                    ref={menuRef}
                    className="fixed top-0 left-0 w-full h-full bg-[#1A1A1A] flex flex-col items-start p-6 transform -translate-x-full -translate-y-full opacity-0 z-50"
                >
                    <div className="w-full">
                        <div className="w-full flex justify-between gap-10 mt-4">
                            <Link href="/">
                                <Image
                                    src="/assets/images/svg/logo.svg"
                                    height={32}
                                    width={155}
                                    alt="mech-weld"
                                    className="transition-all duration-300 hover:scale-105"
                                />
                            </Link>
                            <button
                                className="self-end text-white cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            >
                                <X size={28} />
                            </button>
                        </div>

                        {/* Mobile Menu Items */}
                        <div className="flex flex-col mt-10 space-y-8 text-white font-semibold text-xl w-full">
                            {navLinks.map(({ name, href }, index) => (
                                <Link
                                    key={name}
                                    href={href}
                                    onClick={() => setIsOpen(false)}
                                    className={`pb-2 ${pathname === href ? "text-[#04359C]" : ""
                                        }`}
                                    ref={(el: HTMLAnchorElement | null) => {
                                        if (el) menuItemsRef.current[index] = el;
                                    }}
                                >
                                    {name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Contact Button */}
                    <div className="mt-5">
                        <Link
                            href="/contact"
                            className="bg-[#04359C] justify-center items-center gap-2 py-4 px-6 flex rounded-[64px] text-base font-bold font-montserrat text-white"
                        >
                            Contact Us <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
