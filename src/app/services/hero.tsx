import Navbar from "@/components/navbar";
import Image from "next/image";

export const Hero = () => {
    return (
        <>
            <div
                className="relative h-[100vh]"
            >
                <Image
                    src="/assets/images/png/services-hero.png"
                    alt="Services page hero background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-opacity-50 z-0 bg-black/40" />

                <div className="relative z-10 h-[100vh] flex flex-col">
                    <Navbar />
                    <div className="flex flex-1 items-end">
                        <div className="w-[90%] lg:w-[80%] mx-auto">
                            <div className="md:max-w-[80%] mb-40">
                                <h1 className="fade-up text-white md:text-[68px] lg:text-[88px] text-[40px] text-3xl font-bold font-raleway md:leading-18">
                                    Our Services
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
