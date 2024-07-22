import Pill from "../pill/pill";
import "./card.scss";

const RequestCard = ({ data, onClick }) => (
  // TODO: change to id in onclick
  <div className="sub-card" onClick={() => onClick(data.id)}>
    <div>
      <h3>{data.name}</h3>
      <h4 className="card-heading">Department: {data.department}</h4>
      <h4 className="card-heading">Requested At: {data.date}</h4>
      <div className="pill-group">
        <Pill
          innerText={data.status}
          color={
            data.status === "pending"
              ? "yellow"
              : data.status === "accepted"
              ? "green"
              : "red"
          }
          type="default"
        />
      </div>
    </div>
  </div>
);

export default RequestCard;
