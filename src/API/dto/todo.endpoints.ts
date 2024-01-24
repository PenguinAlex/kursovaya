import axios from "axios";
import {convertToDto, TodoDto} from "./todo.dto";
import {TypeTask} from "../../types";
import {converToModel, TodoModel} from "../../models/todo.model";


export async function createTodo(todo:TypeTask) {
    const localData = convertToDto(todo)
    try {
        // 👇️ const data: CreateUserResponse
        const { data, status } = await axios.post<TodoDto>(
            'http://localhost:3000/todos',
            JSON.stringify(convertToDto(todo)),
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            },
        );

        console.log(JSON.stringify(data, null, 4));

        console.log(status);

        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            // 👇️ error: AxiosError<any, any>
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export async function getTodods() {

        const { data, status } = await axios.get<TodoDto[]>(
            'http://localhost:3000/todos',
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );
        console.log(JSON.stringify(data, null, 4));
        console.log('response status is: ', status);
        return data;
}

export async function updateTodo(todo:TodoDto) {
    try {
        // 👇️ const data: UpdateUserResponse
        const { data } = await axios.put<TodoDto>(
            `http://localhost:3000/todos/${todo.id}`,
            todo,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            },
        );

        console.log(JSON.stringify(data, null, 4));

        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            // 👇️ error: AxiosError<any, any>
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export async function deleteTodo(id:number) {
    try {
        // 👇️ const data: UpdateUserResponse
        const { data, status } = await axios.delete<TodoDto>(
            `http://localhost:3000/todos/${id}`,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        console.log('response is: ', data);

        // 👇️ response status is: 204
        console.log('response status is: ', status);

        return true;
    } catch (error) {
        return false;
    }
}



