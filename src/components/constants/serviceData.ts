import Service1 from "../../../public/assets/images/png/service1.png"
import Service2 from "../../../public/assets/images/png/service2.png"
import Service3 from "../../../public/assets/images/png/service3.png"
import Service4 from "../../../public/assets/images/png/service4.png"

export const serviceData = [
    {
        title: "Installation & Maintenance",
        image: Service1,
        alt: "Installation service image",
        points: [
            "Arc condition power installation and maintenance, including all kinds of cooling, heating, and extracting system like - Cooling ducts, Air conditioners, Extractors",
            "Installation and maintenance of fire fighting/projection systems - Smoke detectors and alarm, Sprinklers, Piping, Water piping (superheated and warm) reticulation, Gas piping and distribution",
            "Servicing & maintenance of plants, Oil & Gas services, Technical site survey & documentation",
        ],
    },
    {
        title: "Welding & Fabrication",
        image: Service2,
        alt: "Welding and fabrication image",
        points: [
            "Liquid / Gas pumps of all kinds, Hydraulic lifts and cranes, Motorized gates & doors, Construction and installation of vessels and storage tanks",
            "Welding and fabrication of all kinds - Argon welding, Arc welding",
            "Building of temporal working platform for all kinds of height work, Scaffolding",
        ],
    },
    {
        title: "Civil Works",
        image: Service3,
        alt: "Civil works image",
        points: [
            "Civil works including structural design and erection, Foundation / soil piling and consultancy",
        ],
    },
    {
        title: "Agro-Allied Services",
        image: Service4,
        alt: "Agro services image",
        points: [
            "Tractor parts production and repairs",
            "Agro processing machines fabrication",
            "Agro plant installation and maintenance",
            "Machine hiring services",
            {
                title: "Fishery:",
                subpoints: ["Consultation", "Pond Construction", "Feed Production"],
            },
        ],
    },
];
