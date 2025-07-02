import Image from "next/image"
import Stroke from "../../../public/assets/images/png/about-stroke.png"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import EngineerMan from "../../../public/assets/images/png/home-about-img.png"

export const AboutUs = () => {
    return (
        <>
            <div className="bg-transparent md:my-20 my-10 w-[90%] mx-auto relative ">
                <Image src={Stroke} alt="stroke" className="w-[622px] absolute top-[-80px] right-0 hidden md:block" />
                <div className="bg-[#04359C0D] w-full rounded-[20px] md:rounded-[40px] flex flex-col md:flex-row justify-between items-start md:py-[80px] py-[40px] md:px-[40px] px-6">
                    <div className="md:w-[45%] w-full">
                        <div className="mb-4 md:mb-0">
                            <p className="text-[#04359C] text-[18px] font-montserrat">About Mech Weld</p>
                            <h1 className="text-[#04359C] font-semibold text-2xl font-raleway">Home of Modern Technology</h1>
                        </div>
                        <p className="text-[#1A1A1A] font-montserrat mb-6">
                            We are an Engineering contracting company based in Nigeria that have created  value from being actively involved in Engineering Contracts with high  performance production technology, project management and consultancy.
                        </p>
                        <p className="text-[#1A1A1A] font-montserrat mb-6">
                            Our Organisational structures is built on the concept of global business and is  design to allow us compete most efficiently in the ever changing technological  world
                        </p>
                        <p className="text-[#1A1A1A] font-montserrat mb-6">
                            Since our inception Mech Weld Ltd has supervised, installed and maintained for  numerous clients in Nigeria.
                        </p>
                        <p className="text-[#1A1A1A] font-montserrat mb-6">
                            We have been able to put several facilities on ground that create solutions and  design better ways to   lower costs, reduce risk or improve productivity
                        </p>
                        <p className="text-[#1A1A1A] font-montserrat mb-6">
                            At Mech Weld, collaboration is at the heart of our business. Our  team work side  by side with customers to engineer reliable, application-specific products and  services - whether the application is Mechanical/Electrical installation and  maintenance, Oil and Gas services, Air Condition installation and maintenance,  Civil And Material/Labour supply, Equipment Hire and General Contractor.
                        </p>
                        <p className="text-[#1A1A1A] font-montserrat mb-6">
                            We also work to understand customer needs and coordinate delivery of products  or comprehensive service solutions that include the right Mech Weld’s  technologies for the project
                        </p>

                    </div>
                    <div className="z-0 md:w-[50%] w-full mt-6">
                        <Image src={EngineerMan} alt="EngineerMan" className="w-full flex-1" />
                    </div>
                </div>
            </div>
        </>
    )
}