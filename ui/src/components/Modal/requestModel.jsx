import { IoClose } from "react-icons/io5";
import "./deleteModal.scss";
import Modal from "./modal";
import Select from "../../components/Select/Select";
import { useEffect, useState } from "react";
import Button from "../button/button";
import FormField from "../FormField/FormField";
const formData = [
  {
    id: "category",
    Component: Select,
    choose: ["Laptop", "Keyboard", "Mouse", "Headphhones", "Notepad", "Pen"],
    label: "Category",
  },
  {
    id: "subcatgeory",
    Component: Select,
    choose: [
      "Dell Inspiron 15 12GB RAM, Intel i5 11th Gen, RTX 3050 Studio, 512GB SSD",
      "Hp Pavilion 14",
      "Apple Macbook Air",
    ],
    label: "Subcategory",
  },
  {
    id: "requestType",
    Component: Select,
    label: "Request Type",
    choose: ["New", "Exchange"],
  },
  {
    id: "exchangeAsset",
    text: "Exchange Asset",
    disable: true,
  },
  {
    id: "reason",
    text: "Reason",
  },
];

const RequestForm = ({ handleData, formValue }) => {
  return (
    <section className="form-modal">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-details spec">
          {formData.map((field) => {
            return field.Component ? (
              <field.Component
                id={field.id}
                key={field.id}
                choose={field.choose}
                onselect={({ id, value }) => handleData(id, value)}
                label={field.label}
              />
            ) : (
              <FormField
                type={field.type}
                disable={field.disable}
                id={field.id}
                text={field.text}
                key={field.id}
                onchange={({ id, value }) => handleData(id, value)}
                data={formValue}
              />
            );
          })}
        </div>
      </form>
    </section>
  );
};

const RequestModal = ({ editHandler, cancelHandler, open }) => {
  const [data, setData] = useState([
    {
      category: "Laptop",
      SubCategory:
        "Dell Inspiron 15 12GB RAM, Intel i5 11th Gen, RTX 3050 Studio, 512GB SSD",
      requestType: "New",
      reason: "",
    },
  ]);

  const addHandler = () => {
    const list = [...data];
    list.push({
      category: "Laptop",
      SubCategory:
        "Dell Inspiron 15 12GB RAM, Intel i5 11th Gen, RTX 3050 Studio, 512GB SSD",
      requestType: "New",
      reason: "",
    });
    setData(list);
  };

  const acceptHandler = () => {
    console.log("FinalData", data);
    setData([
      {
        category: "Laptop",
        SubCategory:
          "Dell Inspiron 15 12GB RAM, Intel i5 11th Gen, RTX 3050 Studio, 512GB SSD",
        requestType: "New",
        reason: "",
      },
    ]);
    editHandler();
  };

  const closeHandler = () => {
    setData([
      {
        category: "Laptop",
        SubCategory:
          "Dell Inspiron 15 12GB RAM, Intel i5 11th Gen, RTX 3050 Studio, 512GB SSD",
        requestType: "New",
        reason: "",
      },
    ]);
    cancelHandler();
  };

  const handleData = (id, value, index) => {
    console.log("id", id, value);
    const list = [...data];
    let newData = data[index];
    newData = { ...newData, [id]: value };
    list[index] = newData;
    setData(list);
    console.log("newData", data);
  };

  return (
    open && (
      <Modal history="history">
        <div
          className="close-icon-wrap"
          onClick={() => {
            closeHandler();
          }}
        >
          <IoClose size="25px" />
        </div>

        <div className="delete-msg-wrap">
          <h1>Request</h1>
        </div>

        {data.map((formValue, index) => {
          return (
            <RequestForm
              formValue={formValue}
              key={index}
              handleData={(id, value) => handleData(id, value, index)}
            />
          );
        })}
        <Button innerText="Add" onClick={addHandler} type="submit" />
        <div className="button-group">
          <Button innerText="Confirm" onClick={acceptHandler} type="submit" />
          <Button
            innerText="Cancel"
            style="outline"
            onClick={(e) => {
              e.preventDefault();
              closeHandler();
            }}
            type="reset"
          />
        </div>
      </Modal>
    )
  );
};

export default RequestModal;
