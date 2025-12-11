import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from '@jest/globals';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the kanban board header', () => {
    render(<App />);
    expect(screen.getByText(/Kanban Board/i)).toBeInTheDocument();
  });

  it('renders all three columns', () => {
    render(<App />);
    expect(screen.getByText(/To Do/i)).toBeInTheDocument();
    expect(screen.getByText(/In Progress/i)).toBeInTheDocument();
    expect(screen.getByText(/Done/i)).toBeInTheDocument();
  });

  it('adds a new task', () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText(/Enter task title/i);
    fireEvent.change(input, { target: { value: 'Test Task' } });
    
    // Focus to expand form
    fireEvent.focus(input);
    
    const addButton = screen.getByText(/Add Task/i);
    fireEvent.click(addButton);
    
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  it('deletes a task', () => {
    render(<App />);
    
    // Add a task first
    const input = screen.getByPlaceholderText(/Enter task title/i);
    fireEvent.change(input, { target: { value: 'Task to delete' } });
    fireEvent.focus(input);
    
    const addButton = screen.getByText(/Add Task/i);
    fireEvent.click(addButton);
    
    // Now delete it
    const deleteButton = screen.getByLabelText(/Delete task/i);
    fireEvent.click(deleteButton);
    
    expect(screen.queryByText('Task to delete')).not.toBeInTheDocument();
  });

  it('moves task from To Do to In Progress', () => {
    render(<App />);
    
    // Add a task
    const input = screen.getByPlaceholderText(/Enter task title/i);
    fireEvent.change(input, { target: { value: 'Task to move' } });
    fireEvent.focus(input);
    
    const addButton = screen.getByText(/Add Task/i);
    fireEvent.click(addButton);
    
    // Move task
    const nextButton = screen.getByText(/Next →/i);
    fireEvent.click(nextButton);
    
    // Task should now be in In Progress column
    const inProgressColumn = screen.getByText(/In Progress/i).closest('.column');
    expect(inProgressColumn).toContainElement(screen.getByText('Task to move'));
  });

  it('persists tasks in localStorage', () => {
    const { unmount } = render(<App />);
    
    // Add a task
    const input = screen.getByPlaceholderText(/Enter task title/i);
    fireEvent.change(input, { target: { value: 'Persistent Task' } });
    fireEvent.focus(input);
    
    const addButton = screen.getByText(/Add Task/i);
    fireEvent.click(addButton);
    
    unmount();
    
    // Re-render and check if task persists
    render(<App />);
    expect(screen.getByText('Persistent Task')).toBeInTheDocument();
  });
});