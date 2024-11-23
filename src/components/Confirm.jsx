export default function Confirm({ user, deleteUser, setIsOpen }) {
    return (
      <div className="confirm-container">
        <h2 className="confirm-title">Confirm</h2>
        <h3 className="confirm-subtitle">Are you sure you want to delete the file?</h3>
        <div className="confirm-buttons">
          <button
            className="confirm-btn confirm-btn--delete"
            onClick={() => {
              deleteUser(user.id); 
              setIsOpen(false);
            }}
          >
            Delete
          </button>
          <button
            className="confirm-btn confirm-btn--close"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
