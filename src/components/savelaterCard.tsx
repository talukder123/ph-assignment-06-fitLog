import { workoutsContext } from '@/Context/WorkOutContext';
import { IWorkout } from '@/type/type.app';
import { Clock, Flame, Star, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

import { Oswald } from "next/font/google";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

interface TodaysCardProps {
    workout: IWorkout;
}

const SavelaterCard = ({ workout }: TodaysCardProps) => {

    const { setLater } = useContext(workoutsContext);

    const handleRemove = () => {
        setLater((prev: IWorkout[]) =>
            prev.filter((item) => item.id !== workout.id)
        );
        toast.warn(`${workout.name} removed`)
    };

    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#15171c] p-3">
            <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative h-14 w-20 md:h-16 md:w-24 overflow-hidden rounded-xl shrink-0">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <h3 className={`${oswald.className} text-sm md:text-base font-bold uppercase text-white`}>
                        {workout.name}
                    </h3>
                    <p className="text-xs md:text-sm text-[#8A92A0]">{workout.equipment}</p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 md:gap-4 text-xs md:text-sm text-[#8A92A0]">
                        <span className="flex items-center gap-1">
                            <Clock size={14} className="text-[#C2F800]" /> {workout.duration} min
                        </span>
                        <span className="flex items-center gap-1">
                            <Flame size={14} className="text-[#C2F800]" /> {workout.caloriesBurned} kcal
                        </span>
                        <span className="flex items-center gap-1">
                            <Star size={14} className="text-[#C2F800]" /> {workout.rating}
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto justify-between md:justify-normal">
                <Link href={`/workouts/${workout.id}`} className="flex-1 md:flex-none">
                    <button className="w-full md:w-auto rounded-full border border-white/20 px-3 md:px-4 py-2 text-xs md:text-sm font-semibold text-white whitespace-nowrap">
                        View Details
                    </button>
                </Link>

                <button
                    onClick={handleRemove}
                    className="text-[#8A92A0] hover:text-white shrink-0"
                >
                    <X size={18} />
                </button>
            </div>
        </div>
    );
};

export default SavelaterCard;