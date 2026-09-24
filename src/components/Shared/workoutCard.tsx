import { IWorkout } from '@/type/type.app';
import { Clock3, Flame, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface workProps {
    work: IWorkout
}

const WorkoutCard = ({ work }: workProps) => {
    return (
          <Link href={`/workouts/${work.id}`}>
        <div className="w-full max-w-200 overflow-hidden rounded-[28px] border border-[#252a32] bg-[#14161b] text-white over:border-lime-400 hover:shadow-xl hover:border-[#C2F800] hover:border-[0.5px]
         transition-all duration-300 cursor-pointer">

            <div className="h-50 w-full overflow-hidden">
                <Image
                    src={work.image}
                    alt={work.name}
                    width={500}
                    height={700}
                    className="h-full w-full object-cover" />
            </div>

            {/* Content */}
            <div className="px-5 pt-5 pb-7">

                {/* Muscle Groups */}
                <div className="mb-3 flex flex-wrap gap-3">
                    {work.muscleGroups.slice(0, 2).map((muscle) => (
                        <span
                            key={muscle}
                            className="
            flex
            h-7
            items-center
            rounded-full
            bg-[#baff00]
            px-3
            text-[13px]
            font-bold
            uppercase
            tracking-wide
            text-black
          "
                        >
                            {muscle}
                        </span>
                    ))}
                </div>


                <h2 className="mb-3 text-[20px] font-black uppercase tracking-[1px]">
                    {work.name}
                </h2>

                {/* Equipment */}
                <p className="text-[17px] leading-[1.2] text-[#9da3ae]">{work.equipment}</p>

                <div className="my-4 h-0.5 w-full bg-[#242830]" />

                {/* Stats */}
                <div className="flex items-center gap-4 text-[14px] text-[#a5abb6]">

                    {/* Duration */}
                    <div className="flex items-center gap-1">
                        <Clock3
                            size={14}
                            strokeWidth={2}
                        />
                        <span>{work.duration} min</span>
                    </div>

                    {/* Calories */}
                    <div className="flex items-center gap-1">
                        <Flame
                            size={14}
                            strokeWidth={2}
                        />
                        <span>{work.caloriesBurned} kcal</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                        <Star
                            size={14}
                            strokeWidth={2}
                        />
                        <span>{work.rating}</span>
                    </div>

                </div>

            </div>
        </div>
        </Link>
    );
};

export default WorkoutCard;