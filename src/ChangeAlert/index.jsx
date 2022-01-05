import { withChangeStorage } from './withChangeStorage';
import './changeAlert.css';

function ChangeAlert({ hasChanges, setHasChanges, sincronizeTodos }) {
  return (
    <>
      {hasChanges && (
        <div className='alerta'>
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
