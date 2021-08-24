import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState(''); // Forma de trabajar los estados.

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return [
    <input placeholder='Buscador...' value={searchValue} className='TodoSearch' onChange={onSearchValueChange} />,
    <p>{searchValue}</p>,
  ];
}

export { TodoSearch };
