import { Link } from 'react-router-dom'
import './card.scss'



const Card = ({ heading, logo, onClick }) => (
    // TODO: change to id in onclick
    <div className="sub-card" onClick={() => onClick(heading.toLowerCase())}>{logo}<h3>{heading}</ h3></div>

)

export default Card