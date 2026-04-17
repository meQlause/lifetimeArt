"use client";

import { useEffect, useId, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NavbarProps } from '../../utils/interfaces';

export const Navbar: React.FC<NavbarProps> = ({
    links,
    logo = "/Logo.png",
    brand = "LifetimeArt",
    isHeader = false
}) => {
    const [open, setOpen] = useState(false);
    const dialogId = useId();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setMounted(true), 50);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("overflow-hidden", open);
        return () => document.documentElement.classList.remove("overflow-hidden");
    }, [open]);

    const onKey = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
    }, []);

    useEffect(() => {
        if (!open) return;
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onKey]);

    return (
        <header
            className={`my-[20px] lg2:m-0 lg2:h-[96px] lg2:rounded-none lg2:bg-[#101014] bg-[#00000099] fixed max-w-[90%]  mx-[5%] lg2:mx-0 lg2:max-w-[100%] z-30 w-full transition-all duration-300 ease-in-out 
                ${isHeader ? " bg-neutral-600/70 rounded-lg my-[20px]" : "xxl:bg-transparent"}
                ${!mounted && "-translate-y-[20px] opacity-0"}`}
        >
            <div className={`max-w-[1450px] mx-auto lg2:px-[40px] py-3 px-4 rounded-lg h-full lg2:py-[20px] flex items-center justify-between w-full xxl:px-[80px] ${isHeader ? "backdrop-blur-md" : "rounded-lg xxl:backdrop-blur-none backdrop-blur-md"}`}>
                <Link href="/" className="flex items-center gap-2">
                    <span className="relative size-[32px] flex items-center justify-center">
                        <Image 
                            src={logo} 
                            alt={`${brand} logo`} 
                            width={20}
                            height={20}
                            priority
                            unoptimized
                            className="object-contain" 
                        />
                    </span>
                    <span className="text-white text-[24px] font-medium">{brand}</span>
                </Link>

                <nav className="hidden lg2:block">
                    <ul className="space-x-[40px] justify-center items-center flex flex-row xxl:mr-[10px]">
                        {links.map((item) => (
                            <li key={item.href} className="">
                                <Link
                                    href={item.href}
                                    className="block text-white text-[18px] font-[500] leading-tight hover:opacity-90 relative group"
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                    {/* smooth underline on hover */}
                                    <span
                                        aria-hidden
                                        className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-white/90 transition-transform duration-300 ease-out group-hover:scale-x-100"
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button
                    className="inline-flex lg2:hidden items-center justify-center rounded-md text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    aria-haspopup="dialog"
                    aria-controls={dialogId}
                    aria-expanded={open}
                    onClick={() => setOpen(true)}
                >
                    <Menu className="size-[40px]" />
                </button>
            </div>
            <div
                id={dialogId}
                role="dialog"
                aria-modal="true"
                className={`fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300
                ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
                <div
                    className={`fixed inset-0 transition-transform duration-300
                    ${open ? "translate-x-0" : "translate-x-2"}`}
                >
                    <div className="mx-[5%] my-[2%] flex max-w-6xl items-center justify-between px-4 py-4">
                        <Link
                            href="/"
                            className="flex items-center gap-2"
                            onClick={() => setOpen(false)}
                        >
                            <span className="relative size-[32px] flex items-center justify-center">
                                <Image 
                                    src={logo} 
                                    alt={`${brand} logo`} 
                                    width={20}
                                    height={20}
                                    unoptimized
                                    className="object-contain"
                                />
                            </span>
                            <span className="text-white text-[23px] font-medium">{brand}</span>
                        </Link>

                        <button
                            className="inline-flex items-center justify-center rounded-md text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                            aria-label="Close menu"
                            onClick={() => setOpen(false)}
                        >
                            <X className="size-[40px]" />
                        </button>
                    </div>

                    <nav className="px-[40px] pt-[80px]">
                        <ul className="space-y-5">
                            {links.map((item) => (
                                <li key={item.href} className="mb-[24px]">
                                    <Link
                                        href={item.href}
                                        className="block text-white text-2xl leading-tight hover:opacity-90"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header >
    );
}
