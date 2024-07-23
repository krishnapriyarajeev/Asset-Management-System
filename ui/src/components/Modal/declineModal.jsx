import { IoClose } from "react-icons/io5";
import "./deleteModal.scss";
import Modal from "./modal";
import Button from "../button/button";

const DeclineModal = ({ deleteHandler, cancelHandler }) => {
  return (
    <Modal>
      <div className="close-icon-wrap" onClick={cancelHandler}>
        <IoClose size="25px" />
      </div>
      <div className="delete-msg-wrap">
        <h2>Decline</h2>
        {/* TODO: Form Component */}
        <Button innerText="Confirm" onClick={deleteHandler} />
      </div>
    </Modal>
  );
};

export default DeclineModal;
