import React, { useState } from "react";
import "../../styles/Expenses.css";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const expensesYearHandler = (year) => {
    setFilterYear(year);
  };
  const filteredItemsArray = props.expenseItemArray.filter((val) => {
    return val.date.getFullYear().toString() === filterYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          expensesYear={expensesYearHandler}
          selectedValue={filterYear}
        />
        <ExpensesChart expenses={filteredItemsArray} />

        <ExpensesList items={filteredItemsArray} />
      </Card>
    </div>
  );
}
export default Expenses;
