import { combineReducers } from 'redux'

import todos from './reducer_todos.js'

const rootReducer = combineReducers({
   todos

});

export default rootReducer;
