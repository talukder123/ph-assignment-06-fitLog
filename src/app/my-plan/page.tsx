'use client';

import { workoutsContext } from '@/Context/WorkOutContext';
import { IWorkout } from '@/type/type.app';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import TodaysCard from '@/components/todaysCard';
import SavelaterCard from '@/components/savelaterCard';

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

    const activePlan = activeTab === "today" ? todaysPlan : later;
    

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
                    <h2 className='uppercase text-3xl font-bold'>My Plan</h2>
                    <p className='text-[14px] text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</p>
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


                <div className="flex items-center gap-1 w-fit my-4 rounded-2xl border border-white/10 bg-[#15171c] p-1 mb-5">
                    <button
                        onClick={() => handleTodayClick()}
                        className={`px-5 py-2 rounded-2xl text-sm transition-colors ${activeTab === "today"
                                ? "font-bold bg-[#2B303D] text-white"
                                : "text-gray-400"
                            }`}>Today&#39;s Plan</button>
                    <button
                        onClick={() => handleSavedClick()}
                        className={`px-5 py-2 rounded-2xl text-sm transition-colors ${activeTab === "saved"
                                ? "font-bold bg-[#2B303D] text-white"
                                : "text-gray-400"
                            }`}>Saved</button>
                </div>




                <section>
                    {
                        activePlan.length === 0 ?
                        <div className='border border-gray-400 flex items-center justify-center'>
                            <div className='p-8 flex flex-col items-center justify-center space-y-3'>
                                <h2 className='uppercase font-bold'>Nothing here yet</h2>
                                <p className='text-[14px] text-gray-500'>Browse the library and add a lift to get today moving.</p>
                                <Link href="/">
                                <button className=' font-bold rounded-4xl bg-[#C2F800] text-black py-2 px-3'>
                                    Go to Workout
                                </button>
                                </Link>
                            </div>
                        </div>
                        :

                        activeTab === "today" ? activePlan.map((workout:IWorkout) => <TodaysCard key={workout.id} workout={workout} />)
                        : 
                        activePlan.map((workout:IWorkout) => <SavelaterCard key={workout.id} workout={workout} />)
                        }
                </section>



            </div>


        </div>
    );
};

export default MyPlanPage;