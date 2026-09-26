'use client';
import React, { useContext } from 'react';
import { CalendarPlus } from "lucide-react";
import { IWorkout } from '@/type/type.app';
import { workoutsContext } from '@/Context/WorkOutContext';
import { toast } from 'react-toastify';

const AddToPlan = ({ work }: { work: IWorkout }) => {

    const { todaysPlan, setTodaysPlan } = useContext(workoutsContext);

    const handleAddToPlan = () => {

        const alreadyExists = todaysPlan.some((item: IWorkout) => item.id === work.id);

        if (alreadyExists) {
            toast.error("Already in your plan");
            return;
        }

        setTodaysPlan([...todaysPlan, work]);

        toast.success("Saved to Today's Plan");
    };


    return (
        <div >
            <button
    onClick={() => handleAddToPlan()}
    className='hover:cursor-pointer flex gap-2 rounded-2xl bg-[#CCFF00] text-black font-bold px-4 py-3 hover:bg-[#b8e600] active:bg-[#a3d900] active:scale-95 transition-all duration-200'
>
    <CalendarPlus className='text-2xl'></CalendarPlus>
    <h2>Add to today&apos;s plan</h2>
</button>

        </div>
    );
};

export default AddToPlan;