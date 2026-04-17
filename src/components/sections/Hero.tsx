"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative mx-auto w-full min-w-[375px] bg-[#101014] xxl:h-[900px] h-[834px] overflow-hidden text-white">

            <div className="absolute xxl:hidden left-[20px] right-[20px] top-[113px] h-[695px] z-0 pointer-events-none">
                <Parallax speed={-20} className="relative -top-[10px] xs:top-[0px] h-full rounded-[12px] w-full">
                    <div className="relative h-[695px] w-full overflow-hidden rounded-[12px]">
                        <Image
                            src="/bg.png"
                            alt="Interior background"
                            height={1000}
                            width={1000}
                            className="h-full w-full object-cover"
                            priority
                            unoptimized
                        />
                        <div className="absolute inset-0 bg-[#101014CC]/80" />
                    </div>
                </Parallax>
            </div>

            <div className="relative max-w-[1440px] xxl:px-[80px] flex flex-col mx-auto z-20 xxl:flex-row xxl:justify-between xxl:items-center xxl:gap-[80px] items-start justify-end h-full text-center">
                <div className="not-xxl:px-[40px]">
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="mb-[12px]"
                    >
                        <button className="px-[12px]  max-w-[210px] flex-row gap-2 justify-center items-center py-[6px] rounded-full bg-[#28282C]/60 backdrop-blur-md text-[10px] font-medium uppercase tracking-[1px] flex">
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="flex justify-center items-center bg-white/70 size-[18px] rounded-full"
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.12 }}
                                    className="bg-white size-[8px] rounded-full"
                                />
                            </motion.div>
                            <span className="font-thin text-[14px]">Available for work</span>
                        </button>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.04 }}
                        className="text-[40px] xl2:max-w-[900px] lg2:text-[56px] text-left font-[500] -tracking-[1px] leading-[120%] mb-[10px] w-full min-w-[292px]"
                    >
                        Your trusted partner for quality home improvement
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                        className="text-[16px] lg2:text-[20px] text-[#D0D1DB] font-[400] leading-[170%] -tracking-[0.3px] mb-[20px] w-full text-left min-w-[292px] max-w-[300px] lg2:max-w-[450px] xxl:max-w-[470px]"
                    >
                        LifetimeArt delivers expert home improvements, creating beautiful and functional spaces with quality craftsmanship.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.16 }}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex cursor-pointer mb-[60px] mt-[56px] items-center bg-white/10 backdrop-blur-md px-[20px] rounded-full"
                    >
                        <span className="whitespace-nowrap text-[16px]">Work with us</span>
                        <motion.div
                            whileHover={{ x: 6 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="bg-white rounded-full p-1.5 size-[40px] flex ml-[24px] my-[10px] justify-center items-center"
                        >
                            <ArrowRight className="text-black size-[20px] -rotate-45" />
                        </motion.div>
                    </motion.button>
                </div>

                <div className="hidden xxl:flex xxl:justify-end xxl:items-end h-[845px] relative overflow-hidden w-[1000px] rounded-[12px]">
                    <Parallax speed={-25} className="absolute inset-0">
                        <div className="absolute -inset-12 will-change-transform">
                            <div className="relative h-full w-full">
                                <Image
                                    src="/bg.png"
                                    alt="Interior background"
                                    fill
                                    className="object-cover"
                                    priority
                                    unoptimized
                                />
                            </div>
                        </div>
                    </Parallax>

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/0 z-10" />

                    <motion.div
                        initial={{ opacity: 0, x: 16, y: 16 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.3, ease: "easeOut", delay: 0.18 }}
                        className="hidden xxl:block xxxl:hidden h-[181px] w-[240px] p-[24px] z-20 mr-[20px] mb-[20px] bg-transparent backdrop-blur-lg overflow-hidden rounded-[12px]"
                    >
                        <div className="flex gap-1">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <span key={i} aria-hidden className="text-white text-lg">★</span>
                            ))}
                        </div>
                        <span className="text-[14px] font-[400] text-left flex">
                            &quot;LifetimeArt has been a game-
                            changer for my home. Their
                            ability to blend functionality
                            with exquisite design is
                            unparalleled.&quot;
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
