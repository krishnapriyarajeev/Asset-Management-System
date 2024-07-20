import { useParams } from "react-router-dom";
import Table from "../../components/table/table";
import Container from "../../components/container/container";

const ModalList = () => {
  const { subCategoryId } = useParams();
  const subcategory = [
    {
      name: "Alice Johnson",
      id: 1,
      joinDate: "2021-06-15",
      role: "Software Engineer",
      status: "Active",
      experience: 3,
    },
    {
      name: "Bob Smith",
      id: 2,
      joinDate: "2020-03-22",
      role: "Project Manager",
      status: "Active",
      experience: 5,
    },
    {
      name: "Carol White",
      id: 3,
      joinDate: "2019-11-02",
      role: "Designer",
      status: "Inactive",
      experience: 4,
    },
    {
      name: "David Brown",
      id: 4,
      joinDate: "2018-07-18",
      role: "DevOps Engineer",
      status: "Active",
      experience: 6,
    },
    {
      name: "Eve Davis",
      id: 5,
      joinDate: "2022-01-12",
      role: "Quality Assurance",
      status: "Active",
      experience: 2,
    },
  ];

  return (
    <Container>
      <h2>{subCategoryId} model page</h2>
      <Table data={subcategory} />
    </Container>
  );
};

export default ModalList;
