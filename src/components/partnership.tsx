import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Partnership = () => {
    return (
        <>
            <div
                className="relative md:h-[80vh] h-[60vh] bg-cover bg-center bg-[#FDD02826]"
                style={{ backgroundImage: `url('/assets/images/png/testimonial-bg.png')` }}
            >
                <div className="absolute inset-0 bg-opacity-50 z-0" />

                <div className="relative z-1 md:h-[80vh] h-[60vh] flex flex-col">
                    <div className="flex flex-1 items-center">
                        <div className="w-[90%] mx-auto">
                            <h1 className="text-[#04359C] text-center md:text-[56px] text-3xl font-bold font-raleway md:leading-18">
                                The power of partnership
                            </h1>
                            <div className="lg:max-w-[44%] md:max-w-[60%] w-full mx-auto mt-8">
                                <p className="text-[#04359C] mb-8 text-center md:mt-2 mt-6 font-montserrat">
                                    We would love to hear from you. To find out more about what we do, or to discuss how we can work together, please reach out to us
                                </p>
                                <div className="mt-5 flex justify-center">
                                    <Link
                                        href="/contact"
                                        className="bg-[#04359C] w-[200px] justify-center items-center gap-2 py-4 px-6 flex rounded-[64px] text-base font-bold font-montserrat text-white"
                                    >
                                        Contact Us <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
