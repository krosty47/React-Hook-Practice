import React, { useState, useCallback } from 'react'
import { Hello } from './hello';
import { Square } from './square';



//--------------------------useCallback()--------------------------//
// When count or set count changes, the function will be recreated, and not re-renders
// When you wanna do a looping over an array of something


export default function UseCallback() {
    
    const [count, setCount] = useState(0);
    const favoriteNums = [7, 21, 37];


    const increment = useCallback( n =>{
        setCount(c => c + n)
    },[setCount]);

    return (
        <div>
            <Hello increment={increment} />
            <div>count: {count}</div>
            {favoriteNums.map( n =>{
                return <Square increment={increment} n={n} key={n} />
            })}
        </div>
    )
}
