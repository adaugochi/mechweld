import Navbar from "@/components/navbar";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
    return (
        <>
            <div
                className="relative h-[100vh]"
            >
                <Image
                    src="/assets/images/png/project-details-hero.png"
                    alt="Project details hero background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-opacity-50 z-0 bg-black/40" />

                <div className="relative z-10 h-[100vh] flex flex-col">
                    <Navbar />
                    <div className="flex flex-1">
                        <div className="w-[90%] lg:w-[80%] mx-auto">
                            <div className="md:max-w-[80%] mt-35">
                                <Link href={`/projects`} className="flex items-center text-white font-montserrat text-[18px]">
                                    <ChevronLeft />
                                   Back to Project
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
