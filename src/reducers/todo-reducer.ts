import React from "react";
import {ToDoState} from "../ToDoState";
import {ToDoItemType} from "../ToDoItemType";
import {ToDoContextType} from "../ToDoContextType";
import {ADD_TO_DO_ITEM, AddToDoItemActionType, TOGGLE_TO_DO_ITEM, ToggleToDoItemActionType} from "../Actions";
import {ActionType} from "../ActionType";
import { v4 as uuidv4 } from 'uuid';





export const initialState: ToDoState = {
    ToDoItems: [
        {
            id: uuidv4(),
            task: 'to buy VW T2',
            isDone: false,
        },
    ]
}



export const ToDoContext: React.Context<ToDoContextType> = React.createContext({
    state: initialState,
    dispatch: null
})


export const AddToDoItemReducer = (state: ToDoState, action: AddToDoItemActionType) => {
    return {
        ...state,
        ToDoItems: [...state.ToDoItems, action.payload.newToDoItem]
    }
}

export const ToggleToDoItemReducer = (state: ToDoState, action: ToggleToDoItemActionType) => {
    return {
        ...state,
        ToDoItems: state.ToDoItems.map((i: ToDoItemType) => (i.id === action.payload.removeToDoItem)
            ? {...i, isDone: !i.isDone}
            : i
        )
    }
}


export function TodoReducer(state: ToDoState, action: ActionType):
    ToDoState {
    switch (action.type) {
        case ADD_TO_DO_ITEM:
            return AddToDoItemReducer(state, action);
        case TOGGLE_TO_DO_ITEM:
            return ToggleToDoItemReducer(state, action)
        default:
            return state;
    }
}




