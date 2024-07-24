import { useLocation, useParams } from "react-router-dom";
import Container from "../../components/container/container";
import "./page.scss";
import RequestsTable from "../../components/table/Requests";
import { useGetRequestDetailsQuery } from "../requests/request";

const RequestDetail = () => {
  const { requestId } = useParams();
  const location = useLocation();
  const { status, employee } = location.state;
  const { data = {} } = useGetRequestDetailsQuery(requestId);
  console.log(data);

  return (
    <div>
      <div className="heading-subcategory">
        <h1 className="head">{requestId}</h1>
        <h4 className="tail">&nbsp;/requests</h4>
      </div>

      <Container>
        <RequestsTable
          tabledata={data}
          requestStatus={status}
          employee={employee}
        />
      </Container>
    </div>
  );
};

export default RequestDetail;
