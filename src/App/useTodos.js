import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useTodos = () => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    sincronizeItem: sincronizeTodos,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = useState(''); // Forma de trabajar los estados.
  const [openModal, setOpenModal] = useState(false);

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
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);

    saveTodos(newTodos);
  };

  return {
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
    sincronizeTodos,
  };
};
