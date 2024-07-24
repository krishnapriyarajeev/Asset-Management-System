import { useNavigate } from "react-router-dom";
import "./page.scss";
import CreateButton from "../../components/button/create";
import CategoryCard from "../../components/card/CategoryCard";

import StatusCard from "../../components/statusCard/statusCard";
import { FiActivity } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { FiAlertCircle } from "react-icons/fi";
import { useGetAllCategoriesQuery } from "./category.api";

import { useEffect } from "react";
import { useGetAllCountQuery } from "./count.api";


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
    text: "Category Name",
  },
];

const Category = () => {
  const navigate = useNavigate();
  const { data, isSuccess } = useGetAllCategoriesQuery()
  const count = useGetAllCountQuery()
  
  const statusField = [
    {
      head: "Total",
      count: count.isSuccess && count.data.totalCategory,
      front: "#007FFF",
      middle: "#007FFF",
      end: "#007FFF",
      color: "#663dff 0%",
      icon: FiActivity,
    },
    {
      head: "Unallocated",
      count: count.isSuccess && count.data.total.Unallocated,
      front: "#74d680 74%",
      middle: "#378b29 0%",
      end: "#74d680 74%",
      color: "#dbf26e 0% ",
      icon: FiTrendingUp,
    },
    {
      head: "Allocated",
      count: count.isSuccess && count.data.total.Allocated,
      front: "#c11d38 0%",
      middle: "#ffc857 0%",
      end: "#ffc857 24%",
      color: "#c11d38 0%",
      icon: IoEyeOutline,
    },
    {
      head: "Damaged",
      count: count.isSuccess && count.data.total.Damaged,
      front: "#e85d65",
      middle: "#e85d65",
      end: "#e85d65",
      color: "#ffc857 0%",
      icon: FiAlertCircle,
    },
  ];
  useEffect(() => {
    console.log(data);
  }, [data])
  return (
    <div className="category-style">
      <div className="heading-display">
        <h1 className="head">Categories</h1>
        <h4 className="tail">&nbsp;/assets</h4>
        <CreateButton fields={fields} />
      </div>
      <div className="status-field-card">
        {statusField.map(
          ({ head, count, front, middle, end, color, icon }, index) => (
            <StatusCard
              key={index}
              head={head}
              count={count}
              front={front}
              middle={middle}
              end={end}
              color={color}
              icon={icon}
            />
          )
        )}
      </div>
      <div className="cards">
        {isSuccess && data.map((data) => (
          <CategoryCard
            key={data.id}
            data={data}
            count={count}
            onClick={() => navigate(data.categoryName.toLowerCase())}
          />
        ))}
      </div>
    </div>
  );
  // );
};

export default Category;
