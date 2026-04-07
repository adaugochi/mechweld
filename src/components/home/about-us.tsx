import Image from "next/image"
import Stroke from "../../../public/assets/images/png/about-stroke.png"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link";
import EngineerMan from "../../../public/assets/images/png/home-about-img.png"

export const AboutUs = () => {
    return (
        <>
        <div className="bg-transparent md:my-24 my-12 w-[90%] mx-auto relative">
            <Image src={Stroke} alt="stroke" className="w-[622px] absolute top-[-80px] right-0 hidden md:block opacity-70"/>
            <div className="section-shell w-full rounded-[20px] md:rounded-[40px] flex flex-col md:flex-row justify-between items-center md:py-[80px] py-[40px] md:px-[40px] px-6 overflow-hidden">
                <div className="absolute -left-24 top-10 w-56 h-56 rounded-full bg-[#fdd028]/25 blur-3xl" />
                <div className="md:w-[45%] w-full relative z-10 fade-up">
                    <div>
                        <h1 className="text-[#04359C] font-semibold text-3xl font-raleway tracking-wide">ABOUT US</h1>
                        <p className="text-[#04359C] text-[18px] font-montserrat pb-6 mt-2">Learn about the company.</p>
                    </div>
                    <p className="text-[#1A1A1A] font-montserrat mb-4 leading-7">
                       Mech-Weld Ltd is a Nigerian engineering contracting company committed to delivering value through active participation in engineering projects across the country. We leverage proven production technologies, sound project management practices, and expert consultancy services to provide reliable and efficient engineering solutions. 
                    </p>
                    <p className="text-[#1A1A1A] font-montserrat mb-6 leading-7">
                        Our organisational structure is built on global best-practice standards and designed to enable us compete effectively in today’s fast-evolving technological environment. This approach allows us to adapt quickly, maintain high performance, and consistently meet client expectations.
                    </p>
                    
                    <Link href={`/about`}>
                        <Button className="btn-lift py-4 btn-padding border border-[#04359C] text-[#04359C] bg-white rounded-[64px] font-bold font-montserrat">
                            Read More
                            <ArrowRight />
                        </Button>
                    </Link>
                </div>
                <div className="z-0 md:w-[50%] w-full mt-8 md:mt-0 relative fade-up-delay-2">
                    <div className="absolute -inset-4 rounded-[28px] bg-[linear-gradient(120deg,rgba(4,53,156,0.18),rgba(253,208,40,0.35))] blur-xl" />
                    <Image src={EngineerMan} alt="EngineerMan" className="w-full rounded-[24px] relative z-10 shadow-2xl"/>
                </div>
            </div>
        </div>
        </>
    )
}
