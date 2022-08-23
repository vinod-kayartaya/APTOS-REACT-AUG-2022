import { useState } from 'react';

const MathsFcApp = () => {
    // useState() returns an array of 2 elements
    // 1. the state (maintained by the component)
    // 2. the setter for the same state (calling the setter re-renders the component)
    let [num, setNum] = useState(12);

    const square = () => {
        // num *= num;
        setNum(num * num);
    };

    const sqrt = () => {
        // num = Math.sqrt(num);
        setNum(Math.sqrt(num));
    };

    return (
        <>
            <h1>Value of num is {num}</h1>
            <button onClick={square} className='btn btn-outline-primary'>
                Square
            </button>
            <button onClick={sqrt} className='btn btn-outline-primary'>
                Square Root
            </button>
        </>
    );
};

export default MathsFcApp;
