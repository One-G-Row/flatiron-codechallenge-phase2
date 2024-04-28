import React, { useState } from "react";

function Header({ userDetails, transactions, input, setInput }) {
  
  const [filterBy, setFilterBy] = useState(userDetails);
  const [results, setResults] = useState([]);

  /*   console.log(input);
  console.log(results);
  console.log(filterBy); */

  function updateFilterBy() {
    const transactionalArray = [...filterBy, transactions];
    setFilterBy(transactionalArray);
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  const userDetailsValues = Object.values(userDetails);
  const userDetailsArray = [userDetailsValues];
 /*  console.log(userDetailsArray) */;
  //console.log(userDetailsValues )
  
  function filterTransaction() {
    const filterResults = userDetailsArray.filter((userDetail) => {
      //userDetail.includes(input)
      {
        if (userDetail.includes(input)) {
          return userDetail;
        }
      }

    });
    setResults(filterResults);
    console.log(filterResults);
  }
 

  function filteredResult() {
    return results.map((result) => <li key={result.id}>{result}</li>);
  }

  return (
    <div>
      <h1>Bank of FlatIron</h1>
      <input type="text" onChange={handleInput} value={input} />
      <ul>{filteredResult}</ul>
      <p>{results}</p>
      {updateFilterBy}
    </div>
  );
}
export default Header;
