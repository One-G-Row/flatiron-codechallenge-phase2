/* import './App.css'; */
import ListTable from "./ListTable";
import detailsData from "../transactions"


function App() {
  //console.log(detailsData)
  return (
    <div className="App">
      <ListTable details={detailsData}/>
    </div>
  );
}

export default App;
