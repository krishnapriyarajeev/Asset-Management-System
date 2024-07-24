import Pill from "../pill/pill";
import "./card.scss";

const RequestCard = ({ data, onClick }) => {
  return (
    <div className="sub-card" onClick={() => onClick(data.id)}>
      <div>
        <h3>{data.employee.name}</h3>
        <h4 className="card-heading">
          Department: {data.employee.department.name}
        </h4>
        <h4 className="card-heading">
          Requested At: {data.createdAt.slice(0, 10)}
        </h4>
        <div className="pill-group">
          <Pill
            innerText={data.status}
            color={data.status === "Pending" ? "yellow" : "purple"}
            type="default"
          />
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
