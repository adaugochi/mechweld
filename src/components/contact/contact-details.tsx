'use client'

import {
    MapPin,
    ArrowRight,
    Loader
} from "lucide-react"
import { Mail } from "lucide-react"
import { PhoneCall } from "lucide-react"
import Link from "next/link";
import WhatsAppIcon from "../../../public/assets/images/svg/whatsapp-icon.svg"
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Textarea } from "../textarea";
import { Input } from "../input";
import axios from 'axios';
import Script from "next/script";
import Swal from 'sweetalert2';


type ContactFormData = {
    name: string;
    message: string;
    email: string;
    grecaptcha: string;
};

export const ContactDetails = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        data.grecaptcha = (window as any).grecaptcha?.getResponse();

        if (!data.grecaptcha) {
            Swal.fire({
                icon: 'warning',
                title: 'reCAPTCHA Required',
                text: 'Please complete the reCAPTCHA before submitting.',
            });
            return;
        }
        try {
            await axios.post('/api/contact', data);
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'We’ll get back to you shortly.',
            });
            reset()
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to send your message. Please try again later.',
            });
        }
        (window as any).grecaptcha?.reset();
    };


    return (
        <>
            <div className="bg-[#F5F5F5] md:py-20 py-10">
                <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between ">
                    <div className="lg:w-[35%] rounded-[8px]">
                        <header className="bg-[#04359C] p-4 rounded-tl-[8px] rounded-tr-[8px]">
                            <h1 className="font-montserrat font-semibold text-2xl text-white">Contact Details</h1>
                        </header>
                        <div className="px-4 bg-white py-6 rounded-bl-[8px] rounded-br-[8px]">
                            <div className="border-b">
                                <h1 className="text-[#1A1A1A] font-bold font-montserrat">
                                    Office Address
                                </h1>
                                <div className="flex items-start gap-2 py-4 max-w-[80%]">
                                    <MapPin className="text-[#04359C] w-[20%]" />
                                    <p className="text-[#808080] font-montserrat">1, Mech-Weld Lane, opposite NB Plc-Ama By Eke Road, 9th mile corner, Enugu.</p>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-[#1A1A1A] font-bold font-montserrat py-6">
                                    Contact Info
                                </h1>
                                <div className="flex items-start gap-2">
                                    <Mail size={16} className="text-[#04359C]" />
                                    <p className="text-[#808080] font-montserrat">mechweldltd@yahoo.com</p>
                                </div>
                                <div className="flex items-start gap-2 py-4">
                                    <PhoneCall size={16} className="text-[#04359C]" />
                                    <div className="text-[#808080] font-montserrat">
                                        <p>08034101240, 08038807313,</p>
                                        <p>08038743676, 08038606044</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:max-w-[80%]">
                                <Link
                                    href="https://wa.me/2348109082097?text=Hello%20Mech-Weld%2C%20I%27m%20interested%20in%20your%20services"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#04359C] font-montserrat font-bold flex gap-2 border border-[#04359C] rounded-[64px] py-2 px-4 items-center justify-center"
                                >
                                    Whatsapp Message
                                    <div className="bg-[#F2F5FA] p-2 rounded-full">
                                        <Image src={WhatsAppIcon} alt="icon" width={24} height={24} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[55%] bg-white p-6 rounded-[8px]">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                label="Full name"
                                name="name"
                                type="text"
                                placeholder="Enter your full name"
                                register={register("name", {
                                    required: "Full name is required",
                                    pattern: {
                                        value: /^[a-zA-Z\s]{2,30}$/,
                                        message: "Enter a valid name (letters only, 2-30 characters)"
                                    }
                                })}
                                error={errors.name}
                            />
                            <Input
                                label="Email Address"
                                name="email"
                                type="email"
                                placeholder="e.g. johndoe@gmail.com"
                                register={register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        message: "Enter a valid email address"
                                    }
                                })}
                                error={errors.email}
                            />
                            <Textarea
                                label="Message"
                                name="message"
                                placeholder="Write your message..."
                                register={register("message", {
                                    required: "Message is required",
                                    minLength: {
                                        value: 10,
                                        message: "Message must be at least 10 characters"
                                    }
                                })}
                                error={errors.message}
                            />
                            <div className="g-recaptcha mt-4" data-sitekey="6Ld3AYgrAAAAADswz6-j9xOoD6L7X0gKfz5KZhLc"></div>


                            <button
                                type="submit"
                                className={`bg-[#04359C] mt-6 text-white px-4 py-3 font-bold rounded-[64px] font-montserrat flex gap-2 cursor-pointer ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Loading...' : 'Send Message'}
                                {!isSubmitting ? <ArrowRight/> : <Loader/>}
                            </button>
                        </form>
                    </div>
                </div>
                <Script
                  src="https://www.google.com/recaptcha/api.js"
                  strategy="afterInteractive"
                />
            </div>
        </>
    )
}