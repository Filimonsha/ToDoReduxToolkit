import React from 'react'
import { useDispatch } from 'react-redux';
import "./SomeTest/sometest.scss";
import {changeItemIsDone} from  "../store/toDoSlice"

interface ToDoItemProps{
    name:string,
    isDone:boolean,
    id:number
}

function ToDoItem({
    name,
    isDone,
    id
}:ToDoItemProps) {
    const dispatch = useDispatch();
  return (
    <li
      className={isDone ? "caseIdDone" : "caseIsNoteDone"}
      onClick={() => {
        console.log("Кrик " + id)
        dispatch(changeItemIsDone({
            id:id
        }))}}
    >
      <span style={{display:'block',fontStyle:'italic'}}>Id этого элемента : {id} </span>

      {name}
    </li>
  );
}

export default ToDoItem
