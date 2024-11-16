function Modal ({ isOpen, setIsOpen, children }) {
  return (
    <div className={`modal ${isOpen ? 'modal--open' : ''}`}>
      <div className="modal--overlay"></div>
      <div className="modal__container">
        {children}
        <button onClick={() => setIsOpen(false)}>Cerrar modal</button>
      </div>
    </div>
  )
}
export default Modal