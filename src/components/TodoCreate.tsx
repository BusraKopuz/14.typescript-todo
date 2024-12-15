import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TodoType } from '../types/Types';
import { createtodo } from '../redux/todoSlice';

import '../css/TodoCreate.css'


function TodoCreate() {
    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState<string>("");

    const handleCreateTodo = () => {
        if(newTodo.trim().length == 0) {
            alert("todo giriniz!")
            return;
        }

        const payload: TodoType = {
            id: Math.floor(Math.random() * 999999999),
            content: newTodo
        }
        dispatch(createtodo(payload));
        setNewTodo('');
    }
    return (
        <div className='todo-create'>
            <input
            value={newTodo}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setNewTodo(e.target.value)} 
            placeholder='Todo Giriniz...' className='todo-input' type='text' />
            <button onClick={handleCreateTodo} className='todo-create-button'>Oluştur</button>
        </div>
    )
}

export default TodoCreate