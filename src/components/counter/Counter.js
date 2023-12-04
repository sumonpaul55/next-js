"use client";
import Link from 'next/link';
import React, { useState } from 'react';
const Counter = () => {

    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h1>Number {counter}</h1>
            <button className='m-5 bg-red-500 btn btn-secondary' onClick={() => setCounter(counter + 1)}> increse</button>
            <button className='m-5 bg-red-500 btn btn-secondary' onClick={() => setCounter(counter - 1)}> increse</button>
            <Link href="/about">
                <button className='btn btn-primary'>About</button>
            </Link>
            <Link href="/news">
                <button className='btn btn-primary'>news</button>
            </Link>
        </div>
    );
};

export default Counter;