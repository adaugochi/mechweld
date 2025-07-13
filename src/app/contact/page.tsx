import { Hero } from "../../components/contact/hero";
import { ContactMap } from "../../components/contact/contact-map";
import { Footer } from "@/components/footer";
import { ContactDetails } from "@/components/contact/contact-details";

function ContactPage () {
    return (
        <>
            <Hero />
            <ContactDetails />
            <ContactMap />
            <Footer />
        </>
    )
}

export default ContactPage;