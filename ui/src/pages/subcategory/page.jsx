import { useParams } from "react-router-dom";
import CategoryTable from "../../components/table/Category";
import Container from "../../components/container/container";
import CreateButton from "../../components/button/create";
import "./page.scss";

import StatusCard from "../../components/statusCard/statusCard"
import { FiActivity } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { FiAlertCircle } from "react-icons/fi";
const statusField = [
  {
    head:"Total",
    count:"100",
    front:"#007FFF",
    middle:"#007FFF",
    end:"#007FFF",
    color:"#663dff 0%",
    icon:FiActivity


  },
  {
    head:"Unassigned",
    count:"40",
    front:"#74d680 74%",
    middle:"#378b29 0%",
    end:"#74d680 74%",
    color:"#dbf26e 0% ",
    icon:FiTrendingUp

  },
  {
    head:"Assigned",
    count:"50",
    front:"#c11d38 0%",
    middle:"#ffc857 0%",
    end:"#ffc857 24%",
    color:"#c11d38 0%",
    icon:IoEyeOutline
    
  },
  {
    head:"Damaged",
    count:"10",
    front:"#e85d65",
    middle:"#e85d65",
    end:"#e85d65",
    color:"#ffc857 0%",
    icon:FiAlertCircle

  }
]

const SubCategory = () => {
  const fields = [
    {
      id: "BrandName",
      text: "Brand Name",
    },
    {
      id: "ModelName",
      text: "Model Name",
    },
    {
      id: "Specifications",
      text: "Specifications",
    },
  ];

  const { categoryId } = useParams();
  const subCategoryData = [
    {
      brand: "Dell",
      model: "Inspiron 15",
      specs: "12GB RAM, Intel i5 11th Gen, RTX 3050 Studio, 512GB SSD",
      count: 25,
      createdAt: "2023-01-15",
      updatedAt: "2023-06-15",
    },
    {
      brand: "HP",
      model: "Pavilion 14",
      specs: "8GB RAM, AMD Ryzen 5, Vega 8, 256GB SSD",
      count: 30,
      createdAt: "2023-02-10",
      updatedAt: "2023-07-01",
    },
    {
      brand: "Apple",
      model: "MacBook Air",
      specs: "16GB RAM, M1, 512GB SSD",
      count: 20,
      createdAt: "2023-03-05",
      updatedAt: "2023-06-20",
    },
    {
      brand: "Lenovo",
      model: "ThinkPad X1 Carbon",
      specs: "16GB RAM, Intel i7 10th Gen, 1TB SSD",
      count: 15,
      createdAt: "2023-04-22",
      updatedAt: "2023-07-10",
    },
    {
      brand: "Acer",
      model: "Aspire 7",
      specs: "8GB RAM, Intel i5 9th Gen, GTX 1650, 512GB SSD",
      count: 18,
      createdAt: "2023-05-18",
      updatedAt: "2023-06-25",
    },
    {
      brand: "Asus",
      model: "ZenBook 13",
      specs: "16GB RAM, Intel i7 11th Gen, Intel Iris Xe, 512GB SSD",
      count: 22,
      createdAt: "2023-01-30",
      updatedAt: "2023-06-30",
    },
  ];

  return (
    <div >
      <div className="heading-subcategory">
        <h1 className="head">{categoryId}</h1>
        <h4 className="tail">&nbsp;/assets</h4>
      </div>
      
        
      <CreateButton fields={fields} />
      <Container>
      <div className="status-field-card">
      {statusField.map(({head,count,front,middle,end,color,icon})=>(<StatusCard head={head} count={count} front={front} middle={middle} end={end} color={color} icon={icon}/>))}
      </div>
      <CategoryTable tabledata={subCategoryData} fields={fields}/>
      </Container>
    </div>
  );
};

export default SubCategory;
