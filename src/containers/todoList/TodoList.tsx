
import TaskCard from "../taskCard/TaskCard";
import {observer} from "mobx-react-lite";
import {useLoaderData} from "react-router-dom";
import TodoStore from "../../stores/TodoStore";
import {FC} from "react";
import styled from "styled-components";

interface TodoListProps {
    completed: boolean
}


const TodoList: FC<TodoListProps> = observer(({completed}) => {

    const {todoStore} = useLoaderData() as { todoStore: TodoStore }

    console.log(todoStore.tasks)
    const List = styled.div`
      display: flex;
      align-items: center;
      flex-flow: wrap;
      justify-content: center;
      max-width: 675px;
    `
    return <List>
        {todoStore.tasks.map(el =>
            el.isCompleted === completed ?
                <TaskCard
                    key={el.id}
                    vm={el}
                /> :
                null
        )}
    </List>

});

export default TodoList;
