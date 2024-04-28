/* import './App.css'; */
import React, { useState } from "react";
import Header from "./Header";
import ListTable from "./ListTable";
import Form from "./Form";
import detailsData from "../transactions";

function App() {
  const [transaction, setTransaction] = useState([]);
  const [input, setInput] = useState([]);

  return (
    <div className="App">
      <Header
        userDetails={detailsData}
        transactions={transaction}
        input={input}
        setInput={setInput}
      />
      <Form transaction={transaction} setTransaction={setTransaction} />
      <ListTable
        details={detailsData}
        addObjs={transaction}
        input={input}
        setInput={setInput}
      />
    </div>
  );
}

export default App;
