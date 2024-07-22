import { RxCross2 } from "react-icons/rx";
import "./table.scss";
import DeleteModal from "../Modal/deleteModal";
import { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import DeclineModal from "../Modal/declineModal";
import Pill from "../pill/pill";

const RequestsTable = ({ tabledata = [] }) => {
  const tableheader = [
    "S.No",
    "Employee",
    "Category",
    "Brand",
    "Model",
    "Reason",
    "Type",
    "Requested At",
    "Actions",
  ];

  // TODO: Make it to delete id and check for if it's null to toggle visibility
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const deleteHandler = () => {
    // TODO: Delete API call
    setDeleteModal(false);
  };

  const cancelDelete = () => {
    setDeleteModal(false);
  };

  const editHandler = () => {
    setEditModal(true);
  };

  const cancelEdit = () => {
    setEditModal(false);
  };

  return (
    <>
      <DeleteModal
        deleteHandler={deleteHandler}
        cancelHandler={cancelDelete}
        open={deleteModal}
      />
      <DeclineModal
        editHandler={editHandler}
        cancelHandler={cancelEdit}
        open={editModal}
      />
      <div className="table-wrapper request-table">
        <table>
          <thead>
            <tr>
              {tableheader.map((value) => (
                <th key={value}>{value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tabledata.map(
              (
                { employee, category, brand, model, reason, type, requestedAt },
                key
              ) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{employee}</td>
                  <td>{category}</td>
                  <td>{brand}</td>
                  <td>{model}</td>
                  <td>{reason}</td>
                  <td>
                    <Pill
                      color={
                        type.toLowerCase() === "exchange" ? "purple" : "green"
                      }
                      innerText={type}
                      type="sm"
                    />
                  </td>
                  <td>{requestedAt}</td>
                  <td className="action-td">
                    <CiCircleCheck
                      size="25px"
                      color="#6ab7e7d9"
                      className="delete-icon"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // setDeleteId(id);
                      }}
                    />
                    <RxCross2
                      size="25px"
                      color="#e76a6ad9"
                      className="edit-icon"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditModal(true);
                        // setEditId(id);
                      }}
                    />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RequestsTable;
