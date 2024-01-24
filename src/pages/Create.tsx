import React from 'react';
import TodoWidgetViewModel from "../stores/TodoWidgetViewModel";
import Input from "../components/input/Input";
import {Temporal} from "@js-temporal/polyfill";
import Button from "../components/button/Button";
import {useLoaderData, useNavigate} from "react-router-dom";
import TodoStore from "../stores/TodoStore";
import Header from "../containers/header/Header";
import {observer} from "mobx-react-lite";
import PageHeadline from "../components/headline/pageHeadline";
import styled from "styled-components";

const Create = observer(() => {
    const navigate =useNavigate()
    const {todoStore} = useLoaderData() as { todoStore: TodoStore }
    const vm = new TodoWidgetViewModel(null)
    const Page = styled.div`
      display: flex;
      flex-flow: column;
      align-items: center;
    `
    return (
        <>
            <Header/>
            <Page>
                <PageHeadline value='Create Task'/>
                <Input
                    type='text'
                    placeholder='Task title'
                    label='Task title'
                    maxLength={32}
                    onChange={e => vm.onDraftChange(e.target.value)}
                    required
                />

                <Input
                    type='date'
                    label='End date'
                    required
                    onChange={e => vm.onDateChange(Temporal.PlainDate.from(e.target.value))}
                />
                <Button
                    value='Create new task'
                    onClick={async () => {
                       await todoStore.addTask(vm.draft, vm.date);
                        navigate('/')
                    }}
                />
            </Page>
        </>

    );
});

export default Create;
