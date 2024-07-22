import { MdOutlineDelete, MdModeEditOutline } from "react-icons/md";
import "./table.scss";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../Modal/deleteModal";
import { useState } from "react";
import EditModal from "../Modal/editModal";
import CreateModal from "../Modal/createModal";

const CategoryTable = ({ tabledata = [] , fields}) => {
  const tableheader = ["S.No", "Brand", "Model", "Specs", "Count", "Actions"];
  const navigate = useNavigate();

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
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoryTable;
