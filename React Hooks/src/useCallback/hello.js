import React from 'react';
// import { useCounterRenders } from './useCounterRenders';

// what memo does is, compare the props and if the props have changed, then it s going to re-render the component
// React will always render the child component (hello) at useCallback father, so with this not.
export const Hello = React.memo(({ increment }) =>{

    // useCounterRenders()

    return <button onClick={() => increment(5)}>Hello</button>

})