import React from 'react';
import {useNavigate} from "react-router-dom";
import Button from '../components/Button';

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
                <Button onClick={() => {
                     navigate('/games')
                }}>Start Game</Button>
                </div>
            </div>
            </div>
   
}