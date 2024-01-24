import React, {FC,} from 'react';
import {useLoaderData, useNavigate} from "react-router-dom";
import TodoStore from "../../stores/TodoStore";
import IconButton from "../../components/iconButton/IconButton";
import TodoWidgetViewModel from "../../stores/TodoWidgetViewModel";
import styled from "styled-components";

interface TaskCardProps {
    vm: TodoWidgetViewModel
}

const TaskCard: FC<TaskCardProps> = ({vm}) => {
    const {date, id, draft, isCompleted} = vm
    const {todoStore} = useLoaderData() as { todoStore: TodoStore }
    const navigate = useNavigate()
    const Card = styled.div`
      color: #FFDDD2;
      font-family: Inter, sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      display: flex;
      width: 256px;
      height: 128px;
      border-radius: 7px;
      padding: 12px 16px;
      background: #006D77;
      margin: 8px 16px;
      justify-content: space-between;
    `
    const ButtonsBar = styled.div`
      display: flex;
      flex-flow: column;
    `
    const Headline = styled.h3`
      font-family: Inter, sans-serif;
      font-size: 15px;
      margin-right: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 165px;
    `
    const Main = styled.div`
      display: flex;
      flex-flow: column;
      justify-content: space-between;
    `

    const parsedDate = date ? `${date.day}.${date.month}.${date.year} ` : null

    return (
        <Card>
            <Main>
                <Headline>{draft}</Headline>
                <div>
                    {date ? 'End date: ' + parsedDate : null}
                    {
                        isCompleted
                            ? <IconButton
                                icon='src/assets/icons/completed.svg'
                                value='Completed'
                            />
                            : <IconButton
                                icon='src/assets/icons/checkbox.svg'
                                value='Mark as completed'
                                onClick={() => vm.toggleCompleted()}
                            />}
                </div>
            </Main>
            <ButtonsBar>
                {
                    isCompleted
                        ? null
                        : <IconButton
                            icon='src/assets/icons/edit.svg'
                            onClick={() => navigate(`/edit/${id}`)}
                        />
                }
                <IconButton
                    icon='src/assets/icons/delete.svg'
                    onClick={() => todoStore.deleteTodo(id)}
                />
            </ButtonsBar>
        </Card>
    );
};

export default TaskCard;
