import { useParams } from "react-router-dom";

const ModalList = () => {
  const { subCategoryId } = useParams();
  return <div>{subCategoryId} model page</div>;
};

export default ModalList;
