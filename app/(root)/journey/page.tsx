import React from 'react'
import { JourneyCard } from "@/components/cards/JourneyCard";

export default function Journey() {
    return (
        <div className='mx-auto mt-10 lg:mt-24 flex flex-col justify-center'>
            <h1 className='flex justify-center scroll-m-20 font-extrabold tracking-tight lg:text-5xl lg:justify-start text-5xl lg:ml-48'>Our Journey</h1>
            <JourneyCard />
        </div>
    );
}