'use client';

import { Oswald } from "next/font/google";

import React, { useContext } from 'react';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { workoutsContext } from '@/Context/WorkOutContext';

import { useState } from 'react';
import { Menu, X } from 'lucide-react'

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const Navbar = () => {

    const { todaysPlan, later } = useContext(workoutsContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    return (
            <nav className='bg-[#0C0D10] py-4 px-4 md:px-0 sticky top-0 z-50'>
                <div className='flex container mx-auto justify-between items-center'>

                    <div className='flex justify-center items-center gap-2'>
                        <Image src={logo} alt='logo'></Image>
                        <h2 className={`${oswald.className} text-2xl font-semibold`}>FITLOG</h2>
                    </div>

                    <div className="hidden md:flex items-center justify-center gap-3">
                        <Link
                            href="/"
                            className={`rounded-4xl px-4 py-2 ${pathname === "/"
                                ? "bg-[#c2f80023] text-[#C2F800]"
                                : "text-[#9CA3AF] hover:bg-gray-800"
                                }`}
                        >
                            Workouts
                        </Link>

                        <Link
                            href="/my-plan"
                            className={`rounded-4xl px-4 py-2 ${pathname === "/my-plan"
                                ? "bg-[#c2f8003d] text-[#C2F800]"
                                : "text-[#9CA3AF] hover:bg-gray-800"
                                }`}
                        >
                            MyPlan
                        </Link>
                    </div>

                    <div className='hidden md:flex justify-center items-center gap-5'>
                        <Link href="/my-plan">
                            <button className="flex items-center gap-2 font-semibold">
                                Plan
                                <span className="rounded-full px-3 bg-[#C2F800] py-1 text-sm font-bold text-black">
                                    {todaysPlan.length}
                                </span>
                            </button>
                        </Link>

                        <Link href="/my-plan">
                            <button className="flex items-center gap-2 text-gray-400 font-semibold">
                                Saved
                                <span className="rounded-full px-3 border-2 border-gray-400 bg-black py-1 text-sm font-bold text-white">
                                    {later.length}
                                </span>
                            </button>
                        </Link>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="md:hidden text-white"
                    >
                        {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden mt-4 flex flex-col gap-2 px-4">
                        <Link
                            href="/"
                            onClick={() => setIsMenuOpen(false)}
                            className={`rounded-2xl font-bold px-4 py-3 text-center ${pathname === "/"
                                ? "bg-[#c2f80023] text-[#C2F800]"
                                : "text-[#9CA3AF] hover:bg-gray-800"
                                }`}
                        >
                            Workouts
                        </Link>

                        <Link
                            href="/my-plan"
                            onClick={() => setIsMenuOpen(false)}
                            className={`rounded-2xl font-bold px-4 py-3 text-center ${pathname === "/my-plan"
                                ? "bg-[#c2f8003d] text-[#C2F800]"
                                : "text-[#9CA3AF] hover:bg-gray-800"
                                }`}
                        >
                            MyPlan
                        </Link>
                    </div>
                )}
            </nav>
    );
};

export default Navbar;