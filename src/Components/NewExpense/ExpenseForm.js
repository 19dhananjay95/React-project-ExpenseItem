import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseFrom = (porps) => {
  const [entereTitle, setEnteredTitle] = useState("");
  const [entereAmount, setEnteredAmount] = useState("");
  const [entereDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      title: entereTitle,
      amount: entereAmount,
      date: new Date(entereDate),
    };
    porps.onSaveEspenseData(expenseDate);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    console.log(expenseDate);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={entereTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={entereAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={entereDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseFrom;
