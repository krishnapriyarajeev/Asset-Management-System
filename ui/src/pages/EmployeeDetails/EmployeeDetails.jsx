import "./EmployeeDetails.scss";
import { useParams } from "react-router-dom";
import Container from "../../components/container/container";
import Pill from "../../components/pill/pill";
import DetailRow from "../../components/DetailRow/DetailRow";
import { MdModeEditOutline } from "react-icons/md";
import EditModal from "../../components/Modal/editModal";
import { useState } from "react";

const fields = [
  {
    id: "ename",
    text: "Employee Name",
  },
  {
    id: "email",
    text: "E-mail",
  },
  {
    id: "dept",
    text: "Department",
  },
  {
    id: "role",
    text: "Role",
  },
  {
    id: "status",
  },
];

const tabledata = [
  {
    category: "Laptops",
    brand: "Dell",
    model: "Inspiron 15",
    specs: "12GB RAM, Intel i5 11th Gen, RTX 3050 Studio, 512GB SSD",
  },
];

const employee = {
  id: "1",
  ename: "Alice",
  email: "alice@gmail.com",
  role: "HR",
  dept: "HR",
  status: "Active",
  address: {
    line1: "Kochi",
    pincode: "632416",
  },
};

const EmployeeDetails = () => {
  const { id } = useParams();
  const [editId, setEditId] = useState("");

  const editHandler = () => {
    setEditId(id);
  };

  const cancelEdit = () => {
    setEditId("");
  };

  return (
    <>
      {editId.length && (
        <EditModal editHandler={editHandler} cancelHandler={cancelEdit} />
      )}
      <div className="heading-subcategory">
        <h1 className="head">{employee.ename}/</h1>
        <h4 className="tail">Employee</h4>
      </div>
      <Container>
        <section className="form-section detail-section">
          <div className="detail-container">
            {fields.map((field) => {
              return field.id == "status" ? (
                <div className="detail-space" key="status">
                  <label className="head">Status</label>
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
                </div>
              ) : (
                <DetailRow
                  id={field.id}
                  text={field.text}
                  value={employee[field.id]}
                  key={field.id}
                />
              );
            })}
          </div>
          <hr className="detail-hr" />
          <div className="detail-div">
            <div className="detail-space">
              <label htmlFor="add" className="head">
                Address
              </label>
              <div id="add">
                {employee.address.line1},
                <br />
                {employee.address.pincode}
              </div>
            </div>
            <div className="detail-space">
              <label htmlFor="id" className="head">
                Employee ID
              </label>
              <div id="id">{id}</div>
            </div>
          </div>
        </section>
        <h1 style={{ marginTop: "30px" }}>Assets</h1>
        <div className="table-wrapper">
          <table>
            <tbody>
              {tabledata.map((asset, key) => (
                <tr key={key} style={{ cursor: "default" }}>
                  <td>{key}</td>
                  {Object.values(asset).map((value, key) => {
                    return <td key={key}>{value}</td>;
                  })}
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
                    <MdModeEditOutline
                      size="25px"
                      color="#6ab7e7d9"
                      className="edit-icon"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditId(id);
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
export default EmployeeDetails;
