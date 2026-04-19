import Image from "next/image"
import Stroke from "../../../public/assets/images/png/about-stroke.png"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import EngineerMan from "../../../public/assets/images/png/home-about-img.png"
import {
    FaIndustry,
    FaGlobeAfrica,
    FaTools,
    FaHandshake,
    FaProjectDiagram,
    FaUsers
} from "react-icons/fa";

export const AboutUs = () => {
    return (
        <section className="w-[90%] mx-auto my-20">
            
            {/* PAGE HEADER */}
            <div className="text-center mb-14">
                <h1 className="text-4xl font-bold text-[#04359C] font-raleway">
                    About Mech-Weld Ltd
                </h1>
                {/* <p className="mt-3 text-lg text-gray-700 max-w-2xl mx-auto">
                    Delivering reliable engineering solutions across Nigeria through innovation,
                    collaboration, and technical excellence.
                </p> */}
            </div>

            {/* CARD GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 about-card-grid">

                {/* WHO WE ARE */}
                <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-[#04359C] hover:shadow-lg transition font-montserrat">
                    <FaIndustry className="text-4xl text-[#F4B400] mb-4" />
                    <h3 className="text-xl font-semibold text-[#04359C] mb-3 font-montserrat">
                        Who We Are
                    </h3>
                    <p className="text-gray-700 leading-[1.8]">
                        Mech-Weld Ltd is a Nigeria-based engineering contracting company providing
                        high-performance engineering, project management, and consultancy services
                        across multiple sectors. We are known for delivering reliable engineering solutions across Nigeria through innovation, collaboration, and technical excellence.
                    </p>
                </div>

                {/* STRUCTURE */}
                <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-[#F4B400] hover:shadow-lg transition font-montserrat">
                    <FaGlobeAfrica className="text-4xl text-[#04359C] mb-4" />
                    <h3 className="text-xl font-semibold text-[#04359C] mb-3 font-montserrat">
                        Our Structure
                    </h3>
                    <p className="text-gray-700 leading-[1.8]">
                        Our organisational structure is built on global best-practice standards,
                        enabling us to compete efficiently in a fast-changing technological
                        and business environment.
                    </p>
                </div>

                {/* EXPERIENCE */}
                <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-[#04359C] hover:shadow-lg transition font-montserrat">
                    <FaUsers className="text-4xl text-[#F4B400] mb-4" />
                    <h3 className="text-xl font-semibold text-[#04359C] mb-3 font-montserrat">
                        Proven Experience
                    </h3>
                    <p className="text-gray-700 leading-[1.8]">
                        Since inception, we have successfully supervised, installed, and maintained
                        engineering systems for numerous clients across Nigeria.
                    </p>
                </div>

                {/* VALUE DELIVERY */}
                <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-[#F4B400] hover:shadow-lg transition font-montserrat">
                    <FaProjectDiagram className="text-4xl text-[#04359C] mb-4" />
                    <h3 className="text-xl font-semibold text-[#04359C] mb-3 font-montserrat">
                        Value We Deliver
                    </h3>
                    <p className="text-gray-700 leading-[1.8]">
                        We deliver facilities and engineering solutions that lower operational costs,
                        reduce project risks, and improve productivity and long-term performance.
                    </p>
                </div>

                {/* CUSTOMER FOCUS */}
                <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-[#F4B400] hover:shadow-lg transition font-montserrat">
                    <FaHandshake className="text-4xl text-[#04359C] mb-4" />
                    <h3 className="text-xl font-semibold text-[#04359C] mb-3 font-montserrat">
                        Customer Focus
                    </h3>
                    <p className="text-gray-700 leading-[1.8]">
                        Collaboration is central to our operations. We work closely with clients to
                        understand project needs and deploy the right technologies, expertise,
                        and resources for successful delivery.
                    </p>
                </div>

                {/* SERVICES */}
                <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-[#04359C] hover:shadow-lg transition font-montserrat">
                    <FaTools className="text-4xl text-[#F4B400] mb-4" />
                    <h3 className="text-xl font-semibold text-[#04359C] mb-3 font-montserrat">
                        Our Scope of Services
                    </h3>
                    <ul className="text-gray-700 leading-[1.8] space-y-1 list-disc pl-5">
                        <li>Plant Installation and Maintenance</li>
                        <li>Mechanical & Electrical Installation</li>
                        <li>Oil & Gas Engineering Services</li>
                        <li>Civil Works & Material Labour Supply</li>
                        <li>Fishery and Agro-Allied Service</li>
                        <li>Equipment Hire & General Contracting</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
