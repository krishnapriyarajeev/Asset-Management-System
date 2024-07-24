import "./modal.scss";

const Modal = ({ children, history = "" }) => {
  return (
    <div className="modal-background">
      <div className={`modal ${history}`}>{children}</div>
    </div>
  );
};

export default Modal;
