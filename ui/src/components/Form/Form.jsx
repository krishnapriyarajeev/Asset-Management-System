import "./Form.scss";
import { useState } from "react";
import FormField from "../FormField/FormField";
import Button from "../button/button";

const Form = ({ fields = [], editHandler, cancelHandler }) => {
  const [data, setData] = useState({});

  const handleData = ([id, value]) => {
    let newData = {};
    newData[id] = value;
    setData((data) => ({ ...data, ...newData }));
  };

  return (
    <section className="form-modal">
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
          <div className="button-group">
            <Button innerText="Create" onClick={editHandler} type="submit" />
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
        </div>
      </form>
    </section>
  );
};
export default Form;
