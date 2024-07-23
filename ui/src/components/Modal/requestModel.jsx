import { IoClose } from "react-icons/io5";
import "./deleteModal.scss";
import Modal from "./modal";
import Container from "../container/container";
import Form from "../../components/Form/Form"
import Select from "../../components/Select/Select"
const formData=[{
    id:"1",
    Component:Select,
    choose:["Laptop","Keyboard","Mouse","Headphhones","Notepad","Pen"],
    label:"Category",
    

},
{
    id:"2",
    Component:Select,
    choose:["Dell Inspiron 15","Hp Pavilion 14","Apple Macbook Air"],
    label:"Subcategory",
    

},
{
    id:"3",
    Component:Select,
    choose:["12GB RAM, Intel i5 11th Gen, RTX 3050 Studio, 512GB SSD","16GB RAM, Intel i7 11th Gen, RTX 3050 Studio, 512GB SSD","32GB RAM, Intel i9 12th Gen, RTX 4080 Studio, 512GB SSD"],
    label:"Specification",
    

}]
const modelData = [
    {
      Category: "Laptop",
      Subcategory: "Dell Latitude 5501",
      Specs: "12GB RAM, Intel i5 11th Gen, RTX 3050 Studio, 512GB SSD",
      RequestedAt: "2023-01-15",
      Status: "Approved",
    },
    {
      Category: "Laptop",
      Subcategory: "HP Envy x360",
      Specs: "8GB RAM, Intel i7 10th Gen, Intel Iris Plus, 256GB SSD",
      RequestedAt: "2023-02-20",
      Status: "Approved",
    },
    {
      Category: "Laptop",
      Subcategory: "Apple MacBook Air",
      Specs: "16GB RAM, M1 Chip, 512GB SSD",
      RequestedAt: "2023-03-10",
      Status: "Pending",
    },
    {
      Category: "Keyboard",
      Subcategory: "Logitech MX Keys",
      Specs: "Wireless, Backlit",
      RequestedAt: "2023-04-05",
      Status: "Approved",
    },
    {
      Category: "Keyboard",
      Subcategory: "Corsair K95 RGB",
      Specs: "Mechanical, RGB Lighting",
      RequestedAt: "2023-05-18",
      Status: "Declined",
    },
    {
      Category: "Mouse",
      Subcategory: "Razer DeathAdder V2",
      Specs: "Wired, High Precision",
      RequestedAt: "2023-06-22",
      Status: "Pending",
    },
    {
      Category: "Mouse",
      Subcategory: "Logitech MX Master 3",
      Specs: "Wireless, Ergonomic",
      RequestedAt: "2023-07-12",
      Status: "Approved",
    },
    {
      Category: "Headphones",
      Subcategory: "Sony WH-1000XM4",
      Specs: "Noise Cancelling, Wireless",
      RequestedAt: "2023-08-02",
      Status: "Declined",
    }
  ];

const RequestModal = ({ editHandler, cancelHandler, open, fields }) => {
  return (
    open && ( 
      <Modal>
        <div className="close-icon-wrap" onClick={cancelHandler}>
          <IoClose size="25px" />
        </div>
        
      <Container>
      <div className='employee-request'>
        <div className="heading-request">
            <h1 className="head">Request</h1>
            <h4 className="tail">&nbsp;/employee</h4>
        </div>

      </div>
            <Form fields={formData}/>

        </Container>
      </Modal>
    )
  );
};

export default RequestModal;
