import React from "react";
import { v4 as uuid } from "uuid"
import "./Todo.css"

const Todo = ({id, todoContent, handleRemove})=>{

    return (
        <div className="Todo" id={id}>
            <button onClick={handleRemove}>X</button>
            <p>{todoContent}</p>
        </div>
    )
}

export default Todo;