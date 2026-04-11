import Image from "next/image"

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
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                {projectList.map((project, index) => (
                  <div className="relative w-full overflow-hidden rounded-2xl group shadow-[0_14px_35px_rgba(15,23,42,0.14)]" key={index}>
                        <Image
                            src={project.image}
                            alt="img"
                            width={421}
                            height={587}
                            sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 23vw"
                            className="h-auto w-full transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(2,26,74,0.87)_100%)]" />
                        <div className="text-[22px] leading-7 text-[#FFFFFF] font-semibold absolute bottom-0 p-5 max-w-[95%] font-raleway">
                            {project.label}
                        </div>
                  </div>
                ))}
            </div>
        </div>
    )
}
