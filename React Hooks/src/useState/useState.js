import React, { useState } from 'react'
import { useForm } from './useForm';

//---------------------------HOOK RULES-------------------------//

// WE CAN T USE HOOKS WITH CLASS COMPONENTS
// CAN T MIX HOOKS INSIDE LOOPS, CONDITIONS OR NESTED FUNCTIONS
// IMPORT HOOKS AT THE TOP IF THE COMPONENT BY DESTRUCTURING OR USE React.(name of hook)

//--------------------------useState()--------------------------//

// const expensiveInicialState = () => {
//     // imagine a loop or more iterations here
//     return 10;  // example
// }

export default function UseState() {

    // if we have a function that is "expensive", like a loop or a lot of iterations
    // const [expensiveState, setexpensiveState] = useState(() => expensiveInicialState()); // this function will render only the first time and not every single time the component render.
    // ------------------

    // FIRST EXAMPLE SIMPLE COUNT

    //     const [count, setCount] = useState(10);   // 10 is the initial state.

    //     return (
    //         // good idea to avoid race condition things and having two updates happen at the same time and the updates get overwritten.
    //         <div>
    //            <button onClick={() => setCount(currentCount => currentCount + 1)}> 
    //                 +
    //            </button>
    //           <div>
    //             {count}
    //           </div>
    //         </div>
    //     )
    // }
    // ------------------

    // SECOND EXAMPLE MULTIPLE COUNTS WITH ONE STATE

//     const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });  

//     return (
//         <div>
//             <button onClick={() => setCount(currentState => ({ ...currentState, count: currentState.count + 1, }))
//             }
//             >
//                 +
//             </button>
//             <div>count 1: {count}</div>
//             <div>count 2: {count2}</div>
//         </div>
//     )
// }
// ------------------

  // THIRD EXAMPLE INPUTS WITH STATS.
// declare useForm in another js file so we can use it in other situation.

const [values, handleChange] = useForm({ firstName: '', lastName: '', email: '', password: ''});  

return (

    <div>
        <input type='text' name='firstName' value={values.firstName} onChange={handleChange} />
        <input type='text' name='lastName' value={values.lastName} onChange={handleChange} />
        <input name='email' value={values.email} onChange={handleChange} />
        <input type='password' name='password' value={values.password} onChange={handleChange} />
    </div>
)
}


