import "./page.scss";
import { useParams } from "react-router-dom";
import Container from "../../components/container/container";
import Pill from "../../components/pill/pill";
import DetailRow from "../../components/DetailRow/DetailRow";
import { useGetEmployeeByIdQuery } from "../EmployeeDetails/employee.api";

const fields = [
  {
    id: "name",
    text: "Employee Name",
  },
  {
    id: "email",
    text: "E-mail",
  },
  {
    id: "department",
    text: "Department",
    getValue: (data) => data?.department?.name,
  },
  {
    id: "role",
    text: "Role",
  },
  {
    id: "status",
  },
];

const today = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
};
const formatter = new Intl.DateTimeFormat("en-US", options);
const formattedDate = formatter.format(today).replace(/,/g, "");

// //Get employee

// console.log(data);

const Profile = () => {
  const EmployeeId = localStorage.getItem("kvEmployeeId");
  const { data } = useGetEmployeeByIdQuery(Number(EmployeeId));
  // console.log(data["status"]);

  return (
    <>
      <div className="employee-request">
        <div className="heading">
          <h2 className="tail">Hello,&nbsp;</h2>
          <h1 className="head">{data?.name}</h1>
        </div>
        <h1 className="date">{formattedDate}</h1>
      </div>

      <Container>
        <section className="form-section detail-section">
          <div className="detail-container">
            {fields.map((field) => {
              return field.id == "status" ? (
                <div className="detail-space" key="status">
                  <label className="head">Status</label>
                  <Pill
                    color={
                      data?.status === "Active"
                        ? "green"
                        : data?.status === "Probation"
                        ? "yellow"
                        : "red"
                    }
                    innerText={data?.status}
                  />
                </div>
              ) : (
                <DetailRow
                  id={field.id}
                  text={field.text}
                  value={
                    field.getValue ? field.getValue(data) : data?.[field.id]
                  }
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
                {data?.address.line1},
                <br />
                {data?.address.line2}
              </div>
            </div>
            <div className="detail-space">
              <label htmlFor="id" className="head">
                Employee ID
              </label>
              <div id="id">{data?.id}</div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};
export default Profile;
