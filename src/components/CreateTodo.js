import React, { useState } from 'react';

function CreateTodo({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;

    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={value}
        placeholder="Add a new Todo"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default CreateTodo;
