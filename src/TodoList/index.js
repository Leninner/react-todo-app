import React from 'react';
import './TodoList.css';

function TodoList(props) {
  const { error, loading, searchedTodos, onError, onLoading, onEmptyTodos, render } = props;

  return (
    <section>
      {error && onError()}
      {loading && onLoading()}
      {!loading && !searchedTodos.length && onEmptyTodos()}
      {searchedTodos.map(render)}
    </section>
  );
}

export { TodoList };
