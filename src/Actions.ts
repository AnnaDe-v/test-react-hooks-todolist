import {ToDoItemType} from "./ToDoItemType";
import {ActionType} from "./ActionType";
import { v4 as uuidv4 } from 'uuid';

export const ADD_TO_DO_ITEM = 'ADD_TO_DO_ITEM';
export const TOGGLE_TO_DO_ITEM = 'TOGGLE_TO_DO_ITEM';


export interface AddToDoItemActionType extends ActionType {
    payload: {
        newToDoItem: ToDoItemType
    }
}

export interface ToggleToDoItemActionType extends ActionType {
    payload: {
        removeToDoItem: string
    }
}

export const AddToDoItemAC = (newToDoItem: string): AddToDoItemActionType => (
    {
        type: ADD_TO_DO_ITEM,
        payload: {
            newToDoItem: {
                id: uuidv4(),
                task: newToDoItem,
                isDone: false,
            }
        }
    }
)



export const ToggleToDoItemAC = (idToDoItem: string): ToggleToDoItemActionType => (
    {
        type: TOGGLE_TO_DO_ITEM,
        payload: {
            removeToDoItem: idToDoItem
        }
    }
)