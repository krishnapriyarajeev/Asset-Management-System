import "./AdminDashboard.scss";
import Container from "../../components/container/container";
import "../EmployeeDetails/EmployeeDetails.scss";
import DetailRow from "../../components/DetailRow/DetailRow";
import Pill from "../../components/pill/pill";
import "./AdminDashboard";

const fields = [
  {
    id: "ename",
    text: "Employee Name",
  },
  {
    id: "email",
    text: "E-mail",
  },
  {
    id: "dept",
    text: "Department",
  },
  {
    id: "role",
    text: "Role",
  },
  {
    id: "status",
  },
];

const employee = {
  id: "1",
  ename: "Alice",
  email: "alice@gmail.com",
  role: "HR",
  dept: "HR",
  status: "Active",
  address: {
    line1: "Kochi",
    pincode: "632416",
  },
};

const today = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
};
const formatter = new Intl.DateTimeFormat("en-US", options);
const formattedDate = formatter.format(today).replace(/,/g, "");

const AdminDashboard = () => {
  return (
    <>
      <Container>
        <div className="intro-style">
          <div className="intro">
            <h2 className="hello-display">Hello,&nbsp;</h2>
            <h1 className="name-display">Name!</h1>
          </div>
          <h1 className="date-format">{formattedDate}</h1>
        </div>
        <section className="form-section detail-section">
          <div className="detail-container">
            {fields.map((field) => {
              return field.id == "status" ? (
                <div className="detail-space" key="status">
                  <label className="head">Status</label>
                  <Pill
                    color={
                      employee.status === "Active"
                        ? "green"
                        : employee.status === "Probation"
                        ? "yellow"
                        : "red"
                    }
                    innerText={employee.status}
                  />
                </div>
              ) : (
                <DetailRow
                  id={field.id}
                  text={field.text}
                  value={employee[field.id]}
                  key={field.id}
                />
              );
            })}
          </div>
          <hr className="detail-hr" />
          <div className="detail-div">
            <div className="detail-space">
              <label htmlFor="add" className="head">
                Address
              </label>
              <div id="add">
                {employee.address.line1},
                <br />
                {employee.address.pincode}
              </div>
            </div>
            <div className="detail-space">
              <label htmlFor="id" className="head">
                Employee ID
              </label>
              <div id="id">{employee.id}</div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};
export default AdminDashboard;
