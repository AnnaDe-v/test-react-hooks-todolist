import React, {useContext, useState} from 'react';
import {ToDoContext} from "./reducers/ToDoReducer";
import {AddToDoItemAC} from "./Actions";

const ToDoInput: React.FC = () => {
    const [inputValue, updateInputValue] = useState('')
    const {dispatch} = useContext(ToDoContext)

    function handleEditInputValue(e: React.ChangeEvent<HTMLInputElement>) {
        updateInputValue(e.target.value)
    }

    function addNewToDoItem() {
        if(inputValue) {
            dispatch(AddToDoItemAC(inputValue))
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
        <div className='to-do-input'>
            <div className='to-do-input-inputs'>
                <input
                    type="text"
                    className='to-do-input-value'
                    value={inputValue}
                    onChange={handleEditInputValue}
                    onKeyDown={handleEnterButton}
                />
                <button
                    className='to-do-input-button'
                    onClick={addNewToDoItem}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default ToDoInput;