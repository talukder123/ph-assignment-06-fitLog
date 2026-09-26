import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';

import { Oswald, Inter } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Footer = () => {
    return (
        <div className="container mx-auto mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-800 p-4 py-6 text-center sm:flex-row sm:text-left md:mt-15">
            <div className="flex items-center justify-between gap-3">
                <Image src={logo} alt="footer logo" />
                <h2 className={`${oswald.className} font-bold`}>FITLOG</h2>
            </div>

            <p className="text-[14px] text-[#6B7280]">
                © 2026 FitLog — Workout Library. Train hard, log honest.
            </p>
        </div>
    );
};

export default Footer;