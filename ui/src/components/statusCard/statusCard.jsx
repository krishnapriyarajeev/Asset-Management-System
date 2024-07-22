import './statusCard.scss'
import { MdEventAvailable } from "react-icons/md";
const StatusCard = () => {
    return <div className='status-card'>
        <MdEventAvailable className='status-icon'/>
        <h4>Total Assets<h3>100</h3></h4>
        
    </div>
}

export default StatusCard