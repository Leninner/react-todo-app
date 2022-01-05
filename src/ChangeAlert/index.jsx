import { withChangeStorage } from './withChangeStorage';

function ChangeAlert({ hasChanges, setHasChanges, sincronizeTodos }) {
  return (
    <>
      {hasChanges && (
        <div>
          <h3>You have unsaved changes.</h3>
          <button
            onClick={() => {
              setHasChanges(false);
              sincronizeTodos();
            }}>
            Refresh the page
          </button>
        </div>
      )}
    </>
  );
}

const ChangeAlertWithStorage = withChangeStorage(ChangeAlert);

export { ChangeAlertWithStorage };
