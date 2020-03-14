import React from 'react';

function Todo({ todo, index, toggleComplete, removeTodo }) {
  return (
    <div className="todo-items">
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
      >
        {todo.title}
      </div>
      <button onClick={() => toggleComplete(index)}>Complete</button>
      <button onClick={() => removeTodo(index)}>Remove</button>
    </div>
  );
}

export default Todo;
