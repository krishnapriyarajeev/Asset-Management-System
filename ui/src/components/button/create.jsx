/* eslint-disable no-unused-vars */
import "./create.scss";
import CreateModal from "../Modal/createModal";
import { useState } from "react";

const CreateButton = ({ fields}) => {
  const [createModal, setCreateModal] = useState(false);

  const createEmployeeHandler = (data) => {
    const { line1, line2, departmentName, ...newData } = {
      ...data,
      department: { name: data.departmentName },
      address: { line1: data.line1, line2: data.line2 },
    };
    console.log(newData);
    setCreateModal(false);
  };


  const createAssetHandler = (data) => {
    console.log(data);
  };

  const createHandler = (data) => {
    if (window.location.pathname.includes("/assets")) createAssetHandler(data);
    if (window.location.pathname.includes("/employees"))
      createEmployeeHandler(data);
  };

  const cancelCreate = () => {
    setCreateModal(false);
  };

  return (
    <>
      <CreateModal
        createHandler={createHandler}
        cancelHandler={cancelCreate}
        open={createModal}
        createFields={fields}
        // select={select}
      />
      <button
        className="create"
        onClick={(e) => {
          e.stopPropagation();
          setCreateModal(true);
        }}
      >
        <h4>Create&nbsp; +</h4>
      </button>
    </>
  );
};

export default CreateButton;
