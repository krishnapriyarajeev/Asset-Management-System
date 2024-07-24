import { IoClose } from "react-icons/io5";
import "./deleteModal.scss";
import Modal from "./modal";
import Table from "../../components/table/employeeRequest";

const modelData = [
  {
    Category: "Laptop",
    Subcategory: "Dell Latitude 5501",
    Specs: "12GB RAM, Intel i5 11th Gen, RTX 3050 Studio, 512GB SSD",
    RequestedAt: "2023-01-15",
    Status: "Approved",
  },
  {
    Category: "Laptop",
    Subcategory: "HP Envy x360",
    Specs: "8GB RAM, Intel i7 10th Gen, Intel Iris Plus, 256GB SSD",
    RequestedAt: "2023-02-20",
    Status: "Approved",
  },
  {
    Category: "Laptop",
    Subcategory: "Apple MacBook Air",
    Specs: "16GB RAM, M1 Chip, 512GB SSD",
    RequestedAt: "2023-03-10",
    Status: "Pending",
  },
  {
    Category: "Keyboard",
    Subcategory: "Logitech MX Keys",
    Specs: "Wireless, Backlit",
    RequestedAt: "2023-04-05",
    Status: "Approved",
  },
  {
    Category: "Keyboard",
    Subcategory: "Corsair K95 RGB",
    Specs: "Mechanical, RGB Lighting",
    RequestedAt: "2023-05-18",
    Status: "Declined",
  },
  {
    Category: "Mouse",
    Subcategory: "Razer DeathAdder V2",
    Specs: "Wired, High Precision",
    RequestedAt: "2023-06-22",
    Status: "Pending",
  },
  {
    Category: "Mouse",
    Subcategory: "Logitech MX Master 3",
    Specs: "Wireless, Ergonomic",
    RequestedAt: "2023-07-12",
    Status: "Approved",
  },
  {
    Category: "Headphones",
    Subcategory: "Sony WH-1000XM4",
    Specs: "Noise Cancelling, Wireless",
    RequestedAt: "2023-08-02",
    Status: "Declined",
  },
];

const HistoryModal = ({ editHandler, cancelHandler, open, fields }) => {
  return (
    open && (
      <Modal history="history">
        <div className="close-icon-wrap history-icon" onClick={cancelHandler}>
          <IoClose size="25px" />
        </div>
        <div className="employee-history">
          <div className="heading-display">
            <h1 className="head">History</h1>
            <h4 className="tail">&nbsp;/requests</h4>
          </div>
        </div>
        <Table tabledata={modelData} />
      </Modal>
    )
  );
};

export default HistoryModal;
