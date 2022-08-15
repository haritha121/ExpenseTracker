import React from "react";
import "../../styles/ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((val) => {
        return (
          <ExpenseItem
            key={val.id}
            title={val.title}
            date={val.date}
            amount={val.amount}
          ></ExpenseItem>
        );
      })}
    </ul>
  );
}
export default ExpensesList;
