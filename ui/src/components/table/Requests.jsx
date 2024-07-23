import { RxCross2 } from "react-icons/rx";
import "./table.scss";
import { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import Pill from "../pill/pill";
import AcceptModal from "../Modal/acceptModal";
import DeclineModal from "../Modal/declineModal";

const RequestsTable = ({ tabledata = [], requestStatus = "pending" }) => {
  let tableheader = [
    "S.No",
    "Employee",
    "Category",
    "Brand",
    "Model",
    "Reason",
    "Type",
    "Requested At",
  ];

  if (requestStatus.toLowerCase() === "pending") tableheader.push("Actions");
  else tableheader.push("Status");

  // TODO: Make it to delete id and check for if it's null to toggle visibility
  const [declineId, setDeclineId] = useState("");
  const [acceptId, setAcceptId] = useState("");
  const [acceptType, setAcceptType] = useState("");

  const deleteHandler = () => {
    // TODO: Delete API call
    setDeclineId("");
  };

  const cancelDelete = () => {
    setDeclineId("");
  };

  const editHandler = () => {
    setAcceptId("");
    setAcceptType("");
  };

  const cancelEdit = () => {
    setAcceptId("");
    setAcceptType("");
  };

  return (
    <>
      {declineId.length > 0 && (
        <DeclineModal
          deleteHandler={deleteHandler}
          cancelHandler={cancelDelete}
        />
      )}
      {acceptId.length > 0 && (
        <AcceptModal
          editHandler={editHandler}
          cancelHandler={cancelEdit}
          acceptType={acceptType}
        />
      )}
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
                {
                  id,
                  employee,
                  category,
                  brand,
                  model,
                  reason,
                  type,
                  status,
                  requestedAt,
                },
                key
              ) => (
                <tr key={id}>
                  <td>{key}</td>
                  <td>{employee}</td>
                  <td>{category}</td>
                  <td>{brand}</td>
                  <td>{model}</td>
                  <td>{reason}</td>
                  <td>
                    <Pill
                      color={
                        type.toLowerCase() === "exchange" ? "purple" : "blue"
                      }
                      innerText={type}
                      type="sm"
                    />
                  </td>
                  <td>{requestedAt}</td>
                  {requestStatus.toLowerCase() === "pending" && (
                    <td className="action-td">
                      <CiCircleCheck
                        size="25px"
                        color="#6ab7e7d9"
                        className="delete-icon"
                        style={{ cursor: "pointer" }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setAcceptId(id);
                          setAcceptType(type);
                        }}
                      />
                      <RxCross2
                        size="25px"
                        color="#e76a6ad9"
                        className="edit-icon"
                        style={{ cursor: "pointer" }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setDeclineId(id);
                        }}
                      />
                    </td>
                  )}
                  {requestStatus.toLowerCase() !== "pending" && (
                    <td>
                      <Pill
                        color={
                          status.toLowerCase() === "accepted" ? "green" : "red"
                        }
                        innerText={status}
                        type="sm"
                      />
                    </td>
                  )}
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
