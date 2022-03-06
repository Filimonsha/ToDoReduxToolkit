import React from 'react'
import { useSelector } from 'react-redux'
import {RootState} from "../store/index"
import ToDoItem from './ToDoItem'
const ToDoList = () => {
    const data = useSelector((state:RootState)=>state.toDo.data)

  return (
<ul>
    {
        data.map((el)=>{
            
            return <ToDoItem id={el.id} isDone={el.isDone} name={el.name}></ToDoItem>;
        })
    }
</ul>
  )
}

export default ToDoList