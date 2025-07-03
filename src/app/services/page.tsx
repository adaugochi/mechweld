import { Hero } from "./hero";
import { Partnership } from "@/components/partnership";
import { Footer } from "@/components/footer";
import { Service } from "@/components/services/service";

function ServicesPage () {
    return (
        <>
            <Hero />
            <Service />
            <Partnership />
            <Footer />
        </>
    )
}

export default ServicesPage;
