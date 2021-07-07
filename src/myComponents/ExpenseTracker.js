import React from "react";
import { incomeCategories, expenseCategories } from "./data";
import { TrackerBox } from "./TrackerBox";
import { useGlobalContext } from "../Context";
export const ExpenseTracker = () => {
  const {
    types,
    amount,
    date,
    balance,
    changeType,
    handleCategory,
    handleAmount,
    handleDate,
    handleSubmit,
  } = useGlobalContext();
  let categoryArray = [];
  let defaultCategory = "";
  if (types === "Income") {
    categoryArray = [...incomeCategories];
    defaultCategory = incomeCategories[0];
  } else {
    categoryArray = [...expenseCategories];
    defaultCategory = expenseCategories[0];
  }
  return (
    <div className="main">
      <h3>Expense Tracker</h3>
      <div className="balance">
        <b>Total balance :{balance}</b>
      </div>
      <div className="expense-wrapper">
        <form className="expense-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-one">
            <div className="type">
              <p>Type</p>
              <select
                defaultValue={types}
                onChange={(e) => changeType(e.target.value)}
                className="select"
              >
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
            </div>
            <div className="category">
              <p>Category</p>
              <select
                defaultValue={defaultCategory}
                onChange={(e) => handleCategory(e.target.value)}
                className="select"
              >
                {categoryArray.map((categorySinge, index) => {
                  return (
                    <option key={index} value={categorySinge.type}>
                      {categorySinge.type}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="form-two">
            <div className="amount">
              <p>Amount</p>
              <input
                type="number"
                value={amount}
                onChange={(e) => handleAmount(e.target.value)}
                className="select"
              />
            </div>
            <div className="date">
              <p>Date</p>
              <input
                type="date"
                value={date}
                onChange={(e) => handleDate(e.target.value)}
                className="select"
              />
            </div>
          </div>
          <button type="submit" className='create'>Create</button>
        </form>
        <TrackerBox />
      </div>
    </div>
  );
};
