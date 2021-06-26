import React, { useEffect } from 'react'

export default function Hello() {


    useEffect(() => {
        console.log('render')

        return () => {
            console.log('umount')
        }
    }, [])



    return (
        <div>
            hello
        </div>
    )
}
