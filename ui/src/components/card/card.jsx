import { Link } from 'react-router-dom'
import './card.scss'



const Card = ({ heading, logo, onClick, name, date }) => (
    // TODO: change to id in onclick
    <div className="sub-card" onClick={() => onClick(heading.toLowerCase())}>{logo}
        <div>
            <h3>{heading}</ h3>
            <h4 className='card-name'>{name}</h4>
            <h4 className='card-date'>{date}</h4>
        </div>
    </div>

)

export default Card