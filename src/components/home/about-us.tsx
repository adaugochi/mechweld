import Image from "next/image"
import Stroke from "../../../public/assets/images/png/about-stroke.png"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import EngineerMan from "../../../public/assets/images/png/home-about-img.png"

export const AboutUs = () => {
    return (
        <>
        <div className="bg-transparent mt-70 mb-20 w-[90%] mx-auto relative ">
            <Image src={Stroke} alt="stroke" className="w-[622px] absolute top-[-80px] right-0"/>
            <div className="bg-[#04359C0D] w-full h-[40vh] rounded-[40px] flex justify-between items-center">
                <div>
                    <h1 className="text-[#04359C] font-semibold text-2xl font-raleway">ABOUT US</h1>
                    <p className="text-[#04359C] text-[18px] font-montserrat">Learn about the company.</p>
                    <p className="text-[#1A1A1A]">
                       We are an Engineering contracting company based in Nigeria that have created  value from being actively involved in Engineering Contracts with high  performance production technology, project management and consultancy. 
                    </p>
                    <p className="text-[#1A1A1A]">
                        Our Organisational structures is built on the concept of global business and is  design to allow us compete most efficiently in the ever changing technological  world
                    </p>
                    <p className="text-[#1A1A1A]">
                        Since our inception Mech Weld Ltd has supervised, installed and maintained for  numerous clients in Nigeria.
                    </p>
                    <Button className="p-[10px] border border-[#04359C] bg-transparent rounded-[64px]">
                        Read More
                        <ArrowRight />
                    </Button>
                </div>
                <div className="z-100">
                    <Image src={EngineerMan} alt="EngineerMan"/>
                </div>
            </div>
        </div>
        </>
    )
}