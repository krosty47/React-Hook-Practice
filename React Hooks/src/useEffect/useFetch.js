import React, { useEffect, useState } from 'react'


export default function UseFetch(url) {
    const [state, setState] = useState({ data: null, loading: true });

    useEffect(() => {
        setState(state => ({ data: state.data, loading: false }));
        fetch(url)
            .then(x => x.text())
            .then(y => {
                setState({ data: y, loading: false })
            })

    }, [url, setState])

    return state;
}
