import React, { useState, useMemo } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Index } from './pages/index';
import { About } from './pages/About';
import { UserContext } from './UserContext';

//--------------------------useContext()--------------------------//
// You can store a user in the context and share it throu your application

export default function AppContext() {

    const [user, setUser] = useState(null)

    const value = useMemo(() => ({ user, setUser }), [user, setUser])

    return (

        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/About/'>About</Link>
                        </li>
                    </ul>
                </nav>
                <UserContext.Provider value={value}>
                    <Route path='/' exact component={Index} />
                    <Route path='/About/' exact component={About} />
                </UserContext.Provider>
            </div>
        </Router>
    )
}
