import { RxCross2 } from "react-icons/rx";
import "./table.scss";
import { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import Pill from "../pill/pill";
import RequestModal from "../Modal/requestModal";

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
    "Status",
    "Actions",
  ];

  // TODO: Make it to delete id and check for if it's null to toggle visibility
  const [declineId, setDeclineId] = useState(null);
  const [acceptId, setAcceptId] = useState(null);

  const declineHandler = () => {
    // TODO: Request Handler API call
    setDeclineId(null);
  };

  const cancelDelete = () => {
    setDeclineId(null);
  };

  const acceptHandler = () => {
    // TODO: Request Handler API call
    setAcceptId(null);
  };

  const cancelAccept = () => {
    setAcceptId(null);
  };

  return (
    <>
      {!!declineId && (
        <RequestModal
          accept={false}
          requestHandler={declineHandler}
          cancelHandler={cancelDelete}
        />
      )}
      {!!acceptId && (
        <RequestModal
          accept
          requestHandler={acceptHandler}
          cancelHandler={cancelAccept}
        />
      )}
      <div className="table-wrapper no-link-table">
        <table>
          <thead>
            <tr>
              {tableheader.map((value) => (
                <th key={value}>{value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {!!tabledata.requestedItems &&
              tabledata.requestedItems.map((data) => {
                return (
                  <tr key={data?.id}>
                    <td>{data?.id}</td>
                    <td>{tabledata.employee.name}</td>
                    <td>{data.subcategory.category.categoryName}</td>
                    <td>{data.subcategory.brandName}</td>
                    <td>{data.subcategory.modelName}</td>
                    <td>{data.reason}</td>
                    <td>
                      <Pill
                        color={
                          data?.requestType === "Exchange" ? "purple" : "blue"
                        }
                        innerText={data?.requestType}
                        type="sm"
                      />
                    </td>
                    <td>{data.createdAt.slice(0, 10)}</td>
                    <td>
                      <Pill color="yellow" innerText="Pending" type="sm" />
                    </td>
                    {requestStatus.toLowerCase() === "pending" && (
                      <td className="action-td">
                        <CiCircleCheck
                          size="25px"
                          color="#6ab7e7d9"
                          className="delete-icon"
                          style={{ cursor: "pointer" }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setAcceptId("id");
                          }}
                        />
                        <RxCross2
                          size="25px"
                          color="#e76a6ad9"
                          className="edit-icon"
                          style={{ cursor: "pointer" }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setDeclineId("id");
                          }}
                        />
                      </td>
                    )}
                    {requestStatus.toLowerCase() !== "pending" && (
                      <td>
                        <Pill
                          color={
                            status.toLowerCase() === "Accepted"
                              ? "green"
                              : "red"
                          }
                          innerText={status}
                          type="sm"
                        />
                      </td>
                    )}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RequestsTable;
