import React, {FC} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RunningTasks from "./pages/RunningTasks";
import TodoStore from "./stores/TodoStore";
import CompletedTasks from "./pages/CompletedTasks";
import Edit from "./pages/Edit";
import Create from "./pages/Create";

const App:FC = () => {
    const router = createBrowserRouter([
        {
            element: <RunningTasks/>,
            path: '/',
            loader: () =>{
                return{todoStore: new TodoStore()}
            }
        },
        {
            element: <CompletedTasks/>,
            path:'/completed',
            loader: () =>{
                return{todoStore: new TodoStore()}
            }
        },
        {
            element: <Create/>,
            path: '/create',
            loader: () =>{
                return{todoStore: new TodoStore()}
            }
        },
        {
            element: <Edit/>,
            path:'/edit/:taskId',
            loader:({params}) =>{
                const todoStore = new TodoStore()
                const index = todoStore.tasks.findIndex(t=> t.id === Number(params.taskId))
                return {vm : todoStore.tasks[index]}
            }
        }
    ])
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
