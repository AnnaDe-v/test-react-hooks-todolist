import React, {useContext} from 'react';
import {ToDoContext} from "./reducers/ToDoReducer";
import ToDoItem from './ToDoItem';
import {ToDoItemType} from "./ToDoItemType";

const ToDoList: React.FC = () => {
    const {state} = useContext(ToDoContext)

    return (
        <div className='todolist-container'>
            <ul className='todolist-list'>
                {state.ToDoItems.map((item: ToDoItemType, index: number) => (
                    <ToDoItem key={index} id={item.id} task={item.task} isDone={item.isDone}/>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;