import { useParams } from "react-router-dom";
import Table from "../../components/table/AssetModel";
import Container from "../../components/container/container";

const ModalList = () => {
  const { subCategoryId } = useParams();

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
    <Container>
      <h2>{subCategoryId} model page</h2>
      <Table tabledata={modelData} />
    </Container>
  );
};

export default ModalList;
