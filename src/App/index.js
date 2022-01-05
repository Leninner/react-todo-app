// import './App.css';
import React from 'react';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoHeader } from '../TodoHeader';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoBrand } from '../TodoBrand';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoError } from '../TodoError';
import { TodoLoading } from '../TodoLoading';
import { TodoEmpty } from '../TodoEmpty';
import { useTodos } from './useTodos';
import { ChangeAlertWithStorage } from '../ChangeAlert';

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodos,
    setOpenModal,
    sincronizeTodos,
  } = useTodos();

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoBrand />
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} loading={loading} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => <TodoEmpty />}>
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {
              completeTodos(todo.text);
            }}
            onDelete={() => {
              deleteTodos(todo.text);
            }}
          />
        )}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm addTodos={addTodos} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
      <ChangeAlertWithStorage sincronizeTodos={sincronizeTodos} />
    </>
  );
}

export default App;
