import { Hero } from "./hero";
import { Partnership } from "@/components/partnership";
import { Footer } from "@/components/footer";
import { ProjectList } from "@/components/project-list";

function ProjectsPage() {
    return (
        <>
            <Hero />
            <div className="md:pb-20 pb-10 bg-[#F5F5F5]">
                <div className="w-[90%] mx-auto">
                    <ProjectList />
                </div>
            </div>
            <Partnership />
            <Footer />
        </>
    )
}

export default ProjectsPage;