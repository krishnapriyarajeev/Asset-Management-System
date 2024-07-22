import { MdOutlineDelete, MdModeEditOutline } from "react-icons/md";
import "./table.scss";
import Pill from "../pill/pill";
import DeleteModal from "../Modal/deleteModal";
import EditModal from "../Modal/editModal";
import { useState } from "react";

const ModelTable = ({ tabledata = [] , fields}) => {
  const tableheader = [
    "S.No",
    "Serial",
    "Employee",
    "Status",
    "Created At",
    "Updated At",
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
      <EditModal
        editHandler={editHandler}
        cancelHandler={cancelEdit}
        open={editModal}
        fields={fields}
      />
      <div className="table-wrapper">
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
              ({ serialNo, status, employee, createdAt, updatedAt }, key) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{serialNo}</td>
                  <td>{!employee ? "---" : employee}</td>
                  <td>
                    <Pill
                      color={
                        status === "allocated"
                          ? "yellow"
                          : status === "unallocated"
                          ? "green"
                          : "red"
                      }
                      innerText={status}
                      type="sm"
                    />
                  </td>
                  <td>{createdAt}</td>
                  <td>{updatedAt}</td>
                  <td className="action-td">
                    <MdOutlineDelete
                      size="25px"
                      color="#e76a6ad9"
                      className="delete-icon"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setDeleteModal(true);
                        // setDeleteId(id);
                      }}
                    />
                    <MdModeEditOutline
                      size="25px"
                      color="#6ab7e7d9"
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

export default ModelTable;
