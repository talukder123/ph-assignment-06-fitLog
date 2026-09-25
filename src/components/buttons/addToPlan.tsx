'use client';
import React, { useContext } from 'react';
import { CalendarPlus  } from "lucide-react";
import { IWorkout } from '@/type/type.app';
import { workoutsContext } from '@/Context/WorkOutContext';

const AddToPlan = ({work} : {work:IWorkout}) => {

    const {todaysPlan, setTodaysPlan} = useContext(workoutsContext);

    const handleAddToPlan = () => {
    setTodaysPlan([...todaysPlan, work]);

    alert("You have added the workout");
};


    return (
        <div >
            <button onClick={()=> handleAddToPlan()} className='flex gap-2 rounded-2xl bg-[#CCFF00] text-black font-bold px-4 py-3'>
                <CalendarPlus  className='text-2xl'></CalendarPlus >
                <h2>Add to today&apos;s plan</h2>
            </button>
           
        </div>
    );
};

export default AddToPlan;