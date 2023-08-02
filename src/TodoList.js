import React, { useState } from "react";
import { v4 as uuid } from "uuid"
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"

const TodoList = ()=>{
    const INITIAL_STATE = []
    const [todos, setTodos] = useState(INITIAL_STATE)

    const addTodo = (newTodo)=>{
        setTodos([...todos, { id: uuid(), ...newTodo }])
    }
    const handleRemove = (e)=>{
        setTodos(todos.filter(t => t.id !== e.target.parentNode.id))
    }
    return (
        <>
            <NewTodoForm addTodo={addTodo}/>
            <hr/>
            {todos.map(({id, todoContent})=>(
                <Todo
                    id={id}
                    key={id}
                    handleRemove={handleRemove}
                    todoContent={todoContent}
                />
            )
            )}
        </>
    )
}

export default TodoList;