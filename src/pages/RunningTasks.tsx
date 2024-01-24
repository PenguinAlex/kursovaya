import React, {FC} from 'react';
import TodoList from "../containers/todoList/TodoList";
import Header from "../containers/header/Header";
import PageHeadline from "../components/headline/pageHeadline";
import styled from "styled-components";


interface TodoProps {

}

const RunningTasks: FC<TodoProps> = () => {
    const Page = styled.div`
      display: flex;
      flex-flow: column;
      align-items: center;

    `
    return (
        <>
            <Header/>
            <Page>
                <PageHeadline value='Running Tasks'/>
                <TodoList completed={false}/>
            </Page>

        </>
    );
};

export default RunningTasks;
