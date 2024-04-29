import React, { useState } from "react";
import detailsData from "../transactions";
import ListTable from "./ListTable";

function Sort() {
  const [sortedData, setSortedData] = useState(detailsData);

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
        {data.date}
        {data.category}
        {data.description}
        {data.amount}
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
      <table>
      <tr>
      <td>{mapObj}</td>
      </tr>
      </table>
    </div>
  );
}
export default Sort;
