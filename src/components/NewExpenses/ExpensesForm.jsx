import React, { useState } from "react";
import "../../styles/ExpenseForm.css";
function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  /*Instead of using three states we can use only one state for all the three variables.
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  */
  const handleTitleChange = (e) => {
    setEnteredTitle(e.target.value);
    /*While changing the input value in an objectw e should set the other two variables also present in the
    object, Because react doesn't merge the data, it overwrtites the data in the object
    */
    /*
    setUserInput({
      ...userInput,
      enteredTitle: e.target.value,
    });
    */
    /*
    //Whenever we update the state and it depens on the previous state we should not update like this.
    //use anonymous function to update the value beacuse react schedules the state updates . It doesn't perform instantly.
    //So when you update many states at the same time then  using the above approach we may sometimes use the oldest state not the recent previous state.
    //If we use anonymous functions then react guarentees us that we are using the most recent prevoius state.

    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });


    */
  };
  const handleAmountChange = (e) => {
    setEnteredAmount(e.target.value);
    /*
    setUserInput({
      ...userInput, //using spread operator we can get the previous values and just only overwrite the require inputvalue
      enteredAmount: e.target.value,
    });
    */
  };
  const handleDateChange = (e) => {
    setEnteredDate(e.target.value);
    /*
    setUserInput({
      ...userInput,
      enteredDate: e.target.value,
    });
    */
  };
  const submitHandler = (e) => {
    e.preventDefault(); //To prevent the refreshing the page onclick of the submit button
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount, //+converts the amount to number
      date: new Date(enteredDate), //converts the date string to the date object.
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setShowExpenseForm(false);
  };

  return (
    <>
      {showExpenseForm ? (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                onChange={(e) => handleTitleChange(e)}
                value={enteredTitle}
                required
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={(e) => handleAmountChange(e)}
                value={enteredAmount} //this is two way binding. WHenever we are changing the data we are not only updating the data we are also changing the input value
                required
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={enteredDate}
                onChange={(e) => handleDateChange(e)}
                required
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button
              type="submit"
              className="mr-2"
              onClick={() => setShowExpenseForm(false)}
            >
              Cancel
            </button>
            <button type="submit">Add Expenses</button>
          </div>
        </form>
      ) : (
        <button
          className="new-expense__actions"
          onClick={() => setShowExpenseForm(true)}
        >
          Add New Expense
        </button>
      )}
    </>
  );
}
export default ExpenseForm;
