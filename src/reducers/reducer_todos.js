import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, CLEAR_COMPLETED } from '../actions/types_actions.js'

const initialState = [
  {
    text: 'Hug the one near by you',
    completed: false,
    id: 0
  }
]

export default function(state = initialState, action) {
  switch(action.type) {
  case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ]

  case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

  case EDIT_TODO:
    return state.map(todo =>
      todo.id === action.id ?
        { ...todo, text: action.text } :
        todo
    )

  case COMPLETE_TODO:
    return state.map(todo =>
      todo.id === action.id ?
        { ...todo, completed: !todo.completed } :
        todo
    )

  case CLEAR_COMPLETED:
    return state.filter(todo => todo.completed === false)


  default:
      return state

}
}
