// import './App.css';
import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: false },
//   { text: 'Intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
// ];

//REACT HOOk
function useLocalStorage(itemName, initialValue) {
  //NOTE: Local Storage
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  //Lógica para comprobar si ya han usado la aplicación o no.
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  //Función para controlar el flujo de la app
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };
  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

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

    saveTodos(newTodos);

    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true,
    // };
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);

    saveTodos(newTodos);

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
