import { MdOutlineDelete, MdModeEditOutline } from "react-icons/md";
import "./table.scss";
import { useNavigate } from "react-router-dom";

const CategoryTable = ({ tabledata = [] }) => {
  const tableheader = ["S.No", "Brand", "Model", "Specs", "Count", "Actions"];
  const navigate = useNavigate();
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
          {tabledata.map(({ brand, model, specs, count }, key) => (
            <tr key={key} onClick={() => navigate(`${brand.toLowerCase()}`)}>
              <td>{key}</td>
              <td>{brand}</td>
              <td>{model}</td>
              <td>{specs}</td>
              <td>{count}</td>
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

export default CategoryTable;
