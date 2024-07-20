import { MdOutlineDelete, MdModeEditOutline } from "react-icons/md";
import "./table.scss";
import Pill from "../pill/pill";

const Table = ({ data = [] }) => {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Employee ID</th>
            <th>Joining Date</th>
            <th>Role</th>
            <th>Status</th>
            <th>Experience</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, id, joinDate, role, status, experience }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{id}</td>
              <td>{joinDate}</td>
              <td>{role}</td>
              <td>
                <Pill type="green" innerText={status} />
              </td>
              <td>{experience} years</td>
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
