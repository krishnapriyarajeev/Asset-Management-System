import { MdOutlineDelete, MdModeEditOutline } from "react-icons/md";
import "./table.scss";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../Modal/deleteModal";
import { useState } from "react";
import EditModal from "../Modal/editModal";

const CategoryTable = ({ tabledata = [], fields }) => {
  const tableheader = ["S.No", "Brand", "Model", "Specs", "Count", "Actions"];
  const navigate = useNavigate();

  // TODO: Make it to delete id and check for if it's null to toggle visibility
  const [deleteId, setDeleteId] = useState("");
  const [editId, setEditId] = useState("");

  const deleteHandler = () => {
    // TODO: Delete API call
    setDeleteId("");
  };

  const cancelDelete = () => {
    setDeleteId("");
  };

  const editHandler = () => {
    setEditId("");
  };

  const cancelEdit = () => {
    setEditId("");
  };

  return (
    <>
      {deleteId && (
        <DeleteModal
          deleteHandler={deleteHandler}
          cancelHandler={cancelDelete}
        />
      )}
      {editId && (
        <EditModal
          editHandler={editHandler}
          cancelHandler={cancelEdit}
          fields={fields}
        />
      )}
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
            {tabledata.map(({ brand, model, specs, count }, key) => (
              <tr key={key} onClick={() => navigate(`${brand.toLowerCase()}`)}>
                <td>{key}</td>
                <td>{brand}</td>
                <td>{model}</td>
                <td>{specs}</td>
                <td>{count}</td>
                <td className="action-td">
                  <MdOutlineDelete
                    size="25px"
                    color="#e76a6ad9"
                    className="delete-icon"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setDeleteId(model);
                    }}
                  />
                  <MdModeEditOutline
                    size="25px"
                    color="#6ab7e7d9"
                    className="edit-icon"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditId(model);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoryTable;
