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
                    <p className="text-[#1A1A1A] font-montserrat mb-6">
                       We are an Engineering contracting company based in Nigeria that have created  value from being actively involved in Engineering Contracts with high  performance production technology, project management and consultancy. 
                    </p>
                    <p className="text-[#1A1A1A] font-montserrat mb-6">
                        Our Organisational structures is built on the concept of global business and is  design to allow us compete most efficiently in the ever changing technological  world
                    </p>
                    <p className="text-[#1A1A1A] font-montserrat mb-6">
                        Since our inception Mech-Weld Ltd has supervised, installed and maintained for  numerous clients in Nigeria.
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