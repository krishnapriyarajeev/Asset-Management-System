import "./toast.scss";

const Toast = ({ status, message, showToast }) =>
  showToast && (
    <div className={`${status === "success" ? "green" : "red"} toast`}>
      {message}
    </div>
  );

export default Toast;
