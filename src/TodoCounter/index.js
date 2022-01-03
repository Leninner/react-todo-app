import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos }) {
  return (
    <h2 className='TodoCounter'>
      You have completed {completedTodos} of {totalTodos} TODOs{' '}
    </h2>
  );
}

export { TodoCounter };
