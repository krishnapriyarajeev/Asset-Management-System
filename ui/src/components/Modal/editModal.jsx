import { IoClose } from "react-icons/io5";
import "./deleteModal.scss";
import Modal from "./modal";
import Button from "../Button/Button";
import Form from "../Form/Form";

const EditModal = ({ editHandler, cancelHandler, open, fields}) => {
  return (
    open && (
      <Modal size="sm">
        <div className="close-icon-wrap" onClick={cancelHandler}>
          <IoClose size="25px" />
        </div>
        <div className="delete-msg-wrap">
          <h2>Edit</h2>
          <Form fields={fields}></Form>
          <Button innerText="Confirm" onClick={editHandler} />
        </div>
      </Modal>
    )
  );
};

export default EditModal;
