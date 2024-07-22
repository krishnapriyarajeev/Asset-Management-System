import { IoClose } from "react-icons/io5";
import "./deleteModal.scss";
import Modal from "./modal";
import Button from "../button/button";

const DeclineModal = ({ editHandler, cancelHandler, open }) => {
  return (
    open && (
      <Modal size="sm">
        <div className="close-icon-wrap" onClick={cancelHandler}>
          <IoClose size="25px" />
        </div>
        <div className="delete-msg-wrap">
          <h2>Decline?</h2>
          {/* TODO: Form Component */}
          <Button innerText="Confirm" onClick={editHandler} />
        </div>
      </Modal>
    )
  );
};

export default DeclineModal;
