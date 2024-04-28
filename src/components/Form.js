import React, { useState } from "react";

function Form({ transaction, setTransaction }) {
  const [date, setDate] = useState("2024-3-4");
  const [description, setDescription] = useState("deposit from world bank");
  const [category, setCategory] = useState("deposit");
  const [amount, setAmount] = useState(300000);

  function handlerDate(e) {
    setDate(e.target.value);
  }

  function handlerDescription(e) {
    setDescription(e.target.value);
  }

  function handlerCategory(e) {
    setCategory(e.target.value);
  }

  function handlerAmount(e) {
    setAmount(e.target.value);
  }

  //add a transaction to displayed on the page
  function addTransaction(e) {
    e.preventDefault();
    {
      const transactionArray = [
        ...transaction,
        date,
        description,
        category,
        amount,
      ];
      //update the transaction with the date, description, category and amount values
      setTransaction(transactionArray);
    }
  }
  return (
    <form className="form">
      <label>
        Date:{" "}
        <input
          className="date"
          type="date"
          onChange={handlerDate}
          value={date}
        />
      </label>
      <label>
        Description:{" "}
        <input
          className="description"
          type="text"
          onChange={handlerDescription}
          value={description}
        />
      </label>
      <label>
        Category:{" "}
        <input
          className="category"
          type="text"
          onChange={handlerCategory}
          value={category}
        />
      </label>
      <label>
        Amount:{" "}
        <input
          className="amount"
          type="number"
          onChange={handlerAmount}
          value={amount}
        />
      </label>
      <button onClick={addTransaction}>Add Transaction</button>
    </form>
  );
}

export default Form;
