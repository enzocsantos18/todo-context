import React, {createContext, useReducer} from 'react'

import AppReducer from './AppReducer'


let initialState = []
const local = localStorage.getItem('todos')

if (local !== null) {
  if (local !== "undefined") {
    initialState = JSON.parse(local)
  }
}


initialState = {
  todos: initialState
}


export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) =>{
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addTodo(todo) {
    dispatch({
      type: 'ADD_TODO',
      payload: todo
    });
  }

  function removeTodo(todo) {
    dispatch({
      type: 'REMOVE_TODO',
      payload: todo
    });
  }

  function checkTodo(todo){
    dispatch({
      type: 'CHECK_TODO',
      payload: todo
    })
  }
  

  return (
    <GlobalContext.Provider value={{ todos: state.todos, addTodo, removeTodo, checkTodo}}>
      {children}
    </GlobalContext.Provider>
  )
}