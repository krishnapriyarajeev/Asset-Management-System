import "./Form.scss";
import { useState } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import FormField from "../FormField/FormField";
import Select from "../Select/Select";

const fields = [
  {
    id: "RequestType",
    label: "Request Type",
    Component: Select,
    choose: ["New", "Exchange"],
  },
  {
    id: "reason",
    text: "Reason",
  },
];

const Form = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleData = ([id, value]) => {
    let newData = {};
    newData[id] = value;
    setData((data) => ({ ...data, ...newData }));
  };

  return (
    <section className="form-section">
      <form className="form">
        <div className="form-details">
          {fields.map((field) => {
            return field.Component ? (
              <field.Component
                id={field.id}
                key={field.id}
                choose={field.choose}
                onselect={handleData}
                label={field.label}
                // defaultValue={requestType}
              />
            ) : (
              <FormField
                id={field.id}
                text={field.text}
                key={field.id}
                onchange={handleData}
                data={data}
              />
            );
          })}
        </div>
        <div>
          <Button text="Create" className="form-buttons" />
          <Button
            text="Cancel"
            className="form-buttons cancel"
            handleSubmit={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          />
        </div>
      </form>
    </section>
  );
};
export default Form;
