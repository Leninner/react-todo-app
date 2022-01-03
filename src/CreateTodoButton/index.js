import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({ openModal, setOpenModal }) {
  const handleClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <button className='CreateTodoButton' onClick={handleClick}>
      +
    </button>
  );
}

export { CreateTodoButton };
