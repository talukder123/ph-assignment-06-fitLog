import { IWorkout } from '@/type/type.app';
import React from 'react';
import WorkoutCard from '../../components/Shared/workoutCard';

const workoutsDataPromise = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    if (!res.ok) {
        throw new Error("Failed to fetch workouts");
    }
    const data = await res.json();
    return data;
}

const workoutsSection = async () => {
    
    const data = await workoutsDataPromise();

    return (
        <div id='workoutSection' className='container mx-auto mt-10 px-4 sm:mt-12 md:mt-16'>
            <div className='mb-4'>
                <h2 className='uppercase text-[30px] font-bold'>THE LIBRARY</h2>
                <p className='text-[14px] text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
            </div>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {
                    data.map((work : IWorkout) => {
                        return (
                            <WorkoutCard key={work.id} work={work}></WorkoutCard>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default workoutsSection;