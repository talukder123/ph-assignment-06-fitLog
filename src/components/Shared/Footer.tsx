import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='container mx-auto flex justify-between items-center py-6 mt-15 border-t border-gray-800 p-4'>
            <div className='flex gap-3 justify-between items-center'>
                <Image src={logo} alt='footer logo'></Image>
                <h2 className='font-bold'>FITLOG</h2>
            </div>
            <p className='text-[#6B7280] text-[14px]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
    );
};

export default Footer;