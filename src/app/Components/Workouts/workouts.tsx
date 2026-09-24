import React from 'react';

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
    console.log(data);

    return (
        <div>
            <h2>Workout all card</h2>
        </div>
    );
};

export default workoutsSection;