import { IWorkout } from '@/type/type.app';
import Image from 'next/image';
import React from 'react';

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
            <div className='p-1'>
                <Image src={work.image} alt={work.name} height={700} width={500} className='rounded-2xl'></Image>

                <div>
                    <h2>BARBELL BENCH PRESS</h2>
                    <p>A compound press that builds chest thickness, triceps, and pressing power
                        from a stable bench.
                    </p>
                    <div>

                    </div>
                    <div>
                        list ---
                    </div>
                    <div>
                        Instructions ---
                    </div>

                    <div>
                        <button>BTN-1</button>
                        <button>BTN-2</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailWorkoutPage;