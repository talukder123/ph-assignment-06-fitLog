import { IWorkout } from '@/type/type.app';
import Image from 'next/image';
import React from 'react';
import AddToPlan from '@/components/buttons/addToPlan';
import SaveForLater from '@/components/buttons/saveForLater';

interface Idetailworkout {
    params: Promise<{ id: string }>
}

const DetailWorkoutPage = async ({ params }: Idetailworkout) => {

    const { id } = await params

    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    if (!res.ok) {
        throw new Error("Failed to fetch workout");
    }

    const work: IWorkout = await res.json();

    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 p-10 gap-10'>
                <Image src={work.image} alt={work.name} height={1000} width={700} className='rounded-2xl'></Image>

                <div className=''>
                    <h2 className='pb-3 text-[40px] font-bold'>{work.name}</h2>
                    <p className='text-[#9CA3AF] text-[20px]'>{work.description}
                    </p>
                    <div>
                        <div className="my-4 flex flex-wrap gap-3">
                            {work.muscleGroups.slice(0, 2).map((muscle) => (
                                <span key={muscle} className="flex h-7 items-center rounded-full bg-[#baff00] px-3 text-[13px] font-bold uppercase tracking-wide text-black">{muscle}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>

                        <div className="overflow-hidden rounded-2xl border border-[#252932] bg-[#15181f]">
                            <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8b929f]">
                                    Equipment
                                </span>
                                <span className="text-xs font-medium text-white">
                                    {work.equipment}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8b929f]">
                                    Difficulty
                                </span>
                                <span className="text-xs font-medium text-white">
                                    {work.difficulty}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8b929f]">
                                    Sets
                                </span>
                                <span className="text-xs font-medium text-white">
                                    {work.sets}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8b929f]">
                                    Reps
                                </span>
                                <span className="text-xs font-medium text-white">
                                    {work.reps}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8b929f]">
                                    Duration
                                </span>
                                <span className="text-xs font-medium text-white">
                                    {work.duration} min
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8b929f]">
                                    Calories
                                </span>
                                <span className="text-xs font-medium text-white">
                                    {work.caloriesBurned} kcal
                                </span>
                            </div>

                            <div className="flex items-center justify-between px-4 py-3">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8b929f]">
                                    Rating
                                </span>
                                <span className="text-xs font-medium text-white">
                                    {work.rating}
                                </span>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="mt-6">
                            <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
                                Instructions
                            </h2>

                            <ol className="space-y-3">
                                {work.instructions.map((instruction: string, index: number) => (
                                    <li
                                        key={index}
                                        className="flex gap-3 text-sm leading-5 text-[#a1a6b0]"
                                    >
                                        <span className="shrink-0 text-[#a1a6b0]">
                                            {index + 1}.
                                        </span>

                                        <span>
                                            {instruction}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </div>


                    </div>

                    <div className='flex gap-3 mt-4'>
                        <AddToPlan work={work}></AddToPlan>
                        <SaveForLater work={work}></SaveForLater>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailWorkoutPage;