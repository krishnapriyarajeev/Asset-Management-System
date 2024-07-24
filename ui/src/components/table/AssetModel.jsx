import { MdOutlineDelete, MdModeEditOutline } from "react-icons/md";
import "./table.scss";
import Pill from "../pill/pill";
import DeleteModal from "../Modal/deleteModal";
import EditModal from "../Modal/editModal";
import { useEffect, useState } from "react";
import { useGetAllAssetsQuery } from "../../pages/model/asset.api";
import { useGetSubcategoryByIdQuery } from "../../pages/subcategory/subCategory.api";
import { useParams } from "react-router-dom";

const ModelTable = ({ tabledata = [], fields }) => {
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
  const [deleteId, setDeleteId] = useState("");
  const [editId, setEditId] = useState("");
  const { subCategoryId } = useParams();

  const { isSuccess } = useGetSubcategoryByIdQuery(subCategoryId)
  useEffect(()=>{
    console.log(tabledata);
  },[tabledata])
  const deleteHandler = () => {
    // TODO: Delete API call
    console.log(deleteId);
    setDeleteId("");
  };

  const cancelDelete = () => {
    setDeleteId("");
  };

  const editHandler = () => {
    console.log(editId);
    setEditId("");
  };

  const cancelEdit = () => {
    setEditId("");
  };

  return (
    <>
      {deleteId.length > 0 && (
        <DeleteModal
          deleteHandler={deleteHandler}
          cancelHandler={cancelDelete}
        />
      )}
      {editId.length > 0 && (
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
            {isSuccess && tabledata.assets.map(
              (tabledata) => (
                <tr key={tabledata.id}>
                  <td>{tabledata.id}</td>
                  <td>{tabledata.serialNumber}</td>
                  <td>{!!tabledata?.employee ? tabledata.employee.name : "---"}</td>
                  <td>
                    <Pill
                      color={
                        tabledata.status === "Allocated"
                          ? "yellow"
                          : tabledata.status === "Unallocated"
                            ? "green"
                            : "red"
                      }
                      innerText={tabledata.status}
                      type="sm"
                    />
                  </td>
                  <td>{tabledata.createdAt.slice(0, 10)}</td>
                  <td>{tabledata.updatedAt.slice(0, 10)}</td>
                  <td className="action-td">
                    <MdOutlineDelete
                      size="25px"
                      color="#e76a6ad9"
                      className="delete-icon"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setDeleteId(tabledata.serialNumber);
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
                        setEditId(tabledata.serialNumber);
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
