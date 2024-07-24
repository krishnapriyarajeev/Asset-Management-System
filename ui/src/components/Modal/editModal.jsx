import { IoClose } from "react-icons/io5";
import "./deleteModal.scss";
import Modal from "./modal";
import Form from "../Form/Form";

const EditModal = ({ editHandler, cancelHandler, editFields, data }) => {
  const disable = true;
  return (
    <Modal>
      <div className="close-icon-wrap" onClick={cancelHandler}>
        <IoClose size="25px" />
      </div>
      <div className="delete-msg-wrap">
        <h2>Edit</h2>
        <Form
          fields={editFields}
          acceptHandler={editHandler}
          cancelHandler={cancelHandler}
          acceptText="Edit"
          employee={data}
        />
      </div>
    </Modal>
  );
};

export default EditModal;
