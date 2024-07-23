import { MdOutlineDelete, MdModeEditOutline } from "react-icons/md";
import "./table.scss";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../Modal/deleteModal";
import { useState } from "react";
import EditModal from "../Modal/editModal";
import CreateModal from "../Modal/createModal";

const EmployeeRequest = ({ tabledata = [], fields }) => {
  const tableheader = ["S.No", "Category", "Subcategory", "Specs", "Requested At", "Status"];
  const navigate = useNavigate();

  return (
    <>
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
            {tabledata.map(({ Category, Subcategory, Specs, RequestedAt, Status }, key) => {
              let color = "orange";
              if (Status === "Approved") {
                color = "green";
              }
              if (Status === "Declined") {
                color = "red";
              }

              return (
                <tr key={key} >
                  <td>{key + 1}</td>
                  <td>{Category}</td>
                  <td>{Subcategory}</td>
                  <td>{Specs}</td>
                  <td>{RequestedAt}</td>
                  <td style={{ color: color }}>{Status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeRequest;
