import { FaUserTie } from "react-icons/fa6";
import './user.scss'
import user_icon from "../../assets/user-icon.png"
import Container from "../container/container";
const User = () =>{
    return <div className="user-component">
        <div className="signout-button">Signout</div>
        <img src={user_icon} alt="" className="user-icon"/>

    </div>
}
export default User