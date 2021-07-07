import React from "react";
import { Expense } from './myComponents/Expense'
import { Income } from './myComponents/Income'
import { ExpenseTracker } from './myComponents/ExpenseTracker'
function App() {
  if(window.innerWidth>=1350)
   return (
    <div className="App">
      <Income/>
      <ExpenseTracker/>
      <Expense/>
    </div>
  );
  else{
    return (
      <div className="App">
        <ExpenseTracker/>
        <Income/>
        <Expense/>
      </div>
    );
  }
}

export default App;
