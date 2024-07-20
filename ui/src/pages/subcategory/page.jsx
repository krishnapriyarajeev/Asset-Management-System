import { useParams } from "react-router-dom";

const SubCategory = () => {
  const { categoryId } = useParams();
  return <div>{categoryId} page</div>;
};

export default SubCategory;
