import { Hero } from "@/components/home/hero";
import { AboutUs } from "@/components/home/about-us";
import { Values } from "@/components/home/values";
import { OurClient } from "@/components/home/our-client";
import { Services } from "@/components/home/services";
import { Projects } from "@/components/home/project";
import { Testimonials } from "@/components/home/testimonials";

export default function Home() {
  return (
    <div>
     <Hero />
     <AboutUs />
     <Values />
     <OurClient />
     <Services />
     <Projects />
     <Testimonials />
    </div>
  );
}
