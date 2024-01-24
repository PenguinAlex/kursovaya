import React, {FC} from 'react';
import {useLoaderData} from "react-router-dom";
import TodoStore from "../stores/TodoStore";
import Header from "../containers/header/Header";
import TodoList from "../containers/todoList/TodoList";
import PageHeadline from "../components/headline/pageHeadline";
import styled from "styled-components";

interface EditProps {

}

const CompletedTasks: FC<EditProps> = () => {
    const {todoStore} = useLoaderData() as { todoStore: TodoStore }
    console.log(todoStore)
    const Page = styled.div`
      display: flex;
      flex-flow: column;
      align-items: center;

    `
    return (
        <div>
            <Header/>
            <Page>
                <PageHeadline value='Completed Tasks'/>
                <TodoList completed={true}/>
            </Page>
        </div>
    );
};

export default CompletedTasks;
