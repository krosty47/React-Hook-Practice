import React, { useState, useMemo } from 'react'
import { useFetch1 } from './useFetch1';

//--------------------------useMemo()--------------------------//
// When you want to optimize computed values

export default function UseMemo() {

    const [count, setCount] = useState(0);

    const { data } = useFetch1('https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json');

    const computeLongestWord = (arr) => {
        if (!arr) {
            return [];
        }
        let longestWord = ''

        JSON.parse(arr).forEach(sentence => sentence.split(' ').forEach(word => {
            if (word.length > longestWord.length) {
                longestWord = word;
            }
        })
        )
        return longestWord;
    };

    const longestWord = useMemo(() => computeLongestWord(data), [data, computeLongestWord])

    return (

        <div>
            <div>count: {count}</div>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <div>{longestWord}</div>
        </div>
    )
}
