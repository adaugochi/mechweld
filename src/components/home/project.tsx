import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const Projects = () => {
    return (
        <>
            <div className="w-[90%] mx-auto">
                <div className="flex justify-between items-center">
                    <div className="max-w-[40%]">
                        <div className="uppercase text-[#04359C] font-raleway font-semibold text-2xl">
                            Projects
                        </div>
                        <h2 className="text-[#04359C] text-[18px] font-montserrat">
                            Learn more about the work we do and how it is such a great delight to clients and communities.
                        </h2>
                    </div>
                    <Link
                        href=""
                        className="bg-transparent border border-[#04359C] justify-center items-center gap-2 py-4 px-6 flex rounded-[64px] text-base font-bold font-montserrat text-[#04359C]"
                    >
                        View All Projects <ArrowRight size={24} />
                    </Link>
                </div>
            </div>
        </>
    )
}