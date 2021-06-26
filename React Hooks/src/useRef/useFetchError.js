import React, { useEffect, useState, useRef } from 'react'


export default function UseFetch(url) {

    const isCurrent = useRef(true);

    useEffect(() => {

        return () => {
            // calls when the component is going to unmount
            isCurrent.current = false
        }
    }, [])

    const [state, setState] = useState({ data: null, loading: true });

    useEffect(() => {
        setState(state => ({ data: state.data, loading: false }));
        fetch(url)
            .then(x => x.text())
            .then(y => {
                setTimeout(() => {
                    if (isCurrent.current) {
                        setState({ data: y, loading: false })
                    }
                }, 2000)
            })

    }, [url, setState])

    return state;
}
