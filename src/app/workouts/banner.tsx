import Image from 'next/image';
import React from 'react';
import BannerImg from '@/assets/banner.png'

import { Oswald, Inter } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const BannerSection = () => {
    return (
        <div>
            <div className='container mx-auto flex flex-col justify-between items-center p-6 bg-[#15171D] mt-7 rounded-3xl md:flex-row md:p-15 md:items-start'>
                <div className='space-y-7'>
                    <p className={`${inter.className} text-[#C2F800] text-[11px]`}>WORKOUT LIBRARY</p>
                    <h2 className={`${oswald.className} text-5xl text-white font-bold`}>TRAIN WITH INTENT. LOG <br />
                        EVERY SET.
                    </h2>
                    <p className='text-[#9CA3AF] '>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                        into today&apos;s plan, and watch the week&apos;s work add up.</p>
                    
                    <a href="#workoutSection">
                    <button className={`${inter.className} py-3 font-bold px-6 bg-[#C2F800] rounded-2xl text-black hover:cursor-pointer`}>BROWSE WORKOUTS</button>
                    </a>
                </div>
                <div className=''>
                    <Image src={BannerImg} alt='banner image'></Image>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;