import { useLocation, useParams } from "react-router-dom";
import Container from "../../components/container/container";
import "./page.scss";
import RequestsTable from "../../components/table/Requests";

const RequestDetail = () => {
  const { requestId } = useParams();
  const location = useLocation();
  const { status } = location.state;

  const subCategoryData = [
    {
      employee: "Sam",
      category: "Laptop",
      brand: "Dell",
      model: "Inpiron",
      type: "Exchange",
      reason: "Due to my product was damaged",
      requestedAt: "2023-01-15",
    },
    {
      employee: "Sam",
      category: "Laptop",
      brand: "Dell",
      model: "Inpiron",
      type: "Request",
      reason: "Due to my product was damaged",
      requestedAt: "2023-01-15",
    },
    {
      employee: "Sam",
      category: "Laptop",
      brand: "Dell",
      model: "Inpiron",
      reason: "Due to my product was damaged",
      type: "Exchange",
      requestedAt: "2023-01-15",
    },
  ];

  return (
    <div>
      <div className="heading-subcategory">
        <h1 className="head">{requestId}</h1>
        <h4 className="tail">&nbsp;/requests</h4>
      </div>

      <Container>
        <RequestsTable tabledata={subCategoryData} pending={status} />
      </Container>
    </div>
  );
};

export default RequestDetail;
