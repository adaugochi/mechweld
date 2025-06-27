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
            quantity: "10 yrs",
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
            quantity: "1000+",
            label: "spare parts supplied",
        },
    ]

    return (
        <>
            <div className="bg-[#FDD02826] w-full flex items-center py-10">
                <div className="bg-[#FDD028] w-full flex-col md:flex-row p-6 flex justify-between gap-6 items-center flex-wrap">
                    {revenueList.map((revenue, index) => (
                        <div className="flex gap-2 items-center" key={index}>
                            <div className="w-[80px] h-[80px] rounded-[200px] bg-[#04359C0D] flex justify-center items-center">
                                <div className="w-[64px] h-[64px] bg-white rounded-[120px] p-[1px] flex justify-center items-center">
                                    <Image src={revenue.icon} alt="icon" width={40} height={40} />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-[#04359C] font-semibold text-2xl font-raleway mb-2">{revenue.quantity}</h4>
                                <p className="text-[#1A1A1A] text-sm font-montserrat">{revenue.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}