import React from "react";
import { incomeCategories, expenseCategories } from "./data";
import { TrackerBox } from "./TrackerBox";
import { useGlobalContext } from "../Context";
export const ExpenseTracker = () => {
  const {
    types,
    incomeCategory,
    expenseCategory,
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
    categoryArray = incomeCategories;
    defaultCategory = incomeCategory;
  } else {
    categoryArray = expenseCategories;
    defaultCategory = expenseCategory;
  }
  return (
    <div className="main">
      <h3>Expense Tracker</h3>
      <div className="balance">Total balance :${balance}</div>
      <div className="expense-wrapper">
        <form className="expense-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-one">
            <div className="type">
              <p>Type</p>
              <select
                value={types}
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
                value={defaultCategory}
                onChange={(e) => handleCategory(e.target.value)}
                className="select"
              >
                {categoryArray.map((category) => {
                  return (
                    <option key={category.type} value={category.type}>
                      {category.type}
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
          <button type="submit" className="create">
            Create
          </button>
        </form>
        <TrackerBox />
      </div>
    </div>
  );
};
