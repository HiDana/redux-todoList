import React,{ Component } from 'react';
import TodoInput from './TodoInput.js'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/index'


class Header extends Component{
  handleSave = text => {
   if (text.length !== 0) {
     this.props.addTodo(text)
   }
 }
  render(){
    return(
      <header className="header">
        <TodoInput newTodo
                   onSave={this.handleSave}
                   placeholder="new mission" />
      </header>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo }, dispatch);
}
export default connect( null, mapDispatchToProps)(Header);
