import React, { useState, useRef } from 'react'
import { useForm } from '../useState/useForm';

import Renders from './renders';


//--------------------------useRef()--------------------------//

// When we want to get refference of some react component and use it in the application and maybe we don t want to render the page.
// We can use it to count the times the component is render.
// We can focus()


export default function UseRef() {



    const [values, handleChange] = useForm({ firstName: '', lastName: '', email: '', password: ''});  


    const [showHello, setShowHello] = useState(true);

    const inputRef = useRef();

    return (
        <div>
            <button onClick={() => setShowHello(!showHello)}>Toggle</button>
            {showHello && <Renders />}
            <input type='text' name='firstName' value={values.firstName} onChange={handleChange} />
            <input type='text' name='lastName' value={values.lastName} onChange={handleChange} />
            <input ref={inputRef} name='email' value={values.email} onChange={handleChange} />
            <input type='password' name='password' value={values.password} onChange={handleChange} />
            <button onClick={() => inputRef.current.focus()}>FOCUS</button>
        </div>
    )
}
