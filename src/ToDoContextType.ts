import {ToDoState} from "./ToDoState";

export interface ToDoContextType {
    state: ToDoState
    dispatch: any
}