import React, { useState } from 'react'

export default function Counter(props) {

    const [counter, setCounter] = useState(0);
    const [counter1, setCounter1] = useState(0);

    return (
        <>
        <h1 className='text-3xl font-bold'>{props.name}</h1>
         <div className='flex items-center gap-4 mt-6'>
            <button className='bg-blue-400 px-4 py-1 rounded' onClick={() => {
                setCounter(counter - 1);
            }}>-</button>
            <div>{counter}</div>
            <button className='bg-blue-400 px-4 py-1 rounded' onClick={() => {
                setCounter(counter + 1);
            }}>+</button>
        </div>

         <div className='flex items-center gap-4 mt-6'>
            <button className='bg-blue-400 px-4 py-1 rounded' onClick={() => {
                setCounter1(counter1 - 1);
            }}>-</button>
            <div>{counter1}</div>
            <button className='bg-blue-400 px-4 py-1 rounded' onClick={() => {
                setCounter1(counter1 + 1);
            }}>+</button>
        </div>
        </>
       

    )
}
