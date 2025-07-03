import Image from "next/image";
import DotList from "../../../public/assets/images/svg/dot-list.svg";
import DotListLeave from "../../../public/assets/images/svg/dot-list-leave.svg";
import { serviceData } from "../constants/serviceData";

const ServiceListItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-2 mb-4">
        <Image src={DotList} alt="dot" />
        <p className="text-[#1A1A1A] font-montserrat">{text}</p>
    </div>
);

const SubListItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-2 mb-2">
        <Image src={DotListLeave} alt="sub-dot" />
        <p className="text-[#1A1A1A] font-montserrat">{text}</p>
    </div>
);

const ServiceCard = ({
    title,
    image,
    alt,
    points,
    reversed,
}: {
    title: string;
    image: any;
    alt: string;
    points: (string | { title: string; subpoints: string[] })[];
    reversed?: boolean;
}) => {
    return (
        <section
            className={`flex flex-col-reverse ${reversed ? "md:flex-row-reverse" : "md:flex-row"
                } justify-between items-center gap-10 md:gap-20 mt-10 pb-6 ${title !== "Agro-Allied Services" ? "md:border-b-[4px] border-[#F5F5F5]" : ""
                }`}
        >
            <div className="md:w-1/2 w-full">
                <Image src={image} alt={alt} className="w-full" />
            </div>
            <div className="md:w-1/2 w-full">
                <h1 className="text-[#1A1A1A] font-semibold font-raleway text-2xl mb-6">
                    {title}
                </h1>
                {points.map((point, idx) =>
                    typeof point === "string" ? (
                        <ServiceListItem key={idx} text={point} />
                    ) : (
                        <div key={idx} className="mb-4">
                            <ServiceListItem text={point.title} />
                            <div className="ml-8">
                                {point.subpoints.map((sub, subIdx) => (
                                    <SubListItem key={subIdx} text={sub} />
                                ))}
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    );
};

export const Service = () => {
    return (
        <div className="w-[90%] mx-auto my-20">
            <h1 className="text-[#04359C] text-2xl font-semibold font-raleway">
                Services We Offer
            </h1>

            {serviceData.map((service, index) => (
                <ServiceCard
                    key={index}
                    title={service.title}
                    image={service.image}
                    alt={service.alt}
                    points={service.points}
                    reversed={index % 2 !== 0}
                />
            ))}
        </div>
    );
};
