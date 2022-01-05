import { useEffect, useState } from 'react';

//REACT HOOk
function useLocalStorage(itemName, initialValue) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [syncronize, setSyncronize] = useState(true);

  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setSyncronize(true);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  }, [syncronize]);

  //Función para controlar el flujo de la app
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  const sincronizeItem = () => {
    setSyncronize(false);
    setLoading(true);
  };

  return { item, saveItem, loading, error, sincronizeItem };
}

export { useLocalStorage };
