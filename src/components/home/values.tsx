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
        <div className="bg-[#F5F5F5] w-full py-20 relative">
            <Image
                src={Stroke}
                alt="Decorative stroke"
                className="absolute top-0 z-0"
            />

            <div className="bg-[#04359C] w-[90%] md:rounded-[40px] rounded-[20px] py-[80px] md:px-[40px] px-6 mx-auto relative z-1">
                <h1 className="text-white uppercase font-semibold font-raleway text-2xl">
                    Core Values
                </h1>
                <p className="text-white mt-4 font-montserrat">
                    Our core values are the basis for establishing a common culture for the company
                </p>
                <div className="flex md:justify-between items-center flex-wrap mt-30 gap-10 justify-center md:flex-row flex-col">
                    {values.map((value, index) => (
                        <div key={index}>
                            <div className="w-[116px] h-[116px] bg-white rounded-[120px] flex justify-center items-center">
                                <div className="bg-[#04359C0D] w-[96px] h-[96px] flex justify-center items-center rounded-[120px]">
                                    <Image src={value.icon} alt={`${value.label} Icon`} />
                                </div>
                            </div>
                            <p className="font-montserrat font-semibold text-[20px] text-center text-white">
                                {value.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
