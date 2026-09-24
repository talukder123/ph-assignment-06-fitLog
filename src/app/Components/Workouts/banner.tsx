import Image from 'next/image';
import React from 'react';
import BannerImg from '@/assets/banner.png'
import Link from 'next/link';

const BannerSection = () => {
    return (
        <div>
            <div className='container mx-auto flex justify-between items-center p-15 bg-[#15171D] mt-7 rounded-3xl border-[#9CA3AF] '>
                <div>
                    <p className='text-[#C2F800]'>WORKOUT LIBRARY</p>
                    <h2 className='text-5xl'>TRAIN WITH INTENT. LOG <br />
                        EVERY SET.
                    </h2>
                    <p className='text-[#9CA3AF]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                        into today's plan, and watch the week's work add up.</p>
                    
                    <Link href="/">
                    <button className='py-3 px-6 bg-[#C2F800] rounded-2xl text-black'>BROWSE WORKOUTS</button>
                    </Link>
                </div>
                <Image src={BannerImg} alt='banner image'></Image>
            </div>
        </div>
    );
};

export default BannerSection;