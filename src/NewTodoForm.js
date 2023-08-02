import React, { useState } from "react";
import "./NewTodoForm.css"

const NewTodoForm = ({addTodo})=>{
    const INITIAL_STATE = {
        "todoContent": ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e)=>{
        const {name, value} = e.target
        setFormData(data => ({...data, [name]: value}))
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        addTodo({...formData})
        setFormData(INITIAL_STATE)
        
    }
    return (
        <form className="NewTodoForm" onSubmit={handleSubmit}>
            <label htmlFor="todoContent">Todo:</label>
            <input
                type="text"
                name="todoContent"
                id="todoContent"
                placeholder="New Todo..."
                value={formData.todoContent}
                onChange={handleChange}
            />
            <button>Add New Todo</button>
        </form>
    )
}

export default NewTodoForm;