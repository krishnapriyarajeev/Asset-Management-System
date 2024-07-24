import { IoClose } from "react-icons/io5";
import "./deleteModal.scss";
import Modal from "./modal";
import Form from "../../components/Form/Form";
import Select from "../../components/Select/Select";
const formData = [
  {
    id: "category",
    Component: Select,
    choose: ["Laptop", "Keyboard", "Mouse", "Headphhones", "Notepad", "Pen"],
    label: "Category",
  },
  {
    id: "subcatgeory",
    Component: Select,
    choose: [
      "Dell Inspiron 15 12GB RAM, Intel i5 11th Gen, RTX 3050 Studio, 512GB SSD",
      "Hp Pavilion 14",
      "Apple Macbook Air",
    ],
    label: "Subcategory",
  },
  {
    id: "requestType",
    Component: Select,
    label: "Request Type",
    choose: ["New", "Exchange"],
  },
  {
    id: "exchangeAsset",
    text: "Exchange Asset",
    disable: true,
  },
  {
    id: "reason",
    text: "Reason",
  },
];

const RequestModal = ({ editHandler, cancelHandler, open }) => {
  return (
    open && (
      <Modal history="history">
        <div className="close-icon-wrap" onClick={cancelHandler}>
          <IoClose size="25px" />
        </div>

        <div className="delete-msg-wrap">
          <h1>Request</h1>
        </div>
        <Form
          fields={formData}
          acceptText="Confirm"
          add={true}
          cancelHandler={cancelHandler}
          acceptHandler={editHandler}
          accept="spec"
        />
      </Modal>
    )
  );
};

export default RequestModal;
