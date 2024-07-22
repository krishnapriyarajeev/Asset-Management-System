import { useNavigate } from "react-router-dom";
import User from "../../components/user/user";
import "./requests.scss";
import Card from "../../components/card/card";
import CreateButton from "../../components/button/create";
import { IoGitPullRequestOutline } from "react-icons/io5";

const today = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
};
const formatter = new Intl.DateTimeFormat("en-US", options);
const formattedDate = formatter.format(today).replace(/,/g, "");
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
const Request = () => {
  const navigate = useNavigate();
  return (
    <div className="category-style">
      {/* <div className="intro">
        <h2 className="hello-display">Hello,&nbsp;</h2>
        <h1 className="name-display">Name!</h1>
      </div>

      <h1 className="date-format">{formattedDate}</h1> */}

      <div className="heading-display">
        <h1 className="head">Lists/</h1>
        <h4 className="tail">requests</h4>
        <CreateButton />
      </div>
      <div className="cards">
        {data.map(({ logo, heading, name, date }) => (
          <Card
            key={heading}
            logo={logo}
            heading={heading}
            name={name}
            date={date}
            onClick={(path) => navigate(`${path}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Request;
