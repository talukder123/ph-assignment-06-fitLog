'use client';

import React, { useContext } from 'react';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { workoutsContext } from '@/Context/WorkOutContext';

const Navbar = () => {

    const { todaysPlan, later } = useContext(workoutsContext);

    const pathname = usePathname();
    return (
        <div>
            <nav className='bg-[#0C0D10] py-5'>
                <div className='flex container mx-auto justify-between items-center'>

                    <div className='flex justify-center items-center gap-2'>
                        <Image src={logo} alt='logo'></Image>
                        <h2 className='text-2xl font-semibold'>FITLOG</h2>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                        <Link
                            href="/"
                            className={`rounded-4xl px-4 py-2 ${pathname === "/"
                                ? "bg-[#c2f8003d] text-[#C2F800]"
                                : "text-[#9CA3AF]"
                                }`}
                        >
                            Workouts
                        </Link>

                        <Link
                            href="/my-plan"
                            className={`rounded-4xl px-4 py-2 ${pathname === "/my-plan"
                                ? "bg-[#c2f8003d] text-[#C2F800]"
                                : "text-[#9CA3AF]"
                                }`}
                        >
                            MyPlan
                        </Link>
                    </div>

                    <div className='flex justify-center items-center gap-5'>
                        <Link href="/my-plan">
                        <button className="flex items-center gap-2 font-semibold">
                            Plan
                            <span className="rounded-full bg-[#C2F800] px-2.5 py-1 text-sm font-bold text-black">
                                {todaysPlan.length}
                            </span>
                        </button>
                        </Link>
                        
                        <Link href="/my-plan">
                        <button className="flex items-center gap-2 text-gray-400 font-semibold">
                            Saved
                            <span className="rounded-full border-2 border-gray-400 bg-black px-2.5 py-1 text-sm font-bold text-white">
                                {later.length}
                            </span>
                        </button>
                        </Link>
                        
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;