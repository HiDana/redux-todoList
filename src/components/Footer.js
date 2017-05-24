import React,{ Component } from 'react';
import '../style/footer.css'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../actions/types_filter.js'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onClearCompleted } from '../actions/index'


const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Todo',
  [SHOW_COMPLETED]: 'Completed'
}
const show_filter = [SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE]

class Footer extends Component{
  renderTodoCount() {
    const { activeCount } = this.props
    const itemWord = activeCount === 1 ? 'mission' : 'missions'

    return (
      <span className="todo-count">
        <strong>{activeCount || 'No'}</strong> {itemWord} to do
      </span>
    )
  }

  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter]
    const { filter: selectedFilter, onShow } = this.props

    return (
      <a style={{ cursor: 'pointer' }}
         onClick={() => onShow(filter)}>
        {title}
      </a>
    )
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props
    if (completedCount > 0) {
      return (
        <button className="clear-completed"
                onClick={onClearCompleted} >
          Clear completed
        </button>
      )
    }
  }

  render(){
    return(
      <footer className="footer">
        {this.renderTodoCount()}
        <ul className="filters">
          {show_filter.map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
        {this.renderClearButton()}
      </footer>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ onClearCompleted }, dispatch);
}
export default connect( null, mapDispatchToProps)(Footer);
