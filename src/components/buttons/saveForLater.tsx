'use client';

import React, { useContext } from 'react';
import { Bookmark } from "lucide-react";
import { workoutsContext } from '@/Context/WorkOutContext';
import { IWorkout } from '@/type/type.app';
import { toast } from 'react-toastify';

const SaveForLater = ({work} : {work:IWorkout}) => {

    const {later, setLater} = useContext(workoutsContext);

    const handleSaveForLater = () => {
    const alreadyExists = later.some((item) => item.id === work.id);

    if (alreadyExists) {
        toast.error("This workout is already saved for later!");
        return;
    }

    setLater([...later, work]);
    toast.success("Saved for later");
};


    return (
        <div className=''>
            <button onClick={()=> handleSaveForLater()} className='flex gap-2 rounded-2xl bg-[#CCFF00] text-black font-bold px-4 py-3'>
                <Bookmark></Bookmark>
                <h2>Save for later</h2>
            </button>

        </div>
    );
};

export default SaveForLater;