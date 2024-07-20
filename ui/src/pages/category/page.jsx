import { Link, useNavigate, useParams } from "react-router-dom";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import User from '../../components/user/user'
import './page.scss'
import Card from '../../components/card/card'
import CreateButton from "../../components/button/create";
import { LiaLaptopSolid } from "react-icons/lia";
import { PiHeadphones } from "react-icons/pi";
import { PiMouseThin } from "react-icons/pi";
import { CiKeyboard } from "react-icons/ci";
import { PiNotepad } from "react-icons/pi";
import { TiPen } from "react-icons/ti";

const today = new Date();
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};
const formatter = new Intl.DateTimeFormat('en-US', options);
const formattedDate = formatter.format(today).replace(/,/g, '');
const data = [{
  logo: <LiaLaptopSolid className="sub-logo" />,
  heading: "Laptops"
},
{
  logo: <PiHeadphones className="sub-logo" />,
  heading: "Headphones"
},
{
  logo: <PiMouseThin className="sub-logo" />,
  heading: "Mouse"
},
{
  logo: <CiKeyboard className="sub-logo" />,
  heading: "Keyboard"
},
{
  logo: <PiNotepad className="sub-logo" />,
  heading: "Notepad"
},
{
  logo: <TiPen className="sub-logo" />,
  heading: "Pen"
}]
const Category = () => {
  const navigate = useNavigate()
  return <div className="category-style">
    <div className="intro">
      <h2 className="hello-display">Hello,&nbsp;</h2>
      <h1 className="name-display">Name!</h1>
    </div>
    <User />

    <h1 className="date-format">{formattedDate}</h1>


    <div className="heading-display">
      <h1 className="head">Categories/</h1>
      <h4 className="tail">assets</h4>
      <CreateButton />

    </div>

    <div className="cards" >
      {data.map(({ logo, heading }) => (
        <Card key={heading} logo={logo} heading={heading} onClick={(path) => navigate(path)} />
      ))}
    </div>
  </div>;
};

export default Category;
