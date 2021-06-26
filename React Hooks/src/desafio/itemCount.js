import React, { useState } from 'react'

export default function ItemCount() {

    let min = 1;
    let max = 10;

    const [isAdd, setAdd] = useState(min)

    function addition(){
        const newValue = isAdd + 1
        if (newValue<max){
            setAdd(newValue)
        }
    }

    function substraction(){
        const newValue = isAdd -1

        if(newValue>=min){
            setAdd(newValue)
        }
    }

    function onAdd(add){
        alert('Compraste' + add + 'items')
    }

    return (
        <div>
            <button onClick={substraction}>
                -
            </button>
            <span>{isAdd}</span>
            <button onClick={addition}>
                +
            </button>
            <button onClick={() => onAdd(isAdd)}>Agregar al carrito </button>
        </div>
    )
}
