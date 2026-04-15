import Image from "next/image";
import Safety from "../../../public/assets/images/svg/Safety.svg";
import Integrity from "../../../public/assets/images/svg/integrity.svg";
import TeamWork from "../../../public/assets/images/svg/team-work.svg";
import Performance from "../../../public/assets/images/svg/performance.svg";
import Learning from "../../../public/assets/images/svg/learning.svg";
import Courage from "../../../public/assets/images/svg/courage.svg";
import Stroke from "../../../public/assets/images/png/value-stroke.png";

export const Values = () => {
    const values = [
        { icon: Safety, label: "Safety" },
        { icon: Integrity, label: "Integrity" },
        { icon: TeamWork, label: "Team Work" },
        { icon: Performance, label: "Performance" },
        { icon: Learning, label: "Learning" },
        { icon: Courage, label: "Courage" },
    ];

    return (
        <div className="w-full py-20 relative">
            <Image
                src={Stroke}
                alt="Decorative stroke"
                className="absolute top-0 z-0 opacity-60"
            />

            <div className="w-[90%] md:rounded-[40px] rounded-[20px] py-[80px] md:px-[40px] px-6 mx-auto relative z-1 bg-[linear-gradient(130deg,#032874_10%,#04359c_62%,#0e4fc6_100%)] shadow-[0_24px_58px_rgba(3,40,116,0.35)] overflow-hidden">
                <div className="absolute -top-20 right-6 w-60 h-60 bg-[#fdd028]/20 rounded-full blur-3xl" />
                <h1 className="text-white uppercase font-semibold font-raleway text-3xl fade-up">
                    Core Values
                </h1>
                <p className="text-[#d8e5ff] mt-3 font-montserrat max-w-[640px] fade-up-delay-1">
                    The principles that shape how we execute projects, work with partners, and protect every team member.
                </p>
                <div className="flex md:justify-between items-center flex-wrap mt-10 gap-10 justify-center md:flex-row flex-col relative z-10">
                    {values.map((value, index) => (
                        <div key={index} className="group transition-transform duration-300 hover:-translate-y-1">
                            <div className="w-[116px] h-[116px] bg-white rounded-[120px] flex justify-center items-center shadow-lg">
                                <div className="bg-[#04359C0D] w-[96px] h-[96px] flex justify-center items-center rounded-[120px] transition-colors duration-300 group-hover:bg-[#fdd02833]">
                                    <Image src={value.icon} alt={`${value.label} Icon`} />
                                </div>
                            </div>
                            <p className="font-montserrat font-semibold text-[20px] mt-3 text-center text-white">
                                {value.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
