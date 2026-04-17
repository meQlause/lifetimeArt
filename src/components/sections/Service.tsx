"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ServiceSectionProps } from "@/utils/interfaces";
import { Accordion } from "@/components/ui/AccordionItems";

const ServiceSection: React.FC<ServiceSectionProps> = ({
    eyebrow,
    heading,
    subheading,
    image,
    data,
}) => {
    const [open, setOpen] = useState<number>(0);
    const toggle = (i: number) => setOpen((prev) => (prev === i ? -1 : i));

    return (
        <section id="services" className="w-full min-w-[375px] bg-[#FAFAFA] px-[40px] xxl:px-[80px] py-[120px]">
            <div className="flex flex-col justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="inline-flex items-center rounded-full bg-[#28282C] px-[12px] text-white text-[16px] py-[8px] mb-3"
                >
                    <span className="font-[600] text-[16px]">{eyebrow}</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.06 }}
                    className="text-[48px] font-semibold tracking-tight text-neutral-900"
                >
                    {heading}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.12 }}
                    className="mt-2 text-[20px] w-[295px] text-center text-neutral-600 xxl:w-[800px]"
                >
                    {subheading}
                </motion.p>
            </div>

            <div className="max-w-[1440px] mx-auto mt-[96px] flex flex-col lg2:flex-row gap-[40px] items-start justify-center lg2:gap-[80px]">
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    animate={{ scale: open >= 0 ? 1.02 : 1 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="relative mt-[15px] overflow-hidden rounded-xl bg-neutral-100 w-full min-h-[330px] lg2:min-h-[493px] lg2:min-w-[432px] xxl:min-w-[600px] xxl:min-h-[685px] xxxl:min-w-[680px] xxxl:min-h-[777px]"
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 640px"
                    />
                </motion.div>

                <div className="mt-[80px] lg2:my-auto w-full">
                    {data.map((item, index) => {
                        const isOpen = open === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.28, ease: "easeOut", delay: index * 0.06 }}
                            >
                                <Accordion.service
                                    index={index}
                                    isOpen={isOpen}
                                    onToggle={toggle}
                                    icon={item.icon}
                                    title={item.title}
                                >
                                    <motion.p
                                        initial={false}
                                        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="text-neutral-600"
                                    >
                                        {item.description}
                                    </motion.p>
                                </Accordion.service>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
