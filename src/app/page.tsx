import { Hero } from "@/components/home/hero";
import { AboutUs } from "@/components/home/about-us";
import { Values } from "@/components/home/values";
import { OurClient } from "@/components/home/our-client";

export default function Home() {
  return (
    <div>
     <Hero />
     <AboutUs />
     <Values />
     <OurClient />
    </div>
  );
}
