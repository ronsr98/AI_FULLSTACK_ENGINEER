// step 4 - a simple popup. click the dark background or the × to close it.
const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* stop clicks inside the box from closing it */}
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  )
}

export default Modal
