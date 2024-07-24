import { useNavigate } from "react-router-dom";
import "./requests.scss";
import { IoEyeOutline } from "react-icons/io5";
import { FiActivity, FiAlertCircle, FiTrendingUp } from "react-icons/fi";
import StatusCard from "../../components/statusCard/statusCard";
import RequestCard from "../../components/card/RequestCard";
import { useGetRequestListQuery } from "./request";

const statusField = [
  {
    head: "Total",
    count: "54",
    front: "#007FFF",
    middle: "#007FFF",
    end: "#007FFF",
    color: "#663dff 0%",
    icon: FiActivity,
  },
  {
    head: "Accepted",
    count: "40",
    front: "#74d680 74%",
    middle: "#378b29 0%",
    end: "#74d680 74%",
    color: "#dbf26e 0% ",
    icon: FiTrendingUp,
  },
  {
    head: "Pending",
    count: "4",
    front: "#c11d38 0%",
    middle: "#ffc857 0%",
    end: "#ffc857 24%",
    color: "#c11d38 0%",
    icon: IoEyeOutline,
  },
  {
    head: "Declined",
    count: "10",
    front: "#e85d65",
    middle: "#e85d65",
    end: "#e85d65",
    color: "#ffc857 0%",
    icon: FiAlertCircle,
  },
];

const Request = () => {
  const navigate = useNavigate();

  const { data = [] } = useGetRequestListQuery();

  return (
    <div className="category-style">
      <div className="heading-display">
        <h1 className="head">Lists</h1>
        <h4 className="tail">&nbsp;/requests</h4>
      </div>
      <div className="status-field-card">
        {statusField.map(
          ({ head, count, front, middle, end, color, icon }, index) => (
            <StatusCard
              key={index}
              head={head}
              count={count}
              front={front}
              middle={middle}
              end={end}
              color={color}
              icon={icon}
            />
          )
        )}
      </div>
      <div className="cards">
        {data.map((data, index) => (
          <RequestCard
            key={index}
            data={data}
            onClick={(path) =>
              navigate(`${path}`, { state: { employee: data.employee } })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Request;
