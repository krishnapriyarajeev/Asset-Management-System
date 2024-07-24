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

const RequestForm = ({ handleData }) => {
  const [data, setData] = useState({
    category: "Laptop",
    SubCategory:
      "Dell Inspiron 15 12GB RAM, Intel i5 11th Gen, RTX 3050 Studio, 512GB SSD",
    requestType: "New",
    reason: "",
  });

  const changeData = ([id, value]) => {
    let newData = {};
    newData[id] = value;
    setData((data) => ({ ...data, ...newData }));
    console.log("changeData", data);
  };

  useEffect(() => {
    handleData(data);
  }, [data]);

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
                onselect={changeData}
                label={field.label}
              />
            ) : (
              <FormField
                type={field.type}
                disable={field.disable}
                id={field.id}
                text={field.text}
                key={field.id}
                onchange={changeData}
                data={data}
              />
            );
          })}
        </div>
      </form>
    </section>
  );
};

const RequestModal = ({ editHandler, cancelHandler, open }) => {
  const [data, setData] = useState();
  const [requestData, setRequestData] = useState([]);

  const [inputList, setInputList] = useState([
    <RequestForm handleData={setData} key="0" />,
  ]);

  const addHandler = () => {
    setInputList(
      inputList.concat(
        <hr className="detail-hr" key={(inputList.length + 1) * 100} />,
        <RequestForm handleData={setData} key={inputList.length} />
      )
    );
  };

  useEffect(() => {
    console.log("RequestData", requestData);
  }, [data]);

  const acceptHandler = (data) => {
    setInputList([<RequestForm handleData={setData} key="0" />]);
    console.log("FinalAcceptData", data);
    setRequestData([]);
    editHandler(data);
  };

  const closeHandler = () => {
    console.log("FinalCancelData", requestData);
    setRequestData([]);
    cancelHandler();
  };

  return (
    open && (
      <Modal history="history">
        <div
          className="close-icon-wrap"
          onClick={() => {
            setInputList([<RequestForm handleData={setData} key="0" />]);
            closeHandler();
          }}
        >
          <IoClose size="25px" />
        </div>

        <div className="delete-msg-wrap">
          <h1>Request</h1>
        </div>

        {inputList}
        <Button
          innerText="Add"
          onClick={() => {
            setRequestData(requestData.concat(data));
            addHandler();
          }}
          type="submit"
        />
        <div className="button-group">
          <Button
            innerText="Confirm"
            onClick={() => {
              // setRequestData(requestData.concat(data));
              acceptHandler(requestData.concat(data));
            }}
            type="submit"
          />
          <Button
            innerText="Cancel"
            style="outline"
            onClick={(e) => {
              e.preventDefault();
              setInputList([<RequestForm handleData={setData} key="0" />]);
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
