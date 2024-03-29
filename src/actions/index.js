import * as types from './types_actions.js'

export function addTodo(text){
  return {
    type: types.ADD_TODO,
    text
  };
}
export function editTodo(id, text){
  return {
    type: types.EDIT_TODO,
    id,
    text
  };
}
export function deleteTodo(id){
  return {
    type: types.DELETE_TODO,
    id
  };
}

export function completeTodo(id){
  return {
    type: types.COMPLETE_TODO,
    id
  };
}

export function completeAll(){
  return {
    type: types.COMPLETE_ALL
  };
}
export function onClearCompleted(){
  return {
    type: types.CLEAR_COMPLETED
  };
}
