import React, { useReducer, useState } from 'react'
const addTodo = 'add-todo';
const toggleTodo = 'toggle-todo';

//--------------------------useReducer()--------------------------//
// Is for storing states, is an alternative to the useState hook 


function reducer(state, action) {
    switch (action.type) {
        case addTodo:
            return { 
                todos: [...state.todos, { text: action.text, completed: false }],
                todoCount: state.todoCount + 1
            }
        case toggleTodo:
            return {  
                todos: state.todos.map((t, idx) => idx === action.idx ? { ...t, completed: !t.completed } : t),
                todoCount: state.todoCount
            }
        default:
            return state;
    }
}

export default function UseReducer() {

    const [{ todos, todoCount }, dispatch] = useReducer(reducer, { 
        todos: [],
        todoCount: 0
    });

    const [text, setText] = useState('')

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                dispatch({ type: addTodo, text });
                setText('')
            }}
            >
                <input value={text} onChange={e => setText(e.target.value)}></input>
            </form>
            <div>Number of todos: {todoCount}</div>
            <pre>
                {todos.map((t, idx) =>
                    <div
                        key={t.text}
                        onClick={() => dispatch({ type: toggleTodo, idx })}
                        style={{
                            textDecoration: t.completed ? 'line-through' : ''
                        }}
                    >
                        {t.text}
                    </div>
                )}
            </pre>
        </div>
    )
}
