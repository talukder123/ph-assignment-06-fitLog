'use client';

import React from 'react';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
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

                    <div className='flex justify-center items-center'>
                        <button>Plan</button>
                        <button>Saved</button>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;