/* eslint-disable no-unused-vars */
import "./create.scss";
import CreateModal from "../Modal/createModal";
import { useState } from "react";

const CreateButton = ({ createFields }) => {
  const [createModal, setCreateModal] = useState(false);

  const createHandler = (data) => {
    const { line1, line2, departmentName, ...newData } = {
      ...data,
      department: { name: data.departmentName },
      address: { line1: data.line1, line2: data.line2 },
    };
    console.log(newData);
    setCreateModal(false);
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
        createFields={createFields}
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
