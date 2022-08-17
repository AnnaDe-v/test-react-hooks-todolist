import {ToDoItemType} from "../todolists/ToDoItemType";
import {ActionType} from "./ActionType";
import { v4 as uuidv4 } from 'uuid';

export const ADD_TO_DO_ITEM = 'ADD_TO_DO_ITEM';
export const TOGGLE_TO_DO_ITEM = 'TOGGLE_TO_DO_ITEM';
export const REMOVE_TO_DO_ITEM = 'REMOVE_TO_DO_ITEM';

export interface IAddToDoItem extends ActionType {
    payload: {
        newToDoItem: ToDoItemType
    }
}

export interface IToggleToDoItem extends ActionType {
    payload: {
        itemId: string
    }
}

export interface IRemoveToDoItem extends ActionType {
    payload: {
        itemId: string
    }
}


export const AddToDoItemAC = (newToDoItemText: string): IAddToDoItem => (
    {
        type: ADD_TO_DO_ITEM,
        payload: {
            newToDoItem: {
                id: uuidv4(),
                text: newToDoItemText,
                isDone: false,
            }
        }
    }
)


export const ToggleToDoItemAC = (idToDoItem: string): IToggleToDoItem => (
    {
        type: TOGGLE_TO_DO_ITEM,
        payload: {
            itemId: idToDoItem
        }
    }
)

export const RemoveToDoItemAC = (idToDoItem: string): IRemoveToDoItem => (
    {
        type: REMOVE_TO_DO_ITEM,
        payload: {
            itemId: idToDoItem
        }
    }
)