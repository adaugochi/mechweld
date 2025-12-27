import Navbar from "../navbar";
import { Revenue } from "./revenue";

export const Hero = () => {
    return (
        <>
            <div
                className="relative h-[100vh] bg-cover bg-center"
                style={{ backgroundImage: `url('/assets/images/png/landing-hero.png')` }}
            >
                <div className="absolute inset-0 bg-opacity-50 z-0" />

                <div className="relative z-10 h-[100vh] flex flex-col">
                    <Navbar />
                    <div className="flex flex-1 items-center">
                        <div className="w-[90%] lg:w-[80%] mx-auto">
                            <div className="md:max-w-[80%] ">
                                <h1 className="text-white md:text-[56px] xl:text-[88px] text-[30px] font-bold font-raleway">
                                    Revolutionizing the Engineering Services Industry
                                </h1>
                                <p className="text-white md:mt-2 mt-6 font-raleway md:text-[1.5rem]">
                                    We are you trusted partner in your goal to be ahead of your competition.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Revenue />
        </>
    );
};
