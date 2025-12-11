import React from 'react';
import TaskCard from './TaskCard';
import './Column.css';

const Column = ({ title, status, tasks, onDeleteTask, onMoveTask }) => {
  const filteredTasks = tasks.filter(task => task.status === status);

  return (
    <div className="column">
      <div className="column-header">
        <h2>{title}</h2>
        <span className="task-count">{filteredTasks.length}</span>
      </div>
      
      <div className="column-content">
        {filteredTasks.length === 0 ? (
          <p className="empty-message">No tasks yet</p>
        ) : (
          filteredTasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={onDeleteTask}
              onMove={onMoveTask}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Column;