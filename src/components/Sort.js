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
  const mapObj = sortedData.map((data, index) => {
    return (
      <li key={index}>
        {data.category} - {data.description}
      </li>
    );
  });
  console.log(mapObj);
  //const sortedArray = [...mapObj];

  return (
    <div>
      <button className="sort" onClick={handleSorting}>
        sort
      </button>
      <p>{sortedData}</p>
      <ul>
        {mapObj}
        {/*  <li>{sortedData}</li> */}
      </ul>
    </div>
  );
}
export default Sort;
