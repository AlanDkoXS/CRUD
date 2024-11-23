import "../assets/styles/Modal.css"

export default function Modal({ isOpen, setIsOpen, children }) {
  return (
    <div className={`modal ${isOpen ? "modal--open" : "modal--closed"}`}>
      <div className="modal--overlay" onClick={() => setIsOpen(false)} />
      <div className="modal__container">
        {children}
        </div>
    </div>
  );
}
