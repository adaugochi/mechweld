import { Hero } from "./hero";
import { Partnership } from "@/components/partnership";
import { Footer } from "@/components/footer";
import { Service } from "@/components/services/service";
import { Reveal } from "@/components/motion/reveal";

function ServicesPage () {
    return (
        <>
            <Hero />
            <Reveal delay={40}>
                <Service />
            </Reveal>
            <Reveal delay={140}>
                <Partnership />
            </Reveal>
            <Footer />
        </>
    )
}

export default ServicesPage;
