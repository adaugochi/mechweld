import { Hero } from "./hero";
import { Partnership } from "@/components/partnership";
import { Footer } from "@/components/footer";
import { AboutUs } from "@/components/about/about-us";
import { OurHistory } from "@/components/about/our-history";
import { Safety } from "@/components/about/safety";

function AboutUsPage () {
    return (
        <>
            <Hero />
            <AboutUs />
            <OurHistory />
            <Safety />
            <Partnership />
            <Footer />
        </>
    )
}

export default AboutUsPage;
