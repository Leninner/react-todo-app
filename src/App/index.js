// import './App.css';
import React from 'react';
import { AppUI } from './AppUI';

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: false },
  { text: 'Intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState(''); // Forma de trabajar los estados.

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;

    setTodos(newTodos);

    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true,
    // };
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);

    setTodos(newTodos);

    // function deleteTodo(text){
    //   const newTodos = todos.filter(todo=>todo.text !== text)
    //   setTodos(newTodos)
    // }
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
    />
  );
}

export default App;
