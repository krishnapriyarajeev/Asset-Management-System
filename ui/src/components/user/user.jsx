import "./user.scss";
import user_icon from "../../assets/user-icon.png";

const User = () => {
  return (
    <div className="user-component">
      <button className="signout-button">Signout</button>
      <img src={user_icon} alt="" className="user-icon" />
    </div>
  );
};
export default User;
