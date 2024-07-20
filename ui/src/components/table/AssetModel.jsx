import { MdOutlineDelete, MdModeEditOutline } from "react-icons/md";
import "./table.scss";
import Pill from "../pill/pill";

const ModelTable = ({ tabledata = [] }) => {
  const tableheader = [
    "S.No",
    "Serial",
    "Employee",
    "Status",
    "Created At",
    "Updated At",
    "Actions",
  ];
  return (
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
          {tabledata.map(
            ({ serialNo, status, employee, createdAt, updatedAt }, key) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{serialNo}</td>
                <td>{!employee ? "---" : employee}</td>
                <td>
                  <Pill
                    type={
                      status === "allocated"
                        ? "yellow"
                        : status === "unallocated"
                        ? "green"
                        : "red"
                    }
                    innerText={status}
                  />
                </td>
                <td>{createdAt}</td>
                <td>{updatedAt}</td>
                <td className="action-td">
                  <MdOutlineDelete
                    size="25px"
                    color="#e76a6ad9"
                    className="delete-icon"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.stopPropagation();
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
                      // setEditId(id);
                    }}
                  />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ModelTable;
