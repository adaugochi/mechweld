import Image from "next/image"
import Stroke from "../../../public/assets/images/png/about-stroke.png"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link";
import EngineerMan from "../../../public/assets/images/png/home-about-img.png"

export const AboutUs = () => {
    return (
        <>
        <div className="bg-transparent md:my-20 my-10 w-[90%] mx-auto relative ">
            <Image src={Stroke} alt="stroke" className="w-[622px] absolute top-[-80px] right-0 hidden md:block"/>
            <div className="bg-[#04359C0D] w-full rounded-[20px] md:rounded-[40px] flex flex-col md:flex-row justify-between items-center md:py-[80px] py-[40px] md:px-[40px] px-6">
                <div className="md:w-[45%] w-full">
                    <div>
                        <h1 className="text-[#04359C] font-semibold text-3xl font-raleway">ABOUT US</h1>
                        <p className="text-[#04359C] text-[18px] font-montserrat pb-6 mt-2">Learn about the company.</p>
                    </div>
                    <p className="text-[#1A1A1A] font-montserrat mb-4">
                       Mech-Weld Ltd is a Nigerian engineering contracting company committed to delivering value through active participation in engineering projects across the country. We leverage proven production technologies, sound project management practices, and expert consultancy services to provide reliable and efficient engineering solutions. 
                    </p>
                    <p className="text-[#1A1A1A] font-montserrat mb-4">
                        Our organisational structure is built on global best-practice standards and designed to enable us compete effectively in today’s fast-evolving technological environment. This approach allows us to adapt quickly, maintain high performance, and consistently meet client expectations.
                    </p>
                    
                    <Link href={`/about`}>
                        <Button className="py-4 btn-padding border border-[#04359C] text-[#04359C] bg-transparent rounded-[64px] font-bold font-montserrat">
                            Read More
                            <ArrowRight />
                        </Button>
                    </Link>
                </div>
                <div className="z-0 md:w-[50%] w-full mt-6">
                    <Image src={EngineerMan} alt="EngineerMan" className="w-full"/>
                </div>
            </div>
        </div>
        </>
    )
}