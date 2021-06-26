import React, { useState } from 'react'

export default function DesafioChris() {

    let min = 1;

    const [ count, setCount ] = useState(min)

    function onAdd(contador){
        alert('Compraste' + contador + 'items')
    }

    return (
        <div>
            <button onClick={() => setCount( count >= 2 ? count-1 : 1)}>
                -
            </button>
            <span>{count}</span>
            <button onClick={() => setCount(count <= 8 ? count+1 : 9)}>
                +
            </button>
            <button onClick={() => onAdd(count)}>Agregar al carrito </button>
        </div>
    )
}
