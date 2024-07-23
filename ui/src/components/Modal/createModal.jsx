import { IoClose } from "react-icons/io5";
import Modal from "./modal";
import Form from "../Form/Form";

const CreateModal = ({ createHandler, cancelHandler, open, createFields }) => {
  return (
    open && (
      <Modal>
        <div className="close-icon-wrap" onClick={cancelHandler}>
          <IoClose size="25px" />
        </div>

        <div className="delete-msg-wrap">
          <h2>Create</h2>
          <Form
            fields={createFields}
            acceptHandler={createHandler}
            cancelHandler={cancelHandler}
            acceptText="Create"
          ></Form>
        </div>
      </Modal>
    )
  );
};

export default CreateModal;
