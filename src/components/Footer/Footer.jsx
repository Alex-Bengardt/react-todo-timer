import React from 'react'
import PropTypes from 'prop-types'

import TasksFilter from '../TaskFilter'

export default function Footer({ tasksCounter, clearCompleted, onFilterSelect, selectedFilter }) {
  return (
    <footer className="footer">
      <span className="todo-count">{tasksCounter} items left</span>
      <TasksFilter onFilterSelect={onFilterSelect} selectedFilter={selectedFilter} />
      <button type="button" onClick={clearCompleted} className="clear-completed">
        Clear completed
      </button>
    </footer>
  )
}

Footer.propTypes = {
  tasksCounter: PropTypes.number,
  clearCompleted: PropTypes.func,
  onFilterSelect: PropTypes.func,
  selectedFilter: PropTypes.string,
}

Footer.defaultProps = {
  tasksCounter: 0,
  clearCompleted: () => {},
  onFilterSelect: () => {},
  selectedFilter: 'All',
}
