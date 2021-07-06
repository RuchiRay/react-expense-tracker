export const reducer = (state, action) => {
  const { type, payLoad } = action;
  let { types, incomeCategory,expenseCategory, amount, date, incomeBox, expenseBox,trackerBox } = state;
  if (type === "CHANGE TYPE") {
    console.log("inside reducer", payLoad);
    return { ...state, types: payLoad };
  }
  if (type === "CHANGE CATEGORY") {
    console.log("inside reducer", payLoad);
    if(types==='Income')
    return { ...state, incomeCategory: payLoad };
    else
    return {...state,expenseCategory:payLoad}
  }
  if (type === "CHANGE AMOUNT") {
    console.log("changing amount to", payLoad);
    return { ...state, amount: payLoad };
  }
  if (type === "CHANGE DATE") {
    console.log("changing date to", payLoad);
    return { ...state, date: payLoad };
  }
  if (type === "SUBMIT") {
    console.log(types);
    console.log(incomeCategory,expenseCategory);
    console.log(amount);
    console.log(date);
    if(types==='Expense'){
        let item = {id :new Date().getTime().toString(), color:'red',field:expenseCategory,money:amount,date:date}
        let tempTrackerBox = [...trackerBox,item]
        let tempBox = expenseBox.map((expense) => {
            if (expense.type === expenseCategory) 
            {
                let newAmount = expense.amount+ parseInt(amount)
                return { ...expense, amount: newAmount,id:item.id };

            }
            else
             return expense;
          });
                
          return {...state,expenseBox:tempBox,trackerBox:tempTrackerBox};
    }
    else{
        let item = {id :new Date().getTime().toString(),color:'green',field:incomeCategory,money:amount,date:date,type:types}
        let tempTrackerBox = [...trackerBox,item]
       
        let tempBox = incomeBox.map((income) => {
            if (income.type === incomeCategory) 
           {
            let newAmount = income.amount+ parseInt(amount)
            return { ...income, amount: newAmount,id:item.id };
           }
            else
             return income;
          });
          console.log('printing after adding ',tempBox);
          return {...state,incomeBox:tempBox,trackerBox:tempTrackerBox};
    }
    
  }
  if(type==='REMOVE'){
      const {id,type,money} = payLoad
      let tempTrackerBox = trackerBox.filter((item)=>{
        return item.id!==id
    })
      if(type==='Income'){
          let tempBox = incomeBox.map((income)=>{
              if(income.id===id){
                  let newAmount = income.amount - money
                  console.log('printing money type in income', newAmount);
                  return { ...income, amount:newAmount}
              }
              else
              return income;
          })
          console.log('printing box after removing',tempBox);
          return {...state,incomeBox:tempBox, trackerBox:tempTrackerBox}
      }
      else
      {
        let tempBox = expenseBox.map((expense)=>{
            if(expense.id===id){
                let newAmount = expense.amount - money
                console.log('printing money type in expense',newAmount);
                return {...expense,amount:newAmount}
            }
            else
            return expense;
        })
        return {...state,expenseBox:tempBox, trackerBox:tempTrackerBox} 
      }
      
      
  }
  if(type==='CALC BALANCE'){
      console.log('calculating balance');
      let income = 0;
      for(let inc of incomeBox){
        income = income+inc.amount;
      }
      let expense = 0;
      for(let exp of expenseBox){
          expense = expense+exp.amount
      }
      let finalBalance = income-expense
      console.log('income = ',income);
      console.log('expense = ',expense);
      return {...state,income:income,expense:expense, balance:finalBalance}
  }
  throw new Error("no matching action type");
};
// const reducer = (state, action) => {
//     if(action.type)
//     throw new Error('no matching action type')
//   }

//   export default reducer
