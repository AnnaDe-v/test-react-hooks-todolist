import React, {useContext} from 'react';
import {ToDoItemType} from "./ToDoItemType";
import {ToDoContext} from "../reducers/todo-reducer";
import {RemoveToDoItemAC, ToggleToDoItemAC} from "../reducers/Actions";
import style from "./ToDoList.module.css"

const ToDoItem: React.FC<ToDoItemType> = (item:ToDoItemType) => {
    const {dispatch} = useContext(ToDoContext)

    function ToggleToDoItem() {
        dispatch(ToggleToDoItemAC(item.id))
    }

    function RemoveToDoItem() {
        dispatch(RemoveToDoItemAC(item.id))
    }

    return (
        <>
            <li className={style['todo-item__task']} >
                <input className={style['todo-item__checkbox']} type='checkbox' onChange={ToggleToDoItem} checked={item.isDone}/>
                <span onClick={ToggleToDoItem} style={{wordBreak: 'break-all'}}>
                    {item.text}
                </span>
                <div onClick={RemoveToDoItem} style={{right: 10, position: "absolute", top: 10}}>X</div>
            </li>

        </>


    );
};

export default ToDoItem;