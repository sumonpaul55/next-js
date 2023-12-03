"use client";
import React, { useState } from 'react';
const Counter = () => {

    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h1>Number {counter}</h1>
            <button className='m-5 bg-red-500' onClick={() => setCounter(counter + 1)}> increse</button>
            <button className='m-5 bg-red-500' onClick={() => setCounter(counter - 1)}> increse</button>
        </div>
    );
};

export default Counter;