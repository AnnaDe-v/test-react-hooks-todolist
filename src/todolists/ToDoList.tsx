import React, {useContext, useEffect, useState} from 'react';
import {ToDoContext} from "../reducers/todo-reducer";
import ToDoItem from './ToDoItem';
import {ToDoItemType} from "../ToDoItemType";

import style from "./ToDoList.module.css"

const ToDoList: React.FC = () => {
    const {state} = useContext(ToDoContext)


    return (
        <div className={style['todolist-container']}>
            <ul className={style['todolist-list']}>
                {state.ToDoItems.map((item: ToDoItemType, index: number) => (
                    <ToDoItem key={index} id={item.id} task={item.task} isDone={item.isDone}/>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;