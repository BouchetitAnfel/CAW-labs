import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (title.trim() === '') {
      alert('Please enter a task title');
      return;
    }

    onAddTask({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      status: 'todo'
    });

    setTitle('');
    setDescription('');
    setIsExpanded(false);
  };

  return (
    <div className="task-form-container">
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter task title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            className="task-input"
          />
        </div>

        {isExpanded && (
          <div className="form-expanded">
            <div className="form-group">
              <textarea
                placeholder="Add description (optional)..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="task-textarea"
                rows="3"
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-add">
                Add Task
              </button>
              <button
                type="button"
                className="btn-cancel"
                onClick={() => {
                  setIsExpanded(false);
                  setTitle('');
                  setDescription('');
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default TaskForm;