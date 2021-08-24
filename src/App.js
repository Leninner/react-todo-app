// import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoBrand } from './TodoBrand';

const todos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoBrand />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>
      <CreateTodoButton msg='Cristiano Ronaldo' />
    </React.Fragment>
  );
}

export default App;
