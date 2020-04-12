export default (state, action) => {
  switch (action.type) {
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
      case 'ADD_TODO':
      return {
        ...state,
        todos: [action.payload,...state.todos]
      }
      case 'CHECK_TODO':
      return {
        ...state,
        todos: action.payload
      }
    default:
      return state;
  }
}