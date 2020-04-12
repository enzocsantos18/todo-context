import React, {useState, useContext} from "react";
import "./style.scss";
import { FaPlus } from "react-icons/fa";
import {GlobalContext} from '../../context/GlobalState'



export default function AddTodo() {

  const {addTodo} = useContext(GlobalContext)

  const [todo, setTodo] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    
    if(todo === ""){
      return;
    }

    addTodo({
      id:  Math.floor(Math.random() * 100000000),
      task: todo,
      finished : false
    })

    setTodo('')
  }

  return (
    <div >

      <h2>Add</h2>
      <form className="addTodo" onSubmit={e =>{handleSubmit(e)}}>
        <input value={todo} placeholder={'Ex: Buy some bananas'} onChange={(e) =>{ setTodo(e.target.value)}} type="text" />
        <button><FaPlus/></button>
      </form>
    </div>
  );
}
