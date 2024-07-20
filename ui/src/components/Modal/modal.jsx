import "./modal.scss";

const Modal = ({ children, size = "default" }) => {
  return <div className={`modal ${size}`}>{children}</div>;
};

export default Modal;
