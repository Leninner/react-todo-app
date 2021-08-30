import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoBrand } from '../TodoBrand';
import { TodoContext } from '../TodoContext';

function AppUI() {
  const { error, loading, searchedTodos, completeTodos, deleteTodos } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoBrand />
      <TodoCounter />
      <TodoSearch />

      {/* Aquí llamamos los métodos de value que queremos usar */}
      <TodoList>
        {error && <p>Desespérate, hubo un error</p>}
        {loading && <p>Estamos cargando, no desesperes</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer TODO...</p>}

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

      <CreateTodoButton msg='Pepeeee' />
    </React.Fragment>
  );
}

export { AppUI };
