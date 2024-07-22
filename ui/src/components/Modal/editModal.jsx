import { IoClose } from "react-icons/io5";
import "./deleteModal.scss";
import Modal from "./modal";
import Form from "../Form/Form";

const EditModal = ({ editHandler, cancelHandler, open, fields }) => {
  return (
    open && (
      <Modal>
        <div className="close-icon-wrap" onClick={cancelHandler}>
          <IoClose size="25px" />
        </div>
        <div className="delete-msg-wrap">
          <h2>Edit</h2>
          <Form
            fields={fields}
            editHandler={editHandler}
            cancelHandler={cancelHandler}
          />
        </div>
      </Modal>
    )
  );
};

export default EditModal;
