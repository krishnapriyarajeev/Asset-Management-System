import "./table.scss";

const EmployeeRequest = ({ tabledata = [] }) => {
  const tableheader = [
    "S.No",
    "Category",
    "Brand",
    "Model",
    "Specifications",
    "RequestedAt",
  ];

  return (
    <>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {tableheader.map((value) => (
                <th key={value}>{value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tabledata.map(
              ({ Category, brandName, modelName, Specs, RequestedAt }, key) => {
                // let color = "orange";
                // if (Status === "Approved") {
                //   color = "green";
                // }
                // if (Status === "Declined") {
                //   color = "red";
                // }

                return (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{Category}</td>
                    <td>{brandName}</td>
                    <td>{modelName}</td>
                    <td>{Specs}</td>
                    <td>{RequestedAt.slice(0, 10)}</td>
                    {/* <td style={{ color: color }}>{Status}</td> */}
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeRequest;
