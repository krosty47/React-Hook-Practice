import React, { useEffect, useState } from 'react'
import UseFetch from './useFetch';
import Hello from '../useEffect/Hello';


//--------------------------useEffect()--------------------------//

// The basics uses of useEffect is every time the component render, the function will get called
// if we don t want useEffect to render again, we pass the dependency array at the end. (replace of componentDidMount())
// if we want something to render when it changes, we pass it to the dependency array.
// we can have more than 1 useEffect and they will render in order.


export default function UseEffect() {


    // useEffect(() =>{
    //     const onMouseMove = e =>{
    //         console.log(e)
    //     }

    //     window.addEventListener('mousemove', onMouseMove)

    //     return () =>{            // clean up function, this part is for unmount
    //     window.removeEventListener('mousemove', onMouseMove)
    //     }
    // },[])

    const [count, setCount] = useState(() => JSON.parse(localStorage.getItem('count')));

    const { data, loading } = UseFetch(`http://numbersapi.com/${count}/trivia`)

    const [showHello, setShowHello] = useState(true);


    // useEffect to save the value of count, if you refresh the page, the value will be there
    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count))
    }, [count])

    return (
        <div>
            <div>{!data ? 'loading...' : data}</div>
            <div>count: {count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            <button onClick={() => setShowHello(!showHello)}>Toggle</button>
            {showHello && <Hello />}
        </div>
    )
}
