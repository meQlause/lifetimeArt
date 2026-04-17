"use client";

import { useCarouselDrag } from "@/hooks/CarouselHook";
import { CarouselProps, FeaturedCarouselProps, TestimonialCarouselProps } from "@/utils/interfaces";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import React from "react";



export const Carousel: React.FC<CarouselProps> = ({ className, images }) => {
    const { containerRef, trackRef, active, goTo, eventProps } = useCarouselDrag({
        length: images.length,
        startIndex: 0,
    });

    return (
        <div
            ref={containerRef}
            className={`overflow-hidden relative max-w-[1920px] xxxl:mx-auto ${className ?? ""}`}
        >
            <div
                className="hidden lg2:flex ts-row ts-animate w-full gap-10 whitespace-nowrap"
                role="group"
                aria-roledescription="carousel"
            >
                {[...images, ...images].map((img, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                        className="inline-block shrink-0 h-[400px] w-[320px] xxl:h-[500] xxl:w-[400] lg2:max-w-[400px]"
                        aria-roledescription="slide"
                        aria-label={`${(i % images.length) + 1} of ${images.length}`}
                    >
                        <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                            <Image src={img.src} alt={img.alt} fill className="object-cover" />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="lg2:hidden">
                <div
                    ref={trackRef}
                    className="flex will-change-transform select-none"
                    style={{ transform: "translateX(0px)" }}
                    role="group"
                    aria-roledescription="carousel"
                    {...eventProps}
                >
                    <div className="flex w-full gap-[30px]">
                        {images.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                                className="shrink-0 h-[400px] w-[320px] xxl:h-[500] xxl:w-[400] lg2:max-w-[400px]"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                                    <Image src={img.src} alt={img.alt} fill className="object-cover" unoptimized />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {images.length > 1 && (
                    <div className="lg2:hidden mt-[40px] flex items-center justify-center gap-2">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`h-2.5 w-2.5 rounded-full transition-all ${i === active ? "bg-neutral-900 w-6" : "bg-neutral-400/70"
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
    className,
    testimonials,
}) => {
    const { containerRef, trackRef, active, goTo, eventProps } = useCarouselDrag({
        length: testimonials.length, startIndex: 0,
    });

    return (
        <div ref={containerRef} className={`overflow-hidden relative ${className ?? ""}`}>
            <div
                ref={trackRef}
                className="flex will-change-transform select-none"
                style={{ transform: "translateX(0px)" }}
                role="group"
                aria-roledescription="carousel"
                {...eventProps}
            >
                {testimonials.map((t, i) => (
                    <div key={i} className="shrink-0 h-[317px] mr-4 w-full max-w-[720px] ">
                        <article className="mt-[0px] p-[32px] bg-[#FAFAFA] border-[#E6E6E6] rounded-2xl shadow-sm w-full h-[317px]">
                            {!!t.rating && t.rating > 0 && (
                                <div className="flex gap-1 mb-[9px]">
                                    {Array.from({ length: t.rating }).map((_, s) => (
                                        <span key={s} aria-hidden className="text-black text-lg">
                                            ★
                                        </span>
                                    ))}
                                </div>
                            )}

                            <p className="text-[14px] leading-[170%] font-[400] text-neutral-700 mb-4">
                                {t.content}
                            </p>

                            <div className="flex items-center gap-[14px]">
                                {t.avatar && (
                                    <div className="relative size-[50px] rounded-full overflow-hidden bg-neutral-200">
                                        <Image 
                                            src={t.avatar} 
                                            alt={t.author} 
                                            width={50} 
                                            height={50} 
                                            className="object-cover" 
                                            unoptimized 
                                        />
                                    </div>
                                )}
                                <span className="text-[14px] text-neutral-800 font-medium">{t.author}</span>
                            </div>
                        </article>
                    </div>
                ))}
            </div>

            {testimonials.length > 1 && (
                <div className="mt-[40px] flex items-center justify-center gap-2">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`h-2.5 w-2.5 rounded-full transition-all ${i === active ? "bg-neutral-900 w-6" : "bg-neutral-400/70"
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};


export const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({
    className,
    featured,
    startIndex = 0,
    onChange,
}) => {
    const { containerRef, trackRef, active, goTo, eventProps } = useCarouselDrag({
        length: featured.length,
        startIndex,
        onChange,
    });

    return (
        <div ref={containerRef} className={`overflow-hidden relative ${className ?? ""}`}>
            <div
                ref={trackRef}
                className="flex will-change-transform gap-[30px] select-none"
                style={{ transform: "translateX(0px)" }}
                role="group"
                aria-roledescription="carousel"
                {...eventProps}
            >
                {featured.map((item, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={index} className="shrink-0 w-full">
                            <article
                                className={[
                                    "mt-6 bg-[#E9ECF2] backdrop-blur-sm rounded-xl lg2:p-[20px] overflow-hidden",
                                    "lg2:grid lg2:grid-cols-[560px_1fr] lg2:rounded-[10px]",
                                    isEven ? "lg2:bg-[#0E0F12] lg2:text-white" : "lg2:bg-[#E9ECF2] lg2:text-[#101014]",
                                ].join(" ")}
                            >
                                <div className="p-4 lg2:p-0">
                                    <div className="relative lg2:rounded-[10px] overflow-hidden bg-neutral-200 aspect-[4/3] lg2:aspect-auto lg2:h-full">
                                        <Image
                                            src={item.image.src}
                                            alt={item.image.alt}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 640px"
                                            priority
                                            unoptimized
                                        />
                                    </div>
                                </div>

                                <div className="px-5 pb-5 lg2:px-10 lg2:py-8">
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
                                            "mt-[15px] text-[16px] leading-[170%] text-neutral-600 -tracking-[0.1px]]",
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
                                        <div className="xl2:block hidden px-5 pb-5 lg2:px-0 lg2:col-span-2 lg2:py-6">
                                            <div className="flex items-start gap-2">
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
                                                            fill
                                                            className="object-cover"
                                                            sizes="28px"
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

                                {item.testimonial?.quote && (
                                    <div className="xl2:hidden px-5 pb-5 lg2:px-0 lg2:col-span-2 lg2:py-6">
                                        <div className="flex items-start gap-2">
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
                            </article>
                        </div>
                    );
                })}
            </div>

            {featured.length > 1 && (
                <div className="mt-[84px] flex items-center justify-center gap-2">
                    {featured.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`h-2.5 w-2.5 rounded-full transition-all ${i === active ? "bg-neutral-900 w-6" : "bg-neutral-400/70"
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
