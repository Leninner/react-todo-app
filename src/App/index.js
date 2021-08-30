// import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: false },
//   { text: 'Intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI />;
    </TodoProvider>
  );
}

export default App;
