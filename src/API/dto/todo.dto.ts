import {TodoModel} from "../../models/todo.model";

export  interface TodoDto{
    id:number,
    value:string,
    date:string,
    isCompleted:boolean

}

export const convertToDto = (todo: TodoModel): TodoDto =>{
    return {
        id: todo.id,
        date: todo.date ? todo.date.toString() : '',
        isCompleted: todo.isCompleted,
        value: todo.value
    }
}
