/* eslint-disable no-unused-vars */
import { MdModeEditOutline, MdOutlineDelete } from "react-icons/md";
import Pill from "../../components/pill/pill";
import EditModal from "../../components/Modal/editModal";
import DeleteModal from "../../components/Modal/deleteModal";
import { useState } from "react";
import CreateButton from "../../components/button/create";
import Container from "../../components/container/container";

import { useNavigate } from "react-router-dom";
import Select from "../../components/Select/Select";

const createFields = [
  {
    id: "name",
    text: "Employee Name",
  },
  {
    id: "email",
    text: "E-mail",
  },
  {
    id: "password",
    text: "Password",
    type: "password",
  },
  {
    id: "role",
    Component: Select,
    label: "Role",
    choose: ["UI", "HR", "UX"],
  },
  {
    id: "status",
    Component: Select,
    label: "Status",
    choose: ["Active", "Probation", "Inactive"],
  },
  {
    id: "experience",
    type: "number",
    text: "Experience",
  },
  {
    id: "line1",
    text: "Line 1",
  },
  {
    id: "line2",
    text: "Line 2",
  },
  {
    id: "departmentName",
    text: "Department",
  },
];

const editFields = [
  {
    id: "name",
    text: "Employee Name",
  },
  {
    id: "email",
    text: "E-mail",
  },
  {
    id: "id",
    text: "Employee ID",
  },
  {
    id: "role",
    Component: Select,
    label: "Role",
    choose: ["UI", "HR", "UX"],
  },
  {
    id: "status",
    Component: Select,
    label: "Status",
    choose: ["Active", "Probation", "Inactive"],
  },
  {
    id: "experience",
    type: "number",
    text: "Experience",
  },
  {
    id: "line1",
    text: "Line 1",
  },
  {
    id: "line2",
    text: "Line 2",
  },
  {
    id: "departmentName",
    text: "Department",
  },
];

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
      name: "Alice",
      email: "alice@gmail.com",
      role: "HR",
      status: "Active",
      experience: "2",
      department: { name: "HR" },
      address: {
        line1: "Kochi",
        line2: "632416",
      },
    },
  ];

  // TODO: Make it to delete id and check for if it's null to toggle visibility
  // const [deleteModal, setDeleteModal] = useState(false);
  // const [editModal, setEditModal] = useState(false);
  const [editId, setEditId] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const deleteHandler = () => {
    // TODO: Delete API call
    setDeleteId("");
  };

  const cancelDelete = () => {
    setDeleteId("");
  };

  const editHandler = (data) => {
    const { line1, line2, departmentName, ...newData } = {
      ...data,
      department: { name: data.departmentName },
      address: { line1: data.line1, line2: data.line2 },
    };
    console.log(newData);
    setEditId("");
  };

  const cancelEdit = () => {
    setEditId("");
  };

  const editEmployee = (e, id) => {
    e.stopPropagation();
    const employee = tabledata.find((employee) => employee.id == id);
    if (!employee) return;
    const list = {
      ...employee,
      ...employee?.address,
      departmentName: employee.department.name,
    };
    setData(list);
    setEditId(id);
  };

  return (
    <>
      <div className="heading-subcategory">
        <h1 className="head">Lists</h1>
        <h4 className="tail">&nbsp;/Employees</h4>
      </div>
      <Container>
        <CreateButton fields={createFields} />

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
            editFields={editFields}
            data={data}
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
              {tabledata.map((employee) => (
                <tr key={employee.id} onClick={() => navigate(employee.id)}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.role}</td>
                  <td>{employee.department?.name}</td>
                  <td>
                    <Pill
                      color={
                        employee.status === "Active"
                          ? "green"
                          : employee.status === "Probation"
                          ? "yellow"
                          : "red"
                      }
                      innerText={employee.status}
                      type="sm"
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
                        setDeleteId(employee.id);
                      }}
                    />
                    <MdModeEditOutline
                      size="25px"
                      color="#6ab7e7d9"
                      className="edit-icon"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => editEmployee(e, employee.id)}
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
