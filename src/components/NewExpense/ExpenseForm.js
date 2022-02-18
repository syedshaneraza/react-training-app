import React from "react";
import './ExpenseForm.css';

const ExpenseForm = function(){
  return (
  <form>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text"></input>
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01"></input>
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="29-01-01" max="2022-11-02"></input>
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
    </div>
  </form>
  );
}

export default ExpenseForm;
