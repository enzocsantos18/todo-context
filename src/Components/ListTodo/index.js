import React, {useContext} from "react";
import './style.scss'
import { FaCheck } from "react-icons/fa";
import { GlobalContext } from '../../context/GlobalState'
import {fadeInDown } from 'react-animations'
import Radium, {StyleRoot } from 'radium'


export default function ListTodo() {
  const {todos, checkTodo} = useContext(GlobalContext)

  const styles = {
    fadeInDown: {
      animation: '0.3s',
      animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    }
  }

  localStorage.setItem('todos',JSON.stringify(todos))

  const todoList = todos.filter((todo) => {
    return todo.finished === false
  }) 

  function handleCheck(id){

    const updatedTodos = todos.filter(todo => {
      if(todo.id === id){
        todo.finished = true
      }
      return todos
    })

    checkTodo(updatedTodos)

  }



  return (
   
    <div className="listTodo">
    <h2>Todo ({todoList.length})</h2>
    {todoList[0] === undefined ? (<h3>Add a todo</h3>) : (<></>)}
      <ul>
      <StyleRoot>
      {
        todoList.map(todo =>(
          <li style={styles.fadeInDown} key={todo.id}>{todo.task}<button onClick={() =>{
            handleCheck(todo.id)
          }}><FaCheck/></button></li>
        ))
      }
    </StyleRoot>
    </ul>
  </div>
  );
}
