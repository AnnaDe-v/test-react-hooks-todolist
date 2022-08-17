import {ToDoState} from "../ToDoState";
import {TodoReducer} from "./todo-reducer";
import {ADD_TO_DO_ITEM, AddToDoItemAC} from "./Actions";
import {v4 as uuidv4} from 'uuid';

let state: ToDoState;


test('Add new item success', () => {
    state = {
        ToDoItems: [
            {
                id: uuidv4(),
                text: "ask",
                isDone: false
            },
            {
                id: uuidv4(),
                text: "wow",
                isDone: false
            },
            {
                id: uuidv4(),
                text: "buy",
                isDone: true
            },
        ]

    }

    let newState = TodoReducer(state, AddToDoItemAC('NEW ITEM'))

    expect(newState).toBe(newState.ToDoItems.length)
})