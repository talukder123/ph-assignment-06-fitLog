'use client';

import { workoutsContext } from '@/Context/WorkOutContext';
import { IWorkout } from '@/type/type.app';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import TodaysCard from '@/components/todaysCard';
import SavelaterCard from '@/components/savelaterCard';

import { Oswald } from "next/font/google";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const MyPlanPage = () => {

    const [activeTab, setActiveTab] = useState<Tab>("today");

    const handleTodayClick = () => {
        setActiveTab("today");
    };

    const handleSavedClick = () => {
        setActiveTab("saved");
    };

    type Tab = "today" | "saved";

    const { todaysPlan, later } = useContext(workoutsContext);

    const [sortBy, setSortBy] = useState<string>('');

    const sortLabels: Record<string, string> = {
        '': 'Sort by',
        duration: 'Duration',
        calories: 'Calories',
        rating: 'Rating',
    };

    const getSortedList = (list: IWorkout[]) => {
        if (!sortBy) return list;

        const sorted = [...list];

        switch (sortBy) {
            case 'duration':
                sorted.sort((a, b) => a.duration - b.duration);
                break;
            case 'calories':
                sorted.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
                break;
            case 'rating':
                sorted.sort((a, b) => b.rating - a.rating);
                break;
        }

        return sorted;
    };

    const activePlan = getSortedList(activeTab === "today" ? todaysPlan : later);

    const totalDuration = activePlan.reduce(
        (total: number, workout: IWorkout) => total + workout.duration,
        0);

    const totalCalories = activePlan.reduce(
        (total: number, workout: IWorkout) => total + workout.caloriesBurned, 0
    );


    return (
        <div className='container mx-auto'>

            <div>
                <div className='my-6'>
                    <h2 className={`${oswald.className} uppercase text-3xl font-bold`}>My Plan</h2>
                    <p className='text-[14px] mt-2 text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</p>
                </div>

                <div className="grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-[#0f1115] p-6">
                    <div className="flex flex-col gap-1 px-6 first:pl-0">
                        <span className="text-sm text-gray-400">Exercises</span>
                        <span className="text-3xl font-bold text-lime-400">{activePlan.length}</span>
                    </div>
                    <div className="flex flex-col gap-1 px-6">
                        <span className="text-sm text-gray-400">Minutes</span>
                        <span className="text-3xl font-bold text-white">{totalDuration}</span>
                    </div>
                    <div className="flex flex-col gap-1 px-6 last:pr-0">
                        <span className="text-sm text-gray-400">Calories</span>
                        <span className="text-3xl font-bold text-white">{totalCalories}</span>
                    </div>
                </div>


                <div className='flex justify-between items-center'>
                    <div className="flex items-center gap-1 w-fit my-4 rounded-2xl border border-white/10 bg-[#15171c] p-1 mb-5">
                        <button
                            onClick={() => handleTodayClick()}
                            className={`px-5 py-2 rounded-2xl text-sm transition-colors ${activeTab === "today"
                                ? "font-bold bg-[#2B303D] text-[#C2F800]"
                                : "text-gray-400"
                                }`}>Today&#39;s Plan</button>
                        <button
                            onClick={() => handleSavedClick()}
                            className={`px-5 py-2 rounded-2xl text-sm transition-colors ${activeTab === "saved"
                                ? "font-bold bg-[#2B303D] text-[#C2F800]"
                                : "text-gray-400"
                                }`}>Saved</button>
                    </div>

                    <div className='flex gap-3 justify-center items-center'>
                        <h2 className='text-[#8A92A0] text-[12px]'>SORT BY</h2>
                        <div>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn m-1 bg-[#15171c] border-white/10 text-white">
                                    {sortLabels[sortBy]}
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-[#15171c] border border-white/10 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a onClick={() => setSortBy('duration')}>Duration</a></li>
                                    <li><a onClick={() => setSortBy('calories')}>Calories</a></li>
                                    <li><a onClick={() => setSortBy('rating')}>Rating</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>




                <section>
                    {
                        activePlan.length === 0 ?
                            <div className='border border-dashed border-gray-700 rounded-2xl flex items-center justify-center py-20'>
                                <div className='flex flex-col items-center justify-center text-center space-y-3 max-w-md'>
                                    <h2 className={` ${oswald.className} uppercase font-bold text-white text-lg tracking-wide`}>
                                        Nothing here yet
                                    </h2>
                                    <p className='text-[14px] text-gray-500'>
                                        Browse the library and add a lift to get today moving.
                                    </p>
                                    <Link href="/">
                                        <button className='mt-2 font-bold rounded-full bg-[#C2F800] text-black py-2.5 px-6 text-sm'>
                                            Go to Workouts
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            :

                            activeTab === "today" ? activePlan.map((workout: IWorkout) => <TodaysCard key={workout.id} workout={workout} />)
                                :
                                activePlan.map((workout: IWorkout) => <SavelaterCard key={workout.id} workout={workout} />)
                    }
                </section>



            </div>


        </div>
    );
};

export default MyPlanPage;