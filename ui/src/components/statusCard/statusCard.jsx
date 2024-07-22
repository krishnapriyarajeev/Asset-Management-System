import './statusCard.scss';
import { MdEventAvailable } from "react-icons/md";

const StatusCard = (props) => {
    return (
        <div 
            className='status-card' 
            style={{
                backgroundImage: `linear-gradient(319deg, ${props.front}, ${props.middle}, ${props.end})`, 
            }}
        >
            <props.icon className='status-icon' style={{backgroundColor: `${props.color}`}}/>
            
            <h4>{props.head}<h3>{props.count}</h3></h4>
            
        </div>
    );
}

export default StatusCard;
