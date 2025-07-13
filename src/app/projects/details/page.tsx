import { Hero } from "./hero"
import { ProjectOverview } from "./project-overview";
import { Partnership } from "@/components/partnership";
import { Footer } from "@/components/footer";

const ProjectDetails = () => {
    return (
        <>
            <Hero />
            <ProjectOverview />
            <Partnership />
            <Footer />
        </>
    )
}

export default ProjectDetails;