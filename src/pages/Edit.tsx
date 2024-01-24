import React from 'react';
import {useLoaderData, useNavigate} from "react-router-dom";
import TodoWidgetViewModel from "../stores/TodoWidgetViewModel";
import Input from "../components/input/Input";
import {observer} from "mobx-react-lite";
import {Temporal} from "@js-temporal/polyfill";
import Button from "../components/button/Button";
import styled from "styled-components";

const Edit = observer(() => {
    const navigate = useNavigate()
    const {vm} = useLoaderData() as { vm: TodoWidgetViewModel }
    const Page = styled.div`
      display: flex;
      flex-flow: column;
      align-items: center;
      margin-top: 64px;
    `
    return (
        <Page>
            <Input
                type='text'
                placeholder='Task title'
                label='Task title'
                value={vm.draft}
                maxLength={32}
                onChange={e => vm.onDraftChange(e.target.value)}
            />

            <Input
                type='date'
                label='End date'
                value={vm.date ? vm.date.toString() : ''}
                onChange={e => vm.onDateChange(Temporal.PlainDate.from(e.target.value))}
            />

            <Button
                value='Confirm'
                onClick={() => navigate('/')}
            />
        </Page>
    );
});

export default Edit;
