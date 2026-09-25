'use client';

import { workoutsContext } from '@/Context/WorkOutContext';
import React, { useContext } from 'react';

const MyPlanPage = () => {

    const { todaysPlan, later } = useContext(workoutsContext);

    return (
        <div>
            <div className='text-purple-300 p-20 font-bold flex justify-center items-center'>
                {todaysPlan.map((workout) => (
                    <div key={workout.id}>
                        {workout.description}
                    </div>
                ))}

                {
                    later.map(l => (
                        <div key={l.id}>{l.name}</div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyPlanPage;