import React, {useReducer} from 'react';
import {initialState, ToDoContext, ToDoReducer} from "./reducers/ToDoReducer";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

const TodoApp: React.FC = () => {

    const [state, dispatch] = useReducer(ToDoReducer, initialState)

    return (
        <ToDoContext.Provider value={{state, dispatch}}>
            <div className='container'>
                <div className='todo-logo'>
                    ToDo List with React hooks
                </div>
                <ToDoInput/>
                <ToDoList/>
            </div>
        </ToDoContext.Provider>

);
};

export default TodoApp;