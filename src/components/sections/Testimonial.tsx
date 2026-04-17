"use client";

import { TestimonialsProps } from "@/utils/interfaces";
import { TestimonialType } from "@/utils/types";
import Image from "next/image";
import { TestimonialCarousel } from "../ui/Carousel";

const TestimonialSection: React.FC<TestimonialsProps> = (
    { eyebrow, heading, subheading, testimonial, pager }) => {
    const TestiCard = (t: TestimonialType, i: number) => (
        <div
            key={`${t.author}-${i}`}
            className={`flex flex-col justify-between shrink-0 w-[343px] h-[315px] rounded-2xl shadow-sm border border-[#E6E6E6]/70 p-[32px] ${i % 2 === 0 ? "bg-[#FAFAFA]" : "bg-[#E9ECF2]"}`}
        >
            <div>
                <div className="flex gap-1 mb-2">
                    {Array.from({ length: t.rating }).map((_, s) => (
                        <span key={s} aria-hidden className="text-black text-lg">
                            ★
                        </span>
                    ))}
                </div>
                <p className="text-[14px] whitespace-normal break-words leading-[170%] text-neutral-700 mb-4">{t.content}</p>
            </div>
            <div className="flex items-center gap-3">
                <div className="relative size-[40px] rounded-full overflow-hidden bg-neutral-200">
                    <Image 
                        src={t.avatar} 
                        alt={t.author} 
                        width={40} 
                        height={40} 
                        className="object-cover" 
                        unoptimized
                    />
                </div>
                <span className="text-[14px] text-neutral-800 font-medium">{t.author}</span>
            </div>
        </div>
    );

    return (
        <section className="xs:px-[40px] lg2:px-0 max-w-[1960px] xxxl:mx-auto w-full min-w-[375px] py-[120px]">
            <div className="flex flex-col justify-center items-center mb-[96px]">
                <div className="inline-flex items-center rounded-full bg-[#28282C] text-white text-[16px] px-[12px] py-[8px] mb-[8px]">
                    {eyebrow}
                </div>

                <h2 className="text-[48px] text-center font-semibold tracking-tight text-neutral-900 mb-[16px]">
                    {heading}
                </h2>
                <p className="mt-2 text-[20px] w-[295px] lg2:w-[600px] text-center text-neutral-600">
                    {subheading}
                </p>
            </div>
            <div className="lg2:hidden block ">
                <TestimonialCarousel testimonials={testimonial} />
            </div>

            {pager && pager.total > 1 && (
                <div className="mt-6 flex justify-center gap-2" aria-label="testimonial pagination">
                    {Array.from({ length: pager.total }).map((_, i) => (
                        <span
                            key={i}
                            aria-current={i === pager.current}
                            className={`h-1.5 w-1.5 rounded-full bg-neutral-300 ${i === pager.current ? "scale-110 bg-neutral-700" : "opacity-70"
                                }`}
                        />
                    ))}
                </div>
            )}

            <div className="ts-lg2 mt-[96px]">
                <div className="overflow-hidden">
                    <div className="ts-row ts-animate flex gap-4 whitespace-nowrap will-change-transform">
                        {Array(4)
                            .fill([...testimonial.slice()])
                            .flat().map((t, i) => TestiCard(t, i))}
                    </div>
                </div>
                <div className="overflow-hidden mt-[48px]">
                    <div className="ts-row ts-animate ts-reverse flex gap-[16px] whitespace-nowrap will-change-transform">
                        {Array(6)
                            .fill([...testimonial.slice().reverse()])
                            .flat().map(
                                (t, i) => TestiCard(t, i)
                            )}
                    </div>
                </div>
            </div>

        </section>
    );
}

export default TestimonialSection