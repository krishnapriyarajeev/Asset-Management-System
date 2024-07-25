import "./user.scss";
import user_icon from "../../assets/user-icon.png";
import SignoutModal from "../Modal/signoutModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const signout = () => {
    localStorage.removeItem("kvLogin");
    localStorage.removeItem("kvRole");
    localStorage.removeItem("kvEmployeeId");
    setModal(false);
    navigate("/");
  };
  return (
    <>
      {modal && (
        <SignoutModal
          signoutHandler={signout}
          cancelHandler={() => setModal(false)}
        />
      )}
      <div className="user-component">
        <button className="signout-button" onClick={() => setModal(true)}>
          Signout
        </button>
        <img src={user_icon} alt="" className="user-icon" />
      </div>
    </>
  );
};
export default User;
