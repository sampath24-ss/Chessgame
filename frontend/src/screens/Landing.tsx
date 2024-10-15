import React from 'react';
import {useNavigate} from "react-router-dom";

export const Landing = () => {
    const navigate = useNavigate();
    return <div className = 'pt-8'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='flex justify-center'>
                <img src={"/newchess.jpg"} className='max-w-96'></img>
            </div>
            <div className='mt-4'>
                <h1 className='text-4xl font-bold text-white'>Welcome to Chess Game</h1>
                <p className='text-lg text-gray-600'>
                    Play chess with friends or strangers around the world.
                </p>
                <button type="button" onClick={() => {
                    navigate('/games');
                }} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Start Game</button>
                </div>
            </div>
            </div>
   
}