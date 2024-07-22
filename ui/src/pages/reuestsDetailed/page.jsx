import { useParams } from "react-router-dom";
import Container from "../../components/container/container";
import CreateButton from "../../components/button/create";
import "./page.scss";
import User from "../../components/user/user";
import RequestsTable from "../../components/table/Requests";
const RequestDetail = () => {
  const { requestId } = useParams();
  const subCategoryData = [
    {
      employee: "Sam",
      category: "Laptop",
      brand: "Dell",
      model: "Inpiron",
      reason: "Due to my product was damaged",
      requestedAt: "2023-01-15",
    },
    {
      employee: "Sam",
      category: "Laptop",
      brand: "Dell",
      model: "Inpiron",
      reason: "Due to my product was damaged",
      requestedAt: "2023-01-15",
    },
    {
      employee: "Sam",
      category: "Laptop",
      brand: "Dell",
      model: "Inpiron",
      reason: "Due to my product was damaged",
      requestedAt: "2023-01-15",
    },
  ];

  return (
    <div>
      <div className="heading-subcategory">
        <h1 className="head">{requestId}</h1>
        <h4 className="tail">&nbsp;/requests</h4>
      </div>
      <CreateButton />

      <Container>
        <RequestsTable tabledata={subCategoryData} />
      </Container>
    </div>
  );
};

export default RequestDetail;
