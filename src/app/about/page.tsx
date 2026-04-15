import { Hero } from "./hero";
import { Partnership } from "@/components/partnership";
import { Footer } from "@/components/footer";
import { AboutUs } from "@/components/about/about-us";
import { OurHistory } from "@/components/about/our-history";
import { Safety } from "@/components/about/safety";
import { Reveal } from "@/components/motion/reveal";

function AboutUsPage () {
    return (
        <>
            <Hero />
            <Reveal delay={40}>
                <AboutUs />
            </Reveal>
            <Reveal delay={140}>
                <Safety />
            </Reveal>
            {/* <OurHistory /> */}
            <Reveal delay={220}>
                <Partnership />
            </Reveal>
            <Footer />
        </>
    )
}

export default AboutUsPage;
