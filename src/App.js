import React from "react";
import { Expense } from './myComponents/Expense'
import { Income } from './myComponents/Income'
import { ExpenseTracker } from './myComponents/ExpenseTracker'
function App() {
  return (
    <div className="App">
      <Income/>
      <ExpenseTracker/>
      <Expense/>
    </div>
  );
}

export default App;
