import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const projectList = [
    {
        image: "/assets/images/png/project-item.png",
        label: "Cold Line Installation Nigeria Brewery Plc, Ama Enugu"
    },
    {
        image: "/assets/images/png/project-item2.png",
        label: "Relocation of Caustic Soda Plant at NB Plc - Ama Enugu"
    },
    {
        image: "/assets/images/png/project-item3.png",
        label: "Installation of hydrant line at Old Enugu Brewery"
    },
    {
        image: "/assets/images/png/project-item4.png",
        label: "Fabrication and Installation of Carbonated water plant for Aqua Rapha Investment Ltd"
    },
]

export const ProjectList = () => {
    return (
        <div className="md:pt-20 pt-10">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {projectList.map((project, index) => (
                    <Link href={`/projects/details`} className="relative w-full" key={index}>
                        <Image src={project.image} alt="img" width={421} height={587} className="h-[500px]" />
                        <div className="text-2xl text-[#FFFFFF] font-semibold absolute bottom-0 p-4 max-w-[90%]">
                            {project.label}
                            <ArrowRight className="mt-4" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}