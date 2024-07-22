import { useNavigate } from "react-router-dom";
import "./page.scss";
import CreateButton from "../../components/button/create";
import CategoryCard from "../../components/card/CategoryCard";

const datas = [
  {
    id: 1,
    heading: "Laptops",
    date: "2024-07-21",
    unassigned: 5,
    assigned: 10,
    damaged: 2,
  },
  {
    id: 2,
    heading: "Headphones",
    date: "2024-07-20",
    unassigned: 3,
    assigned: 7,
    damaged: 1,
  },
  {
    id: 3,
    heading: "Mouse",
    date: "2024-07-19",
    unassigned: 8,
    assigned: 5,
    damaged: 4,
  },
  {
    id: 4,
    heading: "Keyboard",
    date: "2024-07-18",
    unassigned: 2,
    assigned: 4,
    damaged: 0,
  },
  {
    id: 5,
    heading: "Notepad",
    date: "2024-07-17",
    unassigned: 10,
    assigned: 12,
    damaged: 3,
  },
  {
    id: 6,
    heading: "Pen",
    date: "2024-07-16",
    unassigned: 1,
    assigned: 5,
    damaged: 1,
  },
];

const fields = [
  {
    id: "CategoryName",
    text: "Category Name"
  }]


const Category = () => {
  const navigate = useNavigate();
  return (
    <div className="category-style">
      <div className="heading-display">
        <h1 className="head">Categories</h1>
        <h4 className="tail">&nbsp;/assets</h4>
        <CreateButton fields={fields}/>
      </div>

      <div className="cards">
        {datas.map((data) => (
          <CategoryCard
            key={data.id}
            data={data}
            onClick={(path) => navigate(path)}
          />
        ))}
      </div>
    </div>
  );
  // );
};

export default Category;
