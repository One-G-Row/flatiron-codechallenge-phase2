import React, { useState } from "react";

function Form({ transaction, setTransaction }) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState();

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
        Date{" "}
        <input
          className="date"
          type="date"
          onChange={handlerDate}
          value={date}
          placeholder="Enter Date"
        />
      </label>
      <label>
        Description{" "}
        <input
          className="description"
          type="text"
          onChange={handlerDescription}
          value={description}
          placeholder="Describe your transaction"
        />
      </label>
      <label>
        Category{" "}
        <input
          className="category"
          type="text"
          onChange={handlerCategory}
          value={category}
          placeholder="Enter category"
        />
      </label>
      <label>
        Amount{" "}
        <input
          className="amount"
          type="number"
          onChange={handlerAmount}
          value={amount}
          placeholder="Amount"
        />
      </label>
      <button className="add" onClick={addTransaction}>
        Add Transaction
      </button>
    </form>
  );
}

export default Form;
