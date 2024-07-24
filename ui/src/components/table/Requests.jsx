import { RxCross2 } from "react-icons/rx";
import "./table.scss";
import { useEffect, useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import Pill from "../pill/pill";
import AcceptModal from "../Modal/acceptModal";
import DeclineModal from "../Modal/declineModal";
import { useParams } from "react-router-dom";
import { useGetRequestDetailsQuery } from "../../pages/requests/request";

const RequestsTable = ({ tabledata = [], requestStatus = "pending", employee = {} }) => {
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
  const { requestId } = useParams();
  const { data } = useGetRequestDetailsQuery(requestId);
  useEffect(() => {
    console.log(data?.requestedItems)
  }, [data]);
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
            {data?.requestedItems && data?.requestedItems.map(
              (data) => {
                console.log(data);
                return (
                  <tr key={data?.id}>
                    <td>{data?.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.name}</td>
                    <td>{employee.name}</td>
                    <td>{employee.name}</td>

                    <td>{data?.reason}</td>
                    <td>
                    <Pill
                      color={
                        data?.requestType === "Exchange" ? "purple" : "blue"
                      }
                      innerText={data?.requestType}
                      type="sm"
                    />
                  </td>
                    <td>{data?.createdAt.slice(0, 10)}</td>
                  
                    
                    
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
                          setAcceptType(data?.requestType);
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
                          status.toLowerCase() === "Accepted" ? "green" : "red"
                        }
                        innerText={status}
                        type="sm"
                      />
                    </td>
                  )}
                  </tr>
                )
              }
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RequestsTable;
