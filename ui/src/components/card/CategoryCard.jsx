import { useEffect } from "react";
import { useGetAllCountQuery } from "../../pages/category/count.api";
import Pill from "../pill/pill";
import "./card.scss";


const CategoryCard = ({ data, count, onClick }) => {


  const filteredArray = count.isSuccess && count.data.array.filter((count) => count.Category === `${data.categoryName}`)
  const filteredCounts = filteredArray[0]?.statusCounts
  
  return < div className="sub-card" onClick={() => onClick(data.categoryName.toLowerCase())}>
    <div>
      <h3>{data.categoryName}</h3>
      <div className="pill-group">
        <Pill
          innerText={`Unallocated: ${filteredCounts ? filteredCounts.Unallocated : 0}`}
          color="green"
          type="default"
          plain
        />
        <Pill
          innerText={`Allocated: ${filteredCounts ? filteredCounts?.Allocated : 0}`}
          color="yellow"
          type="default"
          plain
        />
        <Pill
          innerText={`Damaged: ${filteredCounts ? filteredCounts?.Damaged : 0}`}
          color="red"
          type="default"
          plain
        />
        <Pill
          innerText={`Total: ${filteredCounts ? filteredCounts?.Unallocated + filteredCounts?.Allocated + filteredCounts?.Damaged : 0}`}
          color="purple"
          plain
        />
      </div>
    </div>
  </div >
};

export default CategoryCard;
