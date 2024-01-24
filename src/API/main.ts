import {Temporal} from "@js-temporal/polyfill";
import {TypeTask} from "../types";
import {createTodo, deleteTodo, getTodods, updateTodo} from "./dto/todo.endpoints";
import {converToModel} from "../models/todo.model";
import {convertToDto} from "./dto/todo.dto";


class TaskAPI {
    private storageKey = 'tasks';





    // Получить список всех задач
    getTasks(): Promise<TypeTask[]> {
        return getTodods().then(r=>r.map(el =>converToModel(el)))
    }

    // Создать новую задачу
    createTask = async (value: string, date: Temporal.PlainDate|null): Promise<any> => {
        const tasks = await this.getTasks()
        const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
        await createTodo({id:id, value:value, date:date, isCompleted:false})
    }


    updateTask = async (updatedTask: TypeTask): Promise<any> => {
        await updateTodo(convertToDto(updatedTask))
    }

    // Удалить задачу
    deleteTask = async (id: number): Promise<boolean> => {
       return await deleteTodo(id)
    }
}

export default TaskAPI;
