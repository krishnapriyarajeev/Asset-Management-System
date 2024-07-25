import "./table.scss";

const EmployeeAsset = ({ tabledata = [] }) => {
  const tableheader = ["S.No", "Category", "Brand", "Model", "Specs"];

  return (
    <>
      <div className="table-wrapper no-link-table">
        <table>
          <thead>
            <tr>
              {tableheader.map((value) => (
                <th key={value}>{value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tabledata.map((data, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{data.subcategory.category.categoryName}</td>
                <td>{data.subcategory.brandName}</td>
                <td>{data.subcategory.modelName}</td>
                <td>{data.subcategory.Specifications}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeAsset;
