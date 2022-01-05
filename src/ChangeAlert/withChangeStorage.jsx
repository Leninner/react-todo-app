import { useState } from 'react';

export function withChangeStorage(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [hasChanges, setHasChanges] = useState(false);

    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        setHasChanges(true);
      }
    });

    return <WrappedComponent {...props} hasChanges={hasChanges} setHasChanges={setHasChanges} />;
  };
}
