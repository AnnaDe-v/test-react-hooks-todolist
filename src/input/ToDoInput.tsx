import React, {useContext, useState} from 'react';
import {ToDoContext} from "../reducers/todo-reducer";
import {AddToDoItemAC} from "../reducers/Actions";

import style from './ToDoInput.module.css'

const ToDoInput: React.FC = () => {
    const [inputValue, updateInputValue] = useState('')
    const {dispatch} = useContext(ToDoContext)
    const {state} = useContext(ToDoContext)

    function handleEditInputValue(e: React.ChangeEvent<HTMLInputElement>) {
        updateInputValue(e.target.value)
    }

    function addNewToDoItem() {
        if(inputValue) {
            dispatch(AddToDoItemAC(inputValue))
            localStorage.setItem("localTodos", JSON.stringify(state));
            updateInputValue('')
        }
    }

    function handleEnterButton(e: React.KeyboardEvent) {
        if(e.key === 'Enter') {
            e.preventDefault()
            addNewToDoItem()
        }
    }


    return (
        <>
            <div className={style['to-do-input']}>
                <input
                    type="text"
                    className={style['to-do-input__value']}
                    value={inputValue}
                    onChange={handleEditInputValue}
                    onKeyDown={handleEnterButton}
                />
                <button
                    className={style['to-do-input__button']}
                    onClick={addNewToDoItem}
                >
                    +
                </button>
            </div>
        </>


    );
};

export default ToDoInput;