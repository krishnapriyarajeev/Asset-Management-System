import { IoClose } from "react-icons/io5";
import "./deleteModal.scss";
import Modal from "./modal";
import Button from "../button/button";

const DeleteModal = ({ deleteHandler, cancelHandler }) => {
  return (
    <Modal>
      <div className="close-icon-wrap" onClick={cancelHandler}>
        <IoClose size="25px" />
      </div>
      <div className="delete-msg-wrap">
        <h2>Are you Sure ?</h2>
        <h4>Do you really want to delete ?</h4>
        <div className="button-wrap">
          <Button innerText="Confirm" onClick={deleteHandler} />
          <Button
            innerText="Cancel"
            type="reset"
            style="outline"
            onClick={cancelHandler}
          />
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
