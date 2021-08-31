import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext(); // Nos permite crear contextos para compartir el estado entre todos los componentes de la aplicación, el nombre TodoContext puede ser facilmente un objeto.

const TodoProvider = (props) => {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState(''); // Forma de trabajar los estados.
  const [openModal, setOpenModal] = React.useState(false);

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

  const addTodos = (text) => {
    const newTodos = [...todos];
    newTodos.push({ completed: false, text: text });

    saveTodos(newTodos);
  };

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
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodos,
        addTodos,
        deleteTodos,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  ); //Todas las props que se quiera compartir deben ir dentro de value
};

export { TodoContext, TodoProvider };
