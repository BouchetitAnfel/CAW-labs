import React from 'react';
import './TaskCard.css';

const TaskCard = ({ task, onDelete, onMove }) => {
  return (
    <div className="task-card">
      <div className="task-header">
        <h3>{task.title}</h3>
        <button 
          className="delete-btn" 
          onClick={() => onDelete(task.id)}
          aria-label="Delete task"
        >
          ×
        </button>
      </div>
      
      {task.description && (
        <p className="task-description">{task.description}</p>
      )}
      
      <div className="task-actions">
        {task.status !== 'todo' && (
          <button 
            className="move-btn prev"
            onClick={() => onMove(task.id, 'prev')}
          >
            ← Previous
          </button>
        )}
        
        {task.status !== 'done' && (
          <button 
            className="move-btn next"
            onClick={() => onMove(task.id, 'next')}
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;