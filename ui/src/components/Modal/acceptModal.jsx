import { IoClose } from "react-icons/io5";
import "./deleteModal.scss";
import Modal from "./modal";
import Form from "../Form/Form";
import Select from "../Select/Select";
import Button from "../button/button";

const acceptField = [
  {
    Component: Select,
    id: "status",
    label: "Status",
    choose: ["Unallocated", "Damaged"],
  },
];

const AcceptModal = ({ editHandler, cancelHandler, acceptType }) => {
  return (
    <Modal>
      <div className="close-icon-wrap" onClick={cancelHandler}>
        <IoClose size="25px" />
      </div>
      <div className="delete-msg-wrap">
        <h2>Accept?</h2>
        {(acceptType == "Exchange" && (
          <Form
            fields={acceptField}
            acceptText="Confirm"
            acceptHandler={editHandler}
            cancelHandler={cancelHandler}
            accept="accept-form"
          />
        )) || (
          <Button innerText="Confirm" onClick={editHandler} type="submit" />
        )}
      </div>
    </Modal>
  );
};

export default AcceptModal;
