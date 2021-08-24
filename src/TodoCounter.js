import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h2 className='TodoCounter'>
      You have completed {completed} of {total} TODOs{' '}
    </h2>
  );
}

export { TodoCounter };
