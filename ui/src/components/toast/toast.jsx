import "./toast.scss";

const Toast = ({ status, message, showToast }) =>
  showToast && (
    <div
      className={`${status === "success" ? "toast-green" : "toast-red"} toast`}
    >
      {message}
    </div>
  );

export default Toast;
