import React, { useRef, useEffect, useState } from 'react';
import useFetchError from '../useRef/useFetchError';

export default function Renders() {

    // const renders = useRef(0);

    const [count, setCount] = useState(() => JSON.parse(localStorage.getItem('count')));

    const { data, loading } = useFetchError(`http://numbersapi.com/${count}/trivia`);
    // useEffect to save the value of count, if you refresh the page, the value will be there
    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count))
    }, [count]);
    
    // console.log('hello renders', renders.current++);

    return (
        <div>
        <div>{!data ? 'loading...' : data}</div>
        <div>count: {count}</div>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    )
}
