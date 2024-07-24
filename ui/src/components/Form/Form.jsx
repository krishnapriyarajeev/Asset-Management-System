import "./Form.scss";
import { useEffect, useState } from "react";
import FormField from "../FormField/FormField";
import Button from "../button/button";

const Form = ({
  fields = [],
  employee,
  acceptHandler,
  cancelHandler,
  acceptText,
  accept = "",
}) => {
  // console.log(fields);
  const [data, setData] = useState();
  useEffect(() => {
    if (window.location.href.includes("/employees"))
      setData(
        employee
          ? employee
          : {
              id: "",
              name: "",
              email: "",
              role: "UI",
              status: "Active",
              experience: "",
              departmentName: "",
              line1: "",
              line2: "",
            }
      );
  }, []);

  const handleData = ({ id, value }) => {
    let newData = {};
    newData[id] = value;
    setData((data) => ({ ...data, ...newData }));
  };

  return (
    <section className="form-modal">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className={`form-details ${accept}`}>
          {fields.map((field) => {
            return field.Component ? (
              <field.Component
                id={field.id}
                key={field.id}
                choose={field.choose}
                onselect={handleData}
                label={field.label}
                defaultValue={
                  data?.id &&
                  ((field.id == "status" && data.status) ||
                    (field.id == "role" && data.role))
                }
              />
            ) : (
              <FormField
                type={field.type}
                disable={field.disable}
                id={field.id}
                text={field.text}
                key={field.id}
                onchange={handleData}
                data={data}
              />
            );
          })}
        </div>
        <div className="button-group">
          <Button
            innerText={acceptText}
            onClick={() => acceptHandler(data)}
            type="submit"
          />
          <Button
            innerText="Cancel"
            style="outline"
            onClick={(e) => {
              e.preventDefault();
              cancelHandler();
            }}
            type="reset"
          />
        </div>
      </form>
    </section>
  );
};
export default Form;
