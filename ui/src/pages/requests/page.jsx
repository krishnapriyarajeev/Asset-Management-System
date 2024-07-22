import { useNavigate } from "react-router-dom";
import "./requests.scss";
import CreateButton from "../../components/button/create";
import { IoGitPullRequestOutline } from "react-icons/io5";
import CategoryCard from "../../components/card/CategoryCard";
import Select from "../../components/Select/Select";

const data = [
  {
    logo: <IoGitPullRequestOutline className="sub-logo" />,
    heading: "100",
    name: "name",
    date: "date",
  },
  {
    logo: <IoGitPullRequestOutline className="sub-logo" />,
    heading: "101",
    name: "name",
    date: "date",
  },
  {
    logo: <IoGitPullRequestOutline className="sub-logo" />,
    heading: "102",
    name: "name",
    date: "date",
  },
  {
    logo: <IoGitPullRequestOutline className="sub-logo" />,
    heading: "103",
    name: "name",
    date: "date",
  },
  {
    logo: <IoGitPullRequestOutline className="sub-logo" />,
    heading: "104",
    name: "name",
    date: "date",
  },
  {
    logo: <IoGitPullRequestOutline className="sub-logo" />,
    heading: "105",
    name: "name",
    date: "date",
  },
];

const fields = [
  {
    id: "RequestType",
    label: "Request Type",
    Component: Select,
    choose: ["New", "Exchange"],
  },
  {
    id: "reason",
    text: "Reason",
  },
];

const Request = () => {
  const navigate = useNavigate();
  return (
    <div className="category-style">
      <div className="heading-display">
        <h1 className="head">Lists</h1>
        <h4 className="tail">&nbsp;/requests</h4>
        <CreateButton fields={fields}/>
      </div>
      <div className="cards">
        {/* {data.map(({ logo, heading, name, date }) => (
          <CategoryCard
            key={heading}
            logo={logo}
            heading={heading}
            name={name}
            date={date}
            onClick={(path) => navigate(`${path}`)}
          />
        ))} */}
      </div>
    </div>
  );
};

export default Request;
