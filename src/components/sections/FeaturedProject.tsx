"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { FeaturedProjectProps } from "@/utils/interfaces";
import { FeaturedCarousel } from "./../ui/Carousel";
import { motion } from "framer-motion";

const FeaturedProjectSection: React.FC<FeaturedProjectProps> = ({ eyebrow, heading, subheading, data }) => {
    return (
        <section id="our-work" className="px-[40px] lg:px-0 xxxl:max-w-[1440px] xxl:max-w-[1380px] xl2:max-w-[1200] lg2:max-w-[994px] xs:min-w-[295px] lg2:mx-auto w-full min-w-[375px] py-[120px]">
            <div className="flex flex-col justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="inline-flex items-center rounded-full bg-[#28282C] px-[12px]  text-white text-[16px] py-[8px] mb-3"
                >
                    <span className="font-[600] text-[16px]">{eyebrow}</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.32, ease: "easeOut", delay: 0.06 }}
                    className="text-[48px] font-semibold xxl:max-w-[700px] w-full text-center lg2:max-w-[400px] tracking-tight text-neutral-900"
                >
                    {heading}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.12 }}
                    className="mt-[16px] mb-[120px] text-[20px] w-full lg2:max-w-[500px] max-w-[295px] text-center text-neutral-600"
                >
                    {subheading}
                </motion.p>
            </div>

            <motion.div
                className="flex lg2:hidden flex-col gap-[300px]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <FeaturedCarousel featured={data} />
            </motion.div>

            <div className="hidden lg2:flex flex-col lg2:gap-[20px] xxl:gap-[460px]">
                {data.map((item, index) => {
                    const isEven = (index + 1) % 2 === 0;

                    return (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.32, ease: "easeOut", delay: index * 0.2 }}
                            className={[
                                "bg-[#E9ECF2]  backdrop-blur-sm rounded-xl lg2:p-[20px] xxl:p-[32px] overflow-hidden",
                                "flex justify-center items-center flex-col",
                                isEven ? "lg2:bg-[#0E0F12] lg2:text-white" : "lg2:bg-[#E9ECF2] lg2:text-[#101014]",
                            ].join(" ")}
                        >
                            <div className="flex gap-[80px]">
                                <div className="relative xxxl:min-w-[648px] xxxl:h-[500x] xxl:min-w-[568px] xxl:h-[500px] xl2:min-w-[560px] xl2:h-[492px] lg2:min-w-[432px] lg2:h-[380px] min-w-[295px] min-h-[337px] w-full rounded-lg overflow-hidden bg-neutral-200">
                                    <Image
                                        src={item.image.src}
                                        alt={item.image.alt}
                                        width={1000}
                                        height={1000}
                                        className="w-full h-full object-cover"
                                        priority
                                        unoptimized
                                    />
                                </div>

                                <div className="flex flex-col justify-center">
                                    <h3
                                        className={[
                                            "text-[40px] font-[500] tracking-tight",
                                            "text-[#101014]",
                                            isEven ? "lg2:text-white" : "lg2:text-[#101014]",
                                        ].join(" ")}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className={[
                                            "mt-[15px] text-[16px] leading-[170%] text-neutral-600",
                                            isEven ? "lg2:text-neutral-300" : "lg2:text-neutral-700",
                                        ].join(" ")}
                                    >
                                        {item.description}
                                    </p>
                                    <div className="mt-[24px] flex flex-wrap gap-2">
                                        {item.tags?.map((t, i) => (
                                            <span
                                                key={i}
                                                className={[
                                                    "inline-flex items-center rounded-full px-2.5 py-1 text-xs",
                                                    "bg-[#28282C] text-white",
                                                    isEven ? "lg2:bg-white/10 lg2:text-white" : "",
                                                ].join(" ")}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {item.testimonial?.quote && (
                                        <div className="xl2:block hidden lg2:px-0 lg2:col-span-2 lg2:pt-6">
                                            <div className="flex items-start gap-2]">
                                                <Quote
                                                    className={[
                                                        "w-4 h-4 mt-1 shrink-0",
                                                        "text-neutral-400",
                                                        isEven ? "lg2:text-neutral-400" : "lg2:text-neutral-500",
                                                    ].join(" ")}
                                                    aria-hidden
                                                />
                                                <p
                                                    className={[
                                                        "text-[18px] leading-[170%] text-neutral-700",
                                                        isEven ? "lg2:text-neutral-300" : "lg2:text-neutral-700",
                                                    ].join(" ")}
                                                >
                                                    {item.testimonial.quote}
                                                </p>
                                            </div>
                                            <div className="mt-[24px] flex ml-[24px] lg2:mx-0 items-center gap-3">
                                                {item.testimonial.avatar && (
                                                    <div className="relative size-[50px] rounded-full overflow-hidden bg-neutral-200">
                                                        <Image
                                                            src={item.testimonial.avatar}
                                                            alt={item.testimonial.author}
                                                            width={50}
                                                            height={50}
                                                            className="object-cover"
                                                            unoptimized
                                                        />
                                                    </div>
                                                )}
                                                <span
                                                    className={[
                                                        "text-[16px] text-neutral-700",
                                                        isEven ? "lg2:text-neutral-200" : "lg2:text-neutral-700",
                                                    ].join(" ")}
                                                >
                                                    {item.testimonial.author}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {item.testimonial?.quote && (
                                <div className="lg2:block xl2:hidden hidden px-5 pb-5 lg2:px-0 lg2:col-span-2">
                                    <div className="flex items-start pt-[20px] gap-2">
                                        <Quote
                                            className={[
                                                "w-4 h-4 mt-1 shrink-0",
                                                "text-neutral-400",
                                                isEven ? "lg2:text-neutral-400" : "lg2:text-neutral-500",
                                            ].join(" ")}
                                            aria-hidden
                                        />
                                        <p
                                            className={[
                                                "text-[18px] leading-[170%] text-neutral-700",
                                                isEven ? "lg2:text-neutral-300" : "lg2:text-neutral-700",
                                            ].join(" ")}
                                        >
                                            {item.testimonial.quote}
                                        </p>
                                    </div>
                                    <div className="mt-[24px] flex ml-[24px]  items-center gap-3">
                                        {item.testimonial.avatar && (
                                            <div className="relative size-[50px] rounded-full overflow-hidden bg-neutral-200">
                                                <Image
                                                    src={item.testimonial.avatar}
                                                    alt={item.testimonial.author}
                                                    width={50}
                                                    height={50}
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            </div>
                                        )}
                                        <span
                                            className={[
                                                "text-[16px] text-neutral-700",
                                                isEven ? "lg2:text-neutral-200" : "lg2:text-neutral-700",
                                            ].join(" ")}
                                        >
                                            {item.testimonial.author}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </motion.article>
                    );
                })}
            </div>
        </section>
    );
};

export default FeaturedProjectSection;
