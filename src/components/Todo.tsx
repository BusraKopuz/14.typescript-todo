import React, { useState } from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';

import '../css/Todo.css'
import { removeTodoById, updateTodo } from '../redux/todoSlice';


interface TodoProps {
  todoProps: TodoType
}


function Todo({todoProps}: TodoProps) {
  const {id, content} = todoProps;

  const dispatch = useDispatch();

  const [ediTable, setEdiTable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id))
  }

  const handleUpdateTodo = () => {
    const payload:  TodoType = {
        id: id,
        content: newTodo
    }
    dispatch(updateTodo(payload))
    setEdiTable(false);
  }

  return (
    <div className='todo'>
        {ediTable ? <input style={{width: '400px', border: 'none', borderBottom: '1px solid lightgrey', outline: 'none'}} type='text' 
        value={newTodo} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} /> : <div>{content}</div>}
        <div>
            < IoMdRemoveCircleOutline onClick={handleRemoveTodo} className='icons' style={{marginRight: '8px'}}/>
            {ediTable ? <FaCheck className='icons' onClick={handleUpdateTodo}/> : <CiEdit onClick={() => setEdiTable(true)} className='icons'/>}
            
        </div>
    </div>
  )
}

export default Todo