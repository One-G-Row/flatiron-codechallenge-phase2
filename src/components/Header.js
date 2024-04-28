import React, { useState } from "react";

function Header({ userDetails, transactions }) {
  const [input, setInput] = useState([]);
  const [filterBy, setFilterBy] = useState(userDetails);
  const [results, setResults] = useState([]);

  console.log(input);
  console.log(results);
  console.log(filterBy);

  function updateFilterBy() {
    const transactionalArray = [...filterBy, transactions];
    setFilterBy(transactionalArray);
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  function filterTransaction() {
    userDetails.filter((input) => {
      if (filterBy === input) {
        setResults(userDetails);
      } else {
        setResults("none");
      }
      /*  userDetail === filterBy */
    });
  }

  function filteredResult() {
    {
      results.map((result) => <li key={result.id}>{result}</li>);
    }
  }

  return (
    <div>
      <h1>Bank of FlatIron</h1>
      <input type="text" onChange={handleInput} value={input} />
      <button onClick={filterTransaction}>Search </button>
      <ul>
        {filteredResult}
      </ul>
      <p>{results}</p>
      {updateFilterBy}
    </div>
  );
}
export default Header;
