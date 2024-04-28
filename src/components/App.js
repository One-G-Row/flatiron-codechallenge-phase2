/* import './App.css'; */
import React, { useState } from "react";
import Header from "./Header";
import ListTable from "./ListTable";
import Form from "./Form";
import detailsData from "../transactions";

function App() {
  const [transaction, setTransaction] = useState([]);
 

  return (
    <div className="App">
      <Header userDetails={detailsData} transactions={transaction} />
      <Form transaction={transaction} setTransaction={setTransaction} />
      <ListTable details={detailsData} addObjs={transaction} />
    </div>
  );
}

export default App;
