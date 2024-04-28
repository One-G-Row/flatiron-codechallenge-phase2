import React, { useState } from "react";

function ListTable({ details, addObjs, input }) {
  const [results, setResults] = useState("");
 
  function filterTransactions() {
    const filterDetails = details.map((detail) => {
      if (input.includes(detail.category)) {
        return detail.date + detail.description + detail.category + detail.amount;
      }
    });
    setResults(filterDetails);
  }
  console.log(results);


  function extractProperties() {
const data = {
    date:results.date,
    descrition:results.description,
    category:results.category,
    amount:results.amount
    }
  }
  console.log(extractProperties())
  return (
    <div className="table">
      <button onClick={filterTransactions}>Search </button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => {
            return (
              <tr key={index}>
                <td>{detail.date}</td>
                <td>{detail.description}</td>
                <td>{detail.category}</td>
                <td>{detail.amount}</td>
              </tr>
            );
          })}

          {/* adding the new transaction to the list table */}
          {addObjs.map((addObj) => {
            return (
              <tr key={addObj.id}>
                <td>{addObj}</td>
              </tr>
            );
          })}

          {/* <tr>
<td>{addObjs}</td>
</tr>  */}

          {/* {addObj.map((obj, index)=>{
<tr key={index}>
<td>{addObj}</td>
    <td>{addObj}</td>
    <td>{addObj}</td>
    <td>{addObj}</td>
</tr>
})} */}
        </tbody>
      </table>
      <p>{results}</p>
    </div>
  );
}
export default ListTable;
