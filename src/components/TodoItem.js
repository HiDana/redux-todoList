import React,{ Component } from 'react';
import TodoInput from './TodoInput.js'
import '../style/todoItem.css'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { completeTodo, deleteTodo, editTodo } from '../actions/index'



class TodoItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      editing: false
    }
  }
  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }
  render(){
    const { todo, completeTodo, deleteTodo } = this.props
    let element
    if (this.state.editing) {
      element = (
        <TodoInput text={todo.text}
                   editing={this.state.editing}
                   onSave={(text) => this.handleSave(todo.id, text)} />
      )
    } else {
      element = (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={todo.completed}
                 onChange={() => completeTodo(todo.id)} />
          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy"
                  onClick={() => deleteTodo(todo.id)}>x</button>
        </div>
      )
    }
    return(
      <div className="item">
        <li>
          {element}
        </li>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ completeTodo, deleteTodo, editTodo }, dispatch);
}
export default connect( null, mapDispatchToProps)(TodoItem);
