import { Link } from 'react-router-dom'
import './create.scss'
import { MdOutlineCreateNewFolder } from "react-icons/md";

const CreateButton = () => {
  return <Link className="create">
    <h4>Create+</h4>
    <MdOutlineCreateNewFolder className="create-icon" />
  </Link>
}

export default CreateButton