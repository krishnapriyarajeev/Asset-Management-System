import "./employeeRequest.scss";
import Form from "../../components/Form/Form";
import Container from "../../components/container/container";
import Select from "../../components/Select/Select";
const formData = [
  {
    id: "1",
    Component: Select,
    choose: ["Laptop", "Keyboard", "Mouse", "Headphhones", "Notepad", "Pen"],
    label: "Category",
  },
  {
    id: "2",
    Component: Select,
    choose: ["Dell Inspiron 15", "Hp Pavilion 14", "Apple Macbook Air"],
    label: "Subcategory",
  },
  {
    id: "3",
    Component: Select,
    choose: [
      "12GB RAM, Intel i5 11th Gen, RTX 3050 Studio, 512GB SSD",
      "16GB RAM, Intel i7 11th Gen, RTX 3050 Studio, 512GB SSD",
      "32GB RAM, Intel i9 12th Gen, RTX 4080 Studio, 512GB SSD",
    ],
    label: "Specification",
  },
];

const EmployeeRequest = () => {
  return (
    <>
      <div className="employee-request">
        <div className="heading-display">
          <h1 className="head">Request</h1>
          <h4 className="tail">&nbsp;/employee</h4>
        </div>
      </div>
      <Container>
        <Form fields={formData} acceptText="Add" />
      </Container>
    </>
  );
};

export default EmployeeRequest;
