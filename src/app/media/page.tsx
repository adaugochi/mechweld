import { Hero } from "./hero";
import { MediaGrid } from "@/components/media/media-grid";
import { Partnership } from "@/components/partnership";
import { Footer } from "@/components/footer";

function Media () {
    return (
        <>
            <Hero />
            <MediaGrid />
            <Partnership />
            <Footer />
        </>
    )
}

export default Media;
