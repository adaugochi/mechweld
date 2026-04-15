import { Hero } from "./hero";
import { Partnership } from "@/components/partnership";
import { Footer } from "@/components/footer";
import { ProjectList } from "@/components/project-list";
import { Reveal } from "@/components/motion/reveal";

function ProjectsPage() {
    return (
        <>
            <Hero />
            <Reveal delay={40}>
                <div className="md:pb-20 pb-10 bg-[#F5F5F5]">
                    <div className="w-[90%] mx-auto">
                        <ProjectList />
                    </div>
                </div>
            </Reveal>
            <Reveal delay={150}>
                <Partnership />
            </Reveal>
            <Footer />
        </>
    )
}

export default ProjectsPage;
