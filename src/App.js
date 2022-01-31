// import "./App.css";
import React, { useState } from "react";
import NewExpense from "./Components/NewExpense/NewExpense.js";
import Expenses from "./Components/Expense/Expenses.js";

let DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "school Fee",
    amount: 250,
    date: new Date(2021, 8, 12),
  },
  {
    id: "e2",
    title: "Gym Fee",
    amount: 150,
    date: new Date(2021, 5, 13),
  },
  {
    id: "e3",
    title: "computer Fee",
    amount: 500,
    date: new Date(2021, 6, 25),
  },
  {
    id: "e3",
    title: "Full Stack Develaper Fee",
    amount: 3500,
    date: new Date(2021, 1, 8),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses itom={expenses} />
    </div>
  );
};
export default App;
