import './card.scss'



const Card = ({ heading, logo }) => (

    <div className="sub-card">{logo}<h3>{heading}</ h3></div>

)

export default Card