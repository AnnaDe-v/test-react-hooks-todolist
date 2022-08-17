import React from "react";
import {ToDoState} from "../ToDoState";
import {ToDoItemType} from "../todolists/ToDoItemType";
import {ToDoContextType} from "../ToDoContextType";
import {
    ADD_TO_DO_ITEM,
    IAddToDoItem,
    RemoveToDoItemAC,
    TOGGLE_TO_DO_ITEM,
    IToggleToDoItem, IRemoveToDoItem, REMOVE_TO_DO_ITEM
} from "./Actions";
import {ActionType} from "./ActionType";
import { v4 as uuidv4 } from 'uuid';





export const initialState: ToDoState = {
    ToDoItems: [
        {
            id: uuidv4(),
            text: 'to buy VW T2',
            isDone: false,
        },
    ]
}

export const ToDoContext: React.Context<ToDoContextType> = React.createContext({
    state: initialState,
    dispatch: null
})


export const AddToDoItemReducer = (state: ToDoState, action: IAddToDoItem) => {
    return {
        ...state,
        ToDoItems: [...state.ToDoItems, action.payload.newToDoItem]
    }
}

export const ToggleToDoItemReducer = (state: ToDoState, action: IToggleToDoItem) => {
    return {
        ...state,
        ToDoItems: state.ToDoItems.map((i: ToDoItemType) => (i.id === action.payload.itemId)
            ? {...i, isDone: !i.isDone}
            : i
        )
    }
}

export const RemoveToDoItemReducer = (state: ToDoState, action: IRemoveToDoItem) => {
    return {
        ...state,
        ToDoItems: state.ToDoItems.filter((i: ToDoItemType) => i.id !== action.payload.itemId)
    }


}



export function TodoReducer(state: ToDoState, action: ActionType):
    ToDoState {
    switch (action.type) {
        case ADD_TO_DO_ITEM:
            return AddToDoItemReducer(state, action);
        case TOGGLE_TO_DO_ITEM:
            return ToggleToDoItemReducer(state, action)
        case REMOVE_TO_DO_ITEM:
            return RemoveToDoItemReducer(state, action)
        default:
            return state;
    }
}




