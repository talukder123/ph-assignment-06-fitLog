import Link from 'next/link';
import React from 'react';

const notfound = () => {
    return (
        <div className="flex min-h-[80vh] items-center justify-center px-6">
  <div className="text-center">
    <h1 className="text-[120px] font-black leading-none tracking-tight text-[#C2F800] md:text-[180px]">
      404
    </h1>

    <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
      Oops! Page Not Found
    </h2>

    <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#9CA3AF] md:text-base">
      The page you’re looking for doesn’t exist!
    </p>

    <Link href={"/"}>
    <button className="mt-7 cursor-pointer rounded-full bg-[#C2F800] px-6 py-3 font-bold text-black transition hover:bg-[#d4ff4d]">
      Back to Home
    </button>
    </Link>
    
  </div>
</div>
    );
};

export default notfound;