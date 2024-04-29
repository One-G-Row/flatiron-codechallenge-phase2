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
      <tr key={index}>
        <td>{data.date}</td>
        <td>{data.category}</td>
        <td>{data.description}</td>
        <td>{data.amount}</td>
      </tr>
    );
  });

  console.log(mapObj);
  //const sortedArray = [...mapObj];

  return (
    <div>
      <button className="sort" onClick={handleSorting}>
        sort
      </button>
      <table className="table table-hover">
        <thead>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </thead>
        <tbody>{mapObj}</tbody>
      </table>
    </div>
  );
}
export default Sort;
