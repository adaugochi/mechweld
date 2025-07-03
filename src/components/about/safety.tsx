import Image from "next/image"
import SafetyImage from "../../../public/assets/images/png/hse-img.png"

export const Safety = () => {
    return (
        <>
            <div className="bg-[#F5F5F5] w-full md:py-20 py-10">
                <div className="bg-white w-[90%] mx-auto rounded-[16px] md:rounded-[40px] px-6 py-8 md:py-[80px] md:px-[40px]">
                    <div className="flex justify-between items-start gap-6 flex-col-reverse md:flex-row">
                        <Image src={SafetyImage} alt="safety" className="w-full" />
                        <div>
                            <p className="text-[#04359C] font-montserrat">Big on safety</p>
                            <h1 className="text-[#04359C] font-semibold font-raleway text-2xl mb-4">Our HSE Policy</h1>
                            <p className="text-#1A1A1A] font-montserrat mb-4">Our HSE policy is dedicated to the health and safety of people and the protection of the environment.</p>
                            <p className="text-#1A1A1A] font-montserrat mb-4">We see every employee as an HSE professional who believes that a destination of 365 Perfect HSE Days is possible and works every day to make it a reality.</p>
                            <strong className="text-[#1A1A1A] font-montserrat font-bold">
                                It took a personal and empowering message that supported our company’s purpose: <span className="text-[#04359C]"> “enabling safety, improving people’s lives.”</span>
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}