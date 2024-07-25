import { useEffect, useState } from "react";
import Container from "../../components/container/container";
import "./requestHistory.scss";
import HistoryModal from "../../components/Modal/historyModal";
import RequestModal from "../../components/Modal/requestModel";
import EmployeeAsset from "../../components/table/employeeAsset";
import { useGetEmployeeByIdQuery } from "../EmployeeDetails/employee.api";

const EmployeeAssetPage = () => {
  const { data = {}, isSuccess } = useGetEmployeeByIdQuery(1);
  const [modalToggle, setModalToggle] = useState(false);
  const [requestToggle, setRequestToggle] = useState(false);

  const [historyData, setHistoryData] = useState();

  useEffect(() => {
    if (isSuccess) {
      const requestedItems = data.requests.map((request) => {
        return request.requestedItems;
      });
      const historyDataMap = requestedItems.flat().map((item) => {
        return {
          brandName: item.subcategory.brandName,
          modelName: item.subcategory.modelName,
          Specs: item.subcategory.Specifications,
          RequestedAt: item.subcategory.createdAt,
          Category: item.subcategory.category.categoryName,
        };
      });
      setHistoryData(historyDataMap);
    }
  }, [isSuccess, data]);

  console.log(historyData);

  return (
    <>
      <HistoryModal
        data={historyData}
        open={modalToggle}
        cancelHandler={() => setModalToggle(false)}
      />
      <RequestModal
        open={requestToggle}
        cancelHandler={() => setRequestToggle(false)}
        editHandler={() => setRequestToggle(false)}
      />
      <div className="category-style">
        <div className="employee-category">
          <div className="heading-display">
            <h1 className="head">Assets&nbsp;</h1>
            <h4 className="tail">/employee</h4>
          </div>
        </div>
      </div>
      <Container>
        <button
          className="history-button"
          onClick={() => {
            setModalToggle(true);
          }}
        >
          History
        </button>
        <button
          className="request-button"
          onClick={() => {
            setRequestToggle(true);
          }}
        >
          Request
        </button>
        <EmployeeAsset tabledata={data.assets} />
      </Container>
    </>
  );
};

export default EmployeeAssetPage;
