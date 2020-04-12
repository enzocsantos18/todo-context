import React, {useContext, useState} from "react";
import './style.scss'
import { FaTrash, FaArrowDown, FaArrowUp } from "react-icons/fa";
import { GlobalContext } from '../../context/GlobalState'
import {fadeInDown } from 'react-animations'
import Radium, {StyleRoot } from 'radium'
import {Collapse} from 'react-collapse';


export default function DoneTodo() {

  const styles = {
    fadeInDown: {
      animation: '0.3s',
      animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    }
  }
   
  
  const [open, setOpen] = useState(false)

  const {todos, removeTodo} = useContext(GlobalContext)

  const doneTodos  = todos.filter(todo => {
    return todo.finished === true
  })

  return (
    
    <div className="doneTodo">
     <div onClick={ () =>{setOpen(!open)}} className="toogleCollapse">
      <h2 >Done ({doneTodos.length})</h2>
     
      {open === true ? (<FaArrowUp/>) : (<FaArrowDown/>)}
    </div> 
    <ul>
    {
      open === true ? (
        <StyleRoot>
    <Collapse  isOpened={open}>
  
    {doneTodos[0] === undefined ? (<h3>Nothing done yet. :(</h3>) : (<></>)}
    {doneTodos.map(todo =>(
        <li style={styles.fadeInDown} key={todo.id}><span>{todo.task}</span> <button onClick={() =>{
          removeTodo(todo.id)
        }}><FaTrash/></button></li>
      ))}
    </Collapse>
    </StyleRoot>
      ) : (<></>)
    }
    </ul>

  </div>
  );
}
