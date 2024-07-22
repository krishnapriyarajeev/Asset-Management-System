import "./Form.scss";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import FormField from "../FormField/FormField";

const Form = ({ fields = [] }) => {
  // console.log(fields);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleData = ([id, value]) => {
    let newData = {};
    newData[id] = value;
    setData((data) => ({ ...data, ...newData }));
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <section className="form-section">
      <form className="form" onSubmit={console.log("Hello")}>
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
            handleForm={(e) => {
              e.preventDefault();
              navigate("/assets");
            }}
          />
        </div>
      </form>
    </section>
  );
};
export default Form;
