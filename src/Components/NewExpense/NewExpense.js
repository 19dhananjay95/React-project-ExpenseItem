import React from "react";

import "./NewExpense.css";

import ExpenseFrom from "./ExpenseForm.js";

const NewExpense = (porps) => {
  const saveExpenseDataDandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    porps.onAddExpense(expenseData);
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseFrom onSaveEspenseData={saveExpenseDataDandler} />
    </div>
  );
};

export default NewExpense;
