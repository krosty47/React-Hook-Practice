import React, { useContext } from 'react';
import { Login } from '../login';
import { UserContext } from '../UserContext';

export const Index = () => {

    const { user, setUser } = useContext(UserContext);


    return (
        <div>
            <h2>Home</h2>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            {user ? <button onClick={() =>{
                // call logout
                setUser(null)
            }}>logout</button> : <button
                onClick={async () => {
                    const user = await Login()
                    setUser(user);
                }}
            >
                Login
            </button>
            }
        </div>
    )
}