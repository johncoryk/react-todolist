import React, { useState } from 'react';
import Todo from './Todo';
import CreateTodo from './CreateTodo';

function List() {
  const [todos, setTodos] = useState([
    {
      title: 'Something crazy',
      isCompleted: false
    },
    {
      title: 'Something two',
      isCompleted: true
    }
  ]);

  const addTodo = title => {
    const newTodos = [...todos, { title, isCompleted: false }];
    setTodos(newTodos);
  };

  const toggleComplete = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <h1 className="title">Todo List</h1>
      <CreateTodo addTodo={addTodo} />
      <div>
        {todos.map((todo, index) => (
          <Todo
            todo={todo}
            index={index}
            key={index}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
