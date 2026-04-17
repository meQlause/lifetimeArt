"use client";

import Image from "next/image";
import { FooterLink } from "../ui/FooterLink";

const Footer = () => {
    return (
        <footer className="max-w-[1440px] mx-auto w-full min-w-[375px] text-neutral-300 px-[20px] pt-[20px]">
            <div className="max-w-[1400px] bg-neutral-900 rounded-t-[12px] px-[20px] py-[60px] xxl:p-[80px]">
                <div className="flex flex-col lg2:flex-row lg2:mt-[20px] lg2:items-start lg2:justify-between">

                    <div className="flex items-center gap-2 mb-[40px]">
                        <div className="relative size-[32px] flex items-center justify-center">
                            <Image
                                src="/Logo.png"
                                alt="LifetimeArt logo"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                        </div>
                        <span className="text-[23px] font-[500] text-white">LifetimeArt</span>
                    </div>

                    <div className="mt-5 lg2:m-0">
                        <p className="text-[24px] font-[500] text-white mb-[17px]">Quick links</p>
                        <div className="grid grid-cols-2 gap-2 lg2:gap-x-[180px] text-sm">
                            <FooterLink href="#">About us</FooterLink>
                            <FooterLink href="#">Testimonials</FooterLink>
                            <FooterLink href="#">Our work</FooterLink>
                            <FooterLink href="#">FAQs</FooterLink>
                            <FooterLink href="#">Services</FooterLink>
                            <FooterLink href="#">Contact</FooterLink>
                        </div>
                    </div>
                </div>

                <div className="my-5 border-t border-neutral-800" />

                <p className="text-[18px] font-[600] text-neutral-100 mt-[40px]">
                    © {new Date().getFullYear()} LifetimeArt. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;