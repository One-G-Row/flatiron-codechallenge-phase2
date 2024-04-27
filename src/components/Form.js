
import React,{useState} from "react"
import ListTable from "./ListTable"

function Form({transaction, setTransaction}){
const [date, setDate] = useState("2024-3-4")
const [description, setDescription] = useState("deposit from world bank")
const [category, setCategory] = useState("deposit")
const [amount, setAmount] = useState(300000)


function handlerDate(e){
  setDate(e.target.value)  
}

function handlerDescription(e){
    setDescription(e.target.value)
}

function handlerCategory(e){
    setCategory(e.target.value)
}

function handlerAmount(e){
    setAmount(e.target.value)
}

function addTransaction(e){
e.preventDefault()
const transactionArray = [...transaction, date, description, category, amount]
setTransaction(transactionArray)
}



return (
<form>
    <label>Date: <input type="date" onChange={handlerDate} value={date}/></label>
    <label>Description: <input type="text" onChange={handlerDescription} value={description}/></label>
    <label>Category: <input type="text" onChange={handlerCategory} value={category}/></label>
    <label>Amount: <input type="number" onChange={handlerAmount} value={amount}/></label>
    <button onClick={addTransaction}>Add Transaction</button>
    

</form>
)
}

export default Form