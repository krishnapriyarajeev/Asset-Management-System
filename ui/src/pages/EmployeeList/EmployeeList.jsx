import { MdModeEditOutline, MdOutlineDelete } from "react-icons/md";
import Pill from "../../components/pill/pill";
import EditModal from "../../components/Modal/editModal";
import DeleteModal from "../../components/Modal/deleteModal";
import { useState } from "react";
import CreateButton from "../../components/button/create";
import Container from "../../components/container/container";

import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const tableheader = [
    "ID",
    "Name",
    "E-mail",
    "Role",
    "Department",
    "status",
    "Actions",
  ];

  const tabledata = [
    {
      id: "1",
      ename: "Alice",
      email: "alice@gmail.com",
      role: "HR",
      dept: "HR",
      status: "Active",
    },
  ];

  // TODO: Make it to delete id and check for if it's null to toggle visibility
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const navigate = useNavigate();

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
      <div className="heading-subcategory">
          <h1 className="head">Lists</h1>
          <h4 className="tail">&nbsp;/Employees</h4>
        </div>
      <Container>
        
        <CreateButton />
        
        <DeleteModal
          deleteHandler={deleteHandler}
          cancelHandler={cancelDelete}
          open={deleteModal}
        />
        <EditModal
          editHandler={editHandler}
          cancelHandler={cancelEdit}
          open={editModal}
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
              {tabledata.map((employee) => (
                <tr key={employee.id} onClick={() => navigate(employee.id)}>
                  <td>{employee.id}</td>
                  <td>{employee.ename}</td>
                  <td>{employee.email}</td>
                  <td>{employee.role}</td>
                  <td>{employee.dept}</td>
                  <td>
                    <Pill
                      type={
                        employee.status === "Active"
                          ? "green"
                          : employee.status === "Probation"
                          ? "yellow"
                          : "red"
                      }
                      innerText={employee.status}
                    />
                  </td>
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
      </Container>
    </>
  );
};
export default EmployeeList;
