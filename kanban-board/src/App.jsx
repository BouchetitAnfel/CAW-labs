import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import Column from './components/Column';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('kanban-tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('kanban-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const moveTask = (taskId, direction) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        let newStatus = task.status;
        
        if (direction === 'next') {
          if (task.status === 'todo') newStatus = 'inprogress';
          else if (task.status === 'inprogress') newStatus = 'done';
        } else if (direction === 'prev') {
          if (task.status === 'done') newStatus = 'inprogress';
          else if (task.status === 'inprogress') newStatus = 'todo';
        }
        
        return { ...task, status: newStatus };
      }
      return task;
    }));
  };

  const clearAllTasks = () => {
    if (window.confirm('Are you sure you want to clear all tasks?')) {
      setTasks([]);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1> Kanban Board</h1>
          <p className="subtitle">Organize your tasks efficiently</p>
        </div>
        {tasks.length > 0 && (
          <button onClick={clearAllTasks} className="clear-btn">
            Clear All
          </button>
        )}
      </header>

      <div className="app-container">
        <TaskForm onAddTask={addTask} />
        
        <div className="columns-container">
          <Column
            title="📝 To Do"
            status="todo"
            tasks={tasks}
            onDeleteTask={deleteTask}
            onMoveTask={moveTask}
          />
          
          <Column
            title="⚡ In Progress"
            status="inprogress"
            tasks={tasks}
            onDeleteTask={deleteTask}
            onMoveTask={moveTask}
          />
          
          <Column
            title="✅ Done"
            status="done"
            tasks={tasks}
            onDeleteTask={deleteTask}
            onMoveTask={moveTask}
          />
        </div>
      </div>

      <footer className="app-footer">
        <p>Total Tasks: {tasks.length}</p>
      </footer>
    </div>
  );
}

export default App;