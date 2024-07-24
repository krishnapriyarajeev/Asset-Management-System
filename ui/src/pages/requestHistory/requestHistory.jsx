import { useState } from "react";
import Container from "../../components/container/container";
import "./requestHistory.scss";
import HistoryModal from "../../components/Modal/historyModal";
import RequestModal from "../../components/Modal/requestModel";

const tabledata = [
  {
    category: "Laptops",
    brand: "Dell",
    model: "Inspiron 15",
    specs: "12GB RAM, Intel i5 11th Gen, RTX 3050 Studio, 512GB SSD",
  },
  {
    category: "Mouse",
    brand: "Logitech",
    model: "MX Master 13",
    specs: "Wireless, Ergonomic",
  },
];

const RequestHistory = () => {
  const [modalToggle, setModalToggle] = useState(false);
  const [requestToggle, setRequestToggle] = useState(false);
  return (
    <>
      <HistoryModal
        open={modalToggle}
        cancelHandler={() => setModalToggle(false)}
      />
      <RequestModal
        open={requestToggle}
        cancelHandler={() => setRequestToggle(false)}
      />
      <div className="category-style">
        <div className="employee-category">
          <div className="heading-display">
            <h1 className="head">Assets/&nbsp;</h1>
            <h4 className="tail">employee</h4>
          </div>
        </div>
      </div>
      <Container>
        <button
          className="history-button"
          onClick={() => {
            setModalToggle(true);
          }}
        >
          History
        </button>
        <button
          className="request-button"
          onClick={() => {
            setRequestToggle(true);
          }}
        >
          Request
        </button>
        <div className="table-wrapper">
          <table>
            <tbody>
              {tabledata.map((asset, key) => (
                <tr key={key} onClick={() => navigate()}>
                  <td>{key}</td>
                  {Object.values(asset).map((value, key) => {
                    return <td key={key}>{value}</td>;
                  })}
                  {/* <td>{asset.brand}</td>
                  <td>{asset.model}</td>
                  <td>{asset.specs}</td> */}
                  <td className="action-td">
                    {/* <MdOutlineDelete
                  size="25px"
                  color="#e76a6ad9"
                  className="delete-icon"
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setDeleteModal(true);
                    // setDeleteId(id);
                  }}
                /> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
};

export default RequestHistory;
