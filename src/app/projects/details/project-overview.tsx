import { ArrowRight } from "lucide-react"
import Image from "next/image"

export const ProjectOverview = () => {
    return (
        <div className="w-[90%] mx-auto py-20 ">
            <div className="flex flex-col-reverse md:flex-row md:justify-between">
                <div className="lg:w-[20%]">
                    <div className="mb-4">
                        <h3 className="font-bold text-[#1A1A1A] font-montserrat mb-2">Client</h3>
                        <p className="text-[#808080] font-montserrat">Nigeria Breweries</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold text-[#1A1A1A] font-montserrat mb-2">Location</h3>
                        <p className="text-[#808080] font-montserrat">Enugu, Nigeria</p>
                    </div>
                    <button
                        type="submit"
                        className="bg-[#04359C] text-sm items-center mt-6 text-white px-4 py-3 font-bold rounded-[64px] font-montserrat flex gap-2 cursor-pointer"
                    >
                        Download PDF
                        <ArrowRight />
                    </button>
                </div>
                <div className="lg:w-[60%]">
                    <h1 className="text-[28px] font-raleway font-semibold text-[#1A1A1A]">Fabrication and Installation of Carbonated water plant for Aqua Rapha Investment Ltd</h1>
                    <div className="flex flex-col gap-6 py-6">
                        <div>
                            <span className="text-[#1A1A1A] font-bold font-montserrat">Project overview</span>
                            <ul className="text-[#808080] font-montserrat list-disc pl-5 flex flex-col mt-4 gap-4">
                                <li>Fabrication</li>
                                <li>Installation</li>
                                <li>Maintenance</li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-[#1A1A1A] font-bold font-montserrat">Scope of Work</span>
                            <ul className="text-[#808080] font-montserrat list-disc pl-5 flex flex-col mt-4 gap-4">
                                <li>Automation + controls</li>
                                <li>Engineering + design</li>
                                <li>Implementation + setup</li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-[#1A1A1A] font-bold font-montserrat">Project Summary</span>
                            <p className="text-[#808080] font-montserrat list-disc mt-2">
                                Lorem ipsum dolor sit amet consectetur. Aliquam sagittis rutrum elit turpis massa sagittis eget malesuada id. Dolor risus ullamcorper nunc urna nunc eleifend tortor pellentesque. Luctus euismod eu sit sit rhoncus. Elementum amet elementum cursus interdum eu cum. Nulla eu faucibus amet elit mattis proin erat facilisis. Imperdiet elementum sed in pulvinar curabitur egestas sit habitant viverra. Ut neque mauris lorem pretium viverra libero feugiat. Nibh felis vitae cursus est pellentesque pretium tristique. Ut adipiscing morbi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Image src={`/assets/images/png/project-item.png`} alt="project-img" className="rounded-[8px] items-stretch" width={350} height={400}/>
                <Image src={`/assets/images/png/project-item.png`} alt="project-img" className="rounded-[8px] items-stretch" width={350} height={400}/>
                <Image src={`/assets/images/png/project-item.png`} alt="project-img" className="rounded-[8px] items-stretch" width={350} height={400}/>
            </div>
        </div>
    )
}