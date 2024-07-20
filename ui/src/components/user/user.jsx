import { FaUserTie } from "react-icons/fa6";
import './user.scss'
const User = () =>{
    return <div className="user-component">
        <div className="signout-button">Signout</div>
        <FaUserTie  className="user-icon"/>

    </div>
}
export default User