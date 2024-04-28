import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ListTable({ details, addObjs, input }) {
  const [results, setResults] = useState("");

  //conditions set to filter table data by date, category, description and amount
  function filterTransactions() {
    const filterDetails = details.map((detail) => {
      if (input.includes(detail.category)) {
        return (
          detail.date + detail.description + detail.category + detail.amount
        );
      }
      if (input.includes(detail.description)) {
        return (
          detail.date + detail.description + detail.category + detail.amount
        );
      }
      if (input.includes(detail.amount)) {
        return (
          detail.date + detail.description + detail.category + detail.amount
        );
      }
      if (input.includes(detail.date)) {
        return (
          detail.date + detail.description + detail.category + detail.amount
        );
      }
    });

    setResults(filterDetails);
  }
  //image path and alt text to insert in jsx element
  const imagePath = "../search-64.webp";
  const altText = "search";
  return (
    <div className="table">
      <button className="search" onClick={filterTransactions}>
        <img src={imagePath} alt={altText} />
      </button>

      <table onClick={filterTransactions} className="table table-hover">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {/* ternary operator to compare input and the data present */}
          {results ? (
            <tr>
              <td>{results}</td>
              {/* <td>{data.description}</td>
            <td>{data.category}</td>
            <td>{data.amount}</td> */}
            </tr>
          ) : (
            details.map((detail, index) => (
              <tr key={index}>
                <td>{detail.date}</td>
                <td>{detail.description}</td>
                <td>{detail.category}</td>
                <td>{detail.amount}</td>
              </tr>
            ))
          )}

          {/* adding the new transaction to the list table */}
          {addObjs.map((addObj) => {
            return (
              <tr key={addObj.id}>
                <td>{addObj}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default ListTable;
