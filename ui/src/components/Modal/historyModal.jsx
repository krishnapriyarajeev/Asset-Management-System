import { IoClose } from "react-icons/io5";
import "./deleteModal.scss";
import Modal from "./modal";
import EmployeeRequest from "../../components/table/employeeRequest";

const HistoryModal = ({ cancelHandler, open, data }) => {
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
        <EmployeeRequest tabledata={data} />
      </Modal>
    )
  );
};

export default HistoryModal;
