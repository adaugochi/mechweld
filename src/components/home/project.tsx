import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProjectList } from "../project-list"

export const Projects = () => {
    return (
        <>
            <div className="w-[90%] mx-auto md:my-20 my-10">
                <div className="flex justify-between items-center md:flex-row flex-col">
                    <div className="md:max-w-[40%]">
                        <div className="uppercase text-[#04359C] font-raleway font-semibold text-3xl tracking-wide fade-up">
                            Projects
                        </div>
                        <h2 className="text-[#04359C] text-[18px] font-montserrat mt-2 fade-up-delay-1">
                            Learn more about the work we do and how it is such a great delight to clients and communities.
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <Link
                            href="/projects"
                            className="btn-lift bg-transparent my-4 md:my-0 border border-[#04359C] justify-center items-center gap-2 py-4 px-6 flex rounded-[64px] text-sm font-bold font-montserrat text-[#04359C]"
                        >
                            View All Projects <ArrowRight size={24} />
                        </Link>
                    </div>
                </div>
                <ProjectList />
                <div className="md:hidden">
                    <Link
                        href="/projects"
                        className="btn-lift bg-transparent my-4 md:my-0 border border-[#04359C] justify-center items-center gap-2 py-4 px-6 flex rounded-[64px] text-sm font-bold font-montserrat text-[#04359C]"
                    >
                        View All Projects <ArrowRight size={24} />
                    </Link>
                </div>

            </div>
        </>
    )
}
