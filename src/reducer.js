export const reducer = (state, action) => {
  const { type, payLoad } = action;
  let {
    types,
    incomeCategory,
    expenseCategory,
    amount,
    date,
    incomeBox,
    expenseBox,
    trackerBox,
  } = state;
  if (type === "CHANGE TYPE") {
    return { ...state, types: payLoad };
  }
  if (type === "CHANGE CATEGORY") {
    if (types === "Income") return { ...state, incomeCategory: payLoad };
    else return { ...state, expenseCategory: payLoad };
  }
  if (type === "CHANGE AMOUNT") {
    return { ...state, amount: payLoad };
  }
  if (type === "CHANGE DATE") {
    return { ...state, date: payLoad };
  }
  if (type === "SUBMIT") {
    console.log("submit");
    if (types === "Expense") {
      let item = {
        id: new Date().getTime().toString(),
        color: "red",
        field: expenseCategory,
        money: amount,
        date: date,
      };
      let tempTrackerBox = [...trackerBox, item];
      console.log(tempTrackerBox);
      let tempBox = expenseBox.map((expense) => {
        if (expense.type === expenseCategory) {
          let newAmount = expense.amount + parseInt(amount);
          return { ...expense, amount: newAmount, id: item.id };
        } else return expense;
      });

      return {
        ...state,
        types: "Income",
        incomeCategory: "Business",
        expenseCategory: "Bills",
        amount: 0,
        expenseBox: tempBox,
        trackerBox: tempTrackerBox,
      };
    } else {
      let item = {
        id: new Date().getTime().toString(),
        color: "green",
        field: incomeCategory,
        money: amount,
        date: date,
        type: types,
      };
      let tempTrackerBox = [...trackerBox, item];

      let tempBox = incomeBox.map((income) => {
        if (income.type === incomeCategory) {
          let newAmount = income.amount + parseInt(amount);
          return { ...income, amount: newAmount, id: item.id };
        } else return income;
      });
      return {
        ...state,
        types: "Income",
        incomeCategory: "Business",
        expenseCategory: "Bills",
        amount: 0,
        incomeBox: tempBox,
        trackerBox: tempTrackerBox,
      };
    }
  }
  if (type === "REMOVE") {
    const { id, type, money, field } = payLoad;
    let tempTrackerBox = trackerBox.filter((item) => {
      return item.id !== id;
    });
    if (type === "Income") {
      let tempBox = incomeBox.map((income) => {
        if (income.type === field) {
          let newAmount = income.amount - money;
          return { ...income, amount: newAmount };
        } else return income;
      });
      return { ...state, incomeBox: tempBox, trackerBox: tempTrackerBox };
    } else {
      let tempBox = expenseBox.map((expense) => {
        if (expense.type === field) {
          let newAmount = expense.amount - money;
          return { ...expense, amount: newAmount };
        } else return expense;
      });
      return { ...state, expenseBox: tempBox, trackerBox: tempTrackerBox };
    }
  }
  if (type === "CALC BALANCE") {
    let income = 0;
    for (let inc of incomeBox) {
      income = income + inc.amount;
    }
    let expense = 0;
    for (let exp of expenseBox) {
      expense = expense + exp.amount;
    }
    let finalBalance = income - expense;
    return {
      ...state,
      income: income,
      expense: expense,
      balance: finalBalance,
    };
  }

  throw new Error("no matching action type");
};
