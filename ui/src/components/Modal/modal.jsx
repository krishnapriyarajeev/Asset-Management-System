import "./modal.scss";

const Modal = ({ children }) => {
  return (
    <div className="modal-background">
      <div className="modal">{children}</div>
    </div>
  );
};

export default Modal;
