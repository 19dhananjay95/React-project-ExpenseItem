import "./Expenses.css";
import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js";
const Expenses = (props) => {
  return (
    <Card className="exoenses">
      {props.itom.map((expense) => (
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;
