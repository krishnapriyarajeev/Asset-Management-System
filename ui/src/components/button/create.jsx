import "./create.scss";
import CreateModal from "../Modal/createModal";
import { useState } from "react";

const CreateButton = ({ fields }) => {
  const [createModal, setCreateModal] = useState(false);

  const createHandler = () => {
    setCreateModal(true);
  };

  const cancelCreate = () => {
    setCreateModal(false);
  };

  return (
    <>
      <CreateModal
        createhandler={createHandler}
        cancelHandler={cancelCreate}
        open={createModal}
        fields={fields}
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
