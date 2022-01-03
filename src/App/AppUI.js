import React from 'react';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoHeader } from '../TodoHeader';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoBrand } from '../TodoBrand';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoError } from '../TodoError';
import { TodoLoading } from '../TodoLoading';
import { TodoEmpty } from '../TodoEmpty';

export const AppUI = () => {
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
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoBrand />
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList>
        {error && <TodoError error={error} />}
        {loading && <TodoLoading />}
        {!loading && !searchedTodos.length && <TodoEmpty />}

        {searchedTodos.map((todo) => (
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
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton />
    </React.Fragment>
  );
};
