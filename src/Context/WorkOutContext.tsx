'use client';

import React, { ReactNode, useState } from 'react';
import { createContext } from 'react';

export const workoutsContext = createContext<any>({});

const WorkOutContextProvide = ({children}:{children : ReactNode}) => {

    const [todaysPlan, setTodaysPlan] = useState([])
    const [later, setLater] = useState([])

    const sharedData = {
        todaysPlan,
        setTodaysPlan,
        later,
        setLater
    }
    return <workoutsContext.Provider value={sharedData}>{children}</workoutsContext.Provider>

};

export default WorkOutContextProvide;