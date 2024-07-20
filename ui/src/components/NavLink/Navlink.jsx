import { useNavigate } from "react-router-dom";
import "./navLink.scss";

const NavLink = ({ text, link, select, changeSelect }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(link);
    changeSelect();
    console.log(window.location.pathname);
  };

  return (
    <div className={`navLink ${select}`} onClick={onClick}>
      <h3>{text}</h3>
    </div>
  );
};
export default NavLink;
