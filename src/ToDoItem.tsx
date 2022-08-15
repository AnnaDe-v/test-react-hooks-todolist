import React, {useContext} from 'react';
import {ToDoItemType} from "./ToDoItemType";
import {ToDoContext} from "./reducers/ToDoReducer";
import {ToggleToDoItemAC} from "./Actions";
import style from "./ToDoItem.module.css"

const ToDoItem: React.FC<ToDoItemType> = (item:ToDoItemType) => {
    const {dispatch} = useContext(ToDoContext)

    function DispatchToggleToDoItem() {
        dispatch(ToggleToDoItemAC(item.id))
    }

    return (
        <li className={style['todo-item__task']}>
                <input type='checkbox' onChange={DispatchToggleToDoItem} checked={item.isDone}/>
                <span className={item.isDone ? style['todo-item__task--done'] : style['todo-item__task--active']}
                onClick={DispatchToggleToDoItem}>
                    {item.task}
                </span>
        </li>
    );
};

export default ToDoItem;