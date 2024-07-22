import Pill from "../pill/pill";
import "./card.scss";

const CategoryCard = ({ data, onClick }) => (
  // TODO: change to id in onclick
  <div className="sub-card" onClick={() => onClick(data.heading.toLowerCase())}>
    <div>
      <h3>{data.heading}</h3>
      <h6>Created At: {data.date}</h6>
      {/* <h4 className="card-heading">{data.item}</h4> */}
      <div className="pill-group">
        <Pill innerText={`Unassigned: ${data.unassigned}`} type="green" />
        <Pill innerText={`Assigned: ${data.assigned}`} type="yellow" />
        <Pill innerText={`Damaged: ${data.damaged}`} type="red" />
        <Pill
          innerText={`Total: ${data.unassigned + data.assigned + data.damaged}`}
          type="purple"
        />
      </div>
    </div>
  </div>
);

export default CategoryCard;
