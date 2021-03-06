import React, { Component } from 'react';
import TaskList from './TaskList';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

class TaskPage extends Component {
  renderTaskLists() {
    const { tasks } = this.props;
    return TASK_STATUSES.map(status => {
      const statusTasks = tasks.filter(task => task.status === status);
      return <TaskList key={status} tasks={statusTasks} />;
    });
  }

  render() {
    return (
      <div className="tasks">
        <div className="task-lists">
          {this.renderTaskLists()}
        </div>
      </div>
    );
  }
}

export default TaskPage;