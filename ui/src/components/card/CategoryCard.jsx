import Pill from "../pill/pill";
import "./card.scss";

const CategoryCard = ({ data, onClick }) => (
  // TODO: change to id in onclick
  <div className="sub-card" onClick={() => onClick(data.heading.toLowerCase())}>
    <div>
      <h3>{data.heading}</h3>
      <div className="pill-group">
        <Pill
          innerText={`Unallocated: ${data.unassigned}`}
          color="green"
          type="default"
          plain
        />
        <Pill
          innerText={`Allocated: ${data.assigned}`}
          color="yellow"
          type="default"
          plain
        />
        <Pill
          innerText={`Damaged: ${data.damaged}`}
          color="red"
          type="default"
          plain
        />
        <Pill
          innerText={`Total: ${data.unassigned + data.assigned + data.damaged}`}
          color="purple"
          plain
        />
      </div>
    </div>
  </div>
);

export default CategoryCard;
