import Image from "next/image"
import WorkingTools from "../../../public/assets/images/svg/working-tools.svg"
import SuitCase from "../../../public/assets/images/svg/suit-case.svg"
import Certificate from "../../../public/assets/images/svg/certificate.svg"
import Rocket from "../../../public/assets/images/svg/rocket.svg"
import SparePart from "../../../public/assets/images/svg/spare-parts.svg"

export const Revenue = () => {

    const revenueList = [
        {
            icon: WorkingTools,
            quantity: "1000+",
            label: "repairs per year",
        },
        {
            icon: SuitCase,
            quantity: "10+",
            label: "areas of expertise",
        },
        {
            icon: Certificate,
            quantity: "12+",
            label: "years of market presence",
        },
        {
            icon: Rocket,
            quantity: "12+",
            label: "innovative solutions",
        },
        {
            icon: SparePart,
            quantity: "10,000+",
            label: "spare parts supplied",
        },
    ]

    return (
        <>
            <div className="w-full flex items-center py-8 md:py-10 px-4">
                <div className="w-[94%] mx-auto rounded-[26px] md:rounded-[30px] bg-[linear-gradient(110deg,#fdd028_0%,#f5c41f_45%,#ffd84b_100%)] flex-col md:flex-row p-6 md:p-8 flex justify-between gap-6 items-center lg:flex-nowrap flex-wrap shadow-[0_22px_48px_rgba(197,145,14,0.34)]">
                    {revenueList.map((revenue, index) => (
                        <div className="flex gap-2 items-center fade-up" key={index} style={{ animationDelay: `${index * 70}ms` }}>
                            <div className="w-[80px] h-[80px] rounded-[200px] bg-white/40 flex justify-center items-center">
                                <div className="w-[64px] h-[64px] bg-white rounded-[120px] p-[1px] flex justify-center items-center shadow-sm">
                                    <Image src={revenue.icon} alt="icon" width={40} height={40} />
                                </div>
                            </div>
                            <div className="text-center sm:text-left">
                                <h4 className="text-[#04359C] text-left md:text-center font-semibold text-2xl font-raleway md:mb-2">
                                    {revenue.quantity}
                                </h4>
                                <p className="text-[#1A1A1A] md:text-sm font-montserrat max-w-[140px] sm:max-w-none break-words text-left sm:text-left md:text-center">
                                    {revenue.label}
                                </p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}
