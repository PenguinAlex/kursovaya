import {Temporal} from "@js-temporal/polyfill";
import {TodoDto} from "../API/dto/todo.dto";
import {TypeTask} from "../types";

export interface TodoModel {
    id: number,
    value: string,
    isCompleted: boolean,
    date:Temporal.PlainDate|null
}

export const converToModel = (todo:TodoDto):TypeTask =>{
    return {...todo, date: Temporal.PlainDate.from(todo.date)}
}
