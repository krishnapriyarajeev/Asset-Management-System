import { MdOutlineDelete, MdModeEditOutline } from "react-icons/md";
import "./table.scss";
import { useNavigate, useParams } from "react-router-dom";
import DeleteModal from "../Modal/deleteModal";
import { useEffect, useState } from "react";
import EditModal from "../Modal/editModal";
import { useGetAllSubcategoriesQuery, useGetSubcategoryByIdQuery } from "../../pages/subcategory/subCategory.api";

const CategoryTable = ({ tabledata = [], fields }) => {
  const tableheader = ["S.No", "Brand", "Model", "Specs", "Count", "Actions"];
  const navigate = useNavigate();
  const { data,isSuccess } = useGetAllSubcategoriesQuery()
  // TODO: Make it to delete id and check for if it's null to toggle visibility
  const [deleteId, setDeleteId] = useState("");
  const [editId, setEditId] = useState("");
  const { categoryId } = useParams();

  // useEffect(()=>{
  //   console.log(categoryId);
  // },[tabledata])
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
            {isSuccess && data.filter((tabledata) => tabledata.category.categoryName.toLowerCase() === `${categoryId}`).map((tabledata) => (
              <tr key={tabledata.id} onClick={() => navigate(`${tabledata.id}`)}>
                <td>{tabledata.id}</td>
                <td>{tabledata.brandName}</td>
                <td>{tabledata.modelName}</td>
                <td>{tabledata.Specifications}</td>
                <td>count</td>

                <td className="action-td">
                  <MdOutlineDelete
                    size="25px"
                    color="#e76a6ad9"
                    className="delete-icon"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setDeleteId(tabledata.modelName);
                    }}
                  />
                  <MdModeEditOutline
                    size="25px"
                    color="#6ab7e7d9"
                    className="edit-icon"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditId(tabledata.modelName);
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
