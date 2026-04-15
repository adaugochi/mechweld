"use client";
import Link from "next/link";
import WhatsAppIcon from "../../public/assets/images/svg/whatsapp-icon.svg"
import Image from "next/image";

const WhatsApp = () => {
  return (
    <Link
      href="https://wa.me/2348034101240?text=Hello%20Mech-Weld%2C%20I%27m%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[1000] bg-[#25D366] text-white rounded-full p-2.5 shadow-lg hover:scale-110 transition-all duration-300"
    >
      <Image src={WhatsAppIcon} alt="icon" width={30} height={30} />
    </Link>
  );
};

export default WhatsApp;
