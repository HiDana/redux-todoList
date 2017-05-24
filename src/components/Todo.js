import React,{ Component } from 'react';
import TodoItem from './TodoItem'
import Footer from './Footer'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../actions/types_filter.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { completeAll, clearCompleted } from '../actions/index'


const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

class Todo extends Component{
  constructor(props){
    super(props);
    this.state = {
      filter: SHOW_ALL
    }
  }
  handleClearCompleted = () => {
    this.props.clearCompleted()
  }

  handleShow = filter => {
    this.setState({ filter })
  }

  // renderToggleAll(completedCount) {
  //   const { todos, actions } = this.props
  //   if (todos.length > 0) {
  //     return (
  //       <input className="toggle-all"
  //              type="checkbox"
  //              checked={completedCount === todos.length}
  //              onChange={this.props.completeAll()}
  //             />
  //     )
  //   }
  // }
  renderFooter(completedCount) {
    const { todos } = this.props
    const { filter } = this.state
    const activeCount = todos.length - completedCount

    if (todos.length) {
      return (
        <Footer completedCount={completedCount}
                activeCount={activeCount}
                filter={filter}
                onClearCompleted={this.handleClearCompleted}
                onShow={this.handleShow} />
      )
    }
  }

  render(){
    const { todos } = this.props
    const { filter } = this.state

    const filteredTodos = todos.filter(TODO_FILTERS[filter])
    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )

    return(
      <section className="main">
        {/*{this.renderToggleAll(completedCount)}*/}
        <ul className="todo-list">
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} />
          )}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    );
  }
}


function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ completeAll, clearCompleted }, dispatch);
}
export default connect( mapStateToProps, mapDispatchToProps)(Todo);
