import { useRef } from 'react';

export const useCounterRenders = () =>{
    const renders = useRef(0);

    console.log('render: ', renders.current++);
}