import React, {useEffect, useReducer} from 'react';
import {initialState, ToDoContext, TodoReducer} from "./reducers/todo-reducer";
import ToDoInput from "./input/ToDoInput";
import ToDoList from "./todolists/ToDoList";

import './styles.css';

const TodoApp: React.FC = () => {
    // @ts-ignore
    const [state, dispatch] = useReducer(TodoReducer, initialState, (initial) => JSON.parse(localStorage.getItem('localTodos')) || initial)

    useEffect(() => {
        localStorage.setItem('localTodos', JSON.stringify(state));
    }, [state]);

    return (
        <ToDoContext.Provider value={{state, dispatch}}>
            <div className='container'>
                <h1 className="todos-title">ToDo List with React hooks</h1>
                <ToDoInput/>
                <ToDoList/>
            </div>
        </ToDoContext.Provider>

    );
};

export default TodoApp;