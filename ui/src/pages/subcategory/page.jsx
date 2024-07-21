import { useParams } from "react-router-dom";
import CategoryTable from "../../components/table/Category";
import Container from "../../components/container/container";
import CreateButton from "../../components/button/create";
import "./page.scss";
import User from '../../components/user/user'
const SubCategory = () => {
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
        <h1 className="head">{categoryId}/</h1>
        <h4 className="tail">assets</h4>

      </div>
      <CreateButton />


      <User />
      <Container>
        <CategoryTable tabledata={subCategoryData} />
      </Container>
    </div>

  );
};

export default SubCategory;
