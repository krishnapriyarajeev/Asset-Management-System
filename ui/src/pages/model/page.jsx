import { useParams } from "react-router-dom";
import Table from "../../components/table/AssetModel";
import Container from "../../components/container/container";
import CreateButton from "../../components/button/create";
import "./page.scss";

import StatusCard from "../../components/statusCard/statusCard";
import { FiActivity } from "react-icons/fi";
import { FiTrendingUp } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { FiAlertCircle } from "react-icons/fi";
import { useGetAllAssetsQuery } from "./asset.api";
import { useEffect } from "react";
import { useGetSubcategoryByIdQuery } from "../subcategory/subCategory.api";
const statusField = [
  {
    head: "Total",
    count: "100",
    front: "#007FFF",
    middle: "#007FFF",
    end: "#007FFF",
    color: "#663dff 0%",
    icon: FiActivity,
  },
  {
    head: "Unallocated",
    count: "40",
    front: "#74d680 74%",
    middle: "#378b29 0%",
    end: "#74d680 74%",
    color: "#dbf26e 0% ",
    icon: FiTrendingUp,
  },
  {
    head: "Allocated",
    count: "50",
    front: "#c11d38 0%",
    middle: "#ffc857 0%",
    end: "#ffc857 24%",
    color: "#c11d38 0%",
    icon: IoEyeOutline,
  },
  {
    head: "Damaged",
    count: "10",
    front: "#e85d65",
    middle: "#e85d65",
    end: "#e85d65",
    color: "#ffc857 0%",
    icon: FiAlertCircle,
  },
];
const ModalList = () => {
  const { subCategoryId } = useParams();
  const { data } = useGetSubcategoryByIdQuery(subCategoryId)
  useEffect(()=>{
    console.log(data);
  },[data])
  const fields = [
    {
      id: "SerialNumber",
      text: "Serial Number",
    },
    {
      id: "Status",
      text: "Status",
    },
    {
      id: "Employee ID",
      text: "Employee ID",
    },
  ];

  const modelData = [
    {
      serialNo: "TNP101",
      status: "allocated",
      employee: "Alice Johnson",
      createdAt: "2023-01-15",
      updatedAt: "2023-06-15",
    },
    {
      serialNo: "TNP102",
      status: "unallocated",
      employee: null,
      createdAt: "2022-11-03",
      updatedAt: "2023-01-10",
    },
    {
      serialNo: "TNP103",
      status: "allocated",
      employee: "Carol White",
      createdAt: "2021-07-22",
      updatedAt: "2022-03-14",
    },
    {
      serialNo: "TNP104",
      status: "damaged",
      employee: null,
      createdAt: "2020-05-30",
      updatedAt: "2021-08-19",
    },
    {
      serialNo: "TNP105",
      status: "unallocated",
      employee: null,
      createdAt: "2023-03-12",
      updatedAt: "2023-07-20",
    },
  ];

  return (
    <>
      <div className="heading-subcategory">
        <h1 className="head">{subCategoryId}</h1>
        <h4 className="tail">&nbsp;/assets</h4>
      </div>
      <div className="subcategory-style">

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
        </div>
      <Container>
        
        <CreateButton fields={fields} />
        <Table tabledata={data} fields={fields} />
      </Container>
    </>
  );
};

export default ModalList;
