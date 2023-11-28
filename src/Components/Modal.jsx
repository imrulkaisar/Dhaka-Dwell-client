const Modal = ({ children, onClose }) => {
  const handleOverlayClick = (event) => {
    // Check if the clicked element is the overlay (not its children)
    if (event.target.classList.contains("bg-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal fixed top-0 left-0 w-[100%] h-[100%] z-50">
      <div
        className="w-[100%] h-[100%] bg-overlay flex justify-center items-center"
        onClick={handleOverlayClick}
      >
        <div className="modal-content bg-white p-8 rounded-lg relative overflow-hidden">
          {children}
          <button
            className="close-button absolute top-0 right-0 text-sm px-2 bg-red-600 text-white"
            onClick={onClose}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
