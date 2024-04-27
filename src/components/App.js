/* import './App.css'; */
import React,{useState} from "react"
import ListTable from "./ListTable";
import Form from "./Form"
import detailsData from "../transactions"


function App() {
  const [transaction, setTransaction] = useState([])

  return (
    <div className="App">
      <Form transaction={transaction} setTransaction={setTransaction}/>
      <ListTable details={detailsData} addObj={transaction}/>
    </div>
  );
}

export default App;
