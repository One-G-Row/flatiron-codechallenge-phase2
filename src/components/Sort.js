import React, { useState } from "react";
import detailsData from "../transactions";
function Sort() {
  const [sortedData, setSortedData] = useState([]);

  function handleSorting() {
    const sortArray = [...detailsData];
    const sortData = sortArray.sort((a, b) => {
      return (
        a.category.localeCompare(b.category) ||
        a.description.localeCompare(b.description)
      );
    });
    setSortedData(sortData);
  }
  console.log(sortedData);
 

  return (
    <div>
      <button className="sort" onClick={handleSorting}>
        sort
      </button>
    </div>
  );
}
export default Sort;
