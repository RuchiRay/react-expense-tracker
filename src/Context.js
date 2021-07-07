import React, {  useEffect, useReducer, useContext } from "react";
import { reducer } from "./reducer";
import { incomeCategories,expenseCategories } from './myComponents/data'
const AppContext = React.createContext();
const initialState = {
    types:'Income',
    incomeCategory:'Business',
    expenseCategory:'Bills',
    amount:0,
    date:'',
    incomeBox:incomeCategories,
    expenseBox:expenseCategories,
    trackerBox:[],
    income:0,
    expense:0,
    balance:0
}
const getLocalStorage = ()=>{
    let localState = localStorage.getItem('list')
    if(localState)
    return JSON.parse(localStorage.getItem('list'))
    else
    return initialState
}
let box = getLocalStorage();
console.log(box);
const AppProvider = ({children})=>{
     const [state, dispatch] = useReducer(reducer,box);

    const changeType = (newType)=>{
        console.log('changing type to',newType);       
        dispatch({type:'CHANGE TYPE', payLoad: newType})
    }

    const handleCategory = (newCategory)=>{
        console.log('changing category to',newCategory);
        dispatch({type:'CHANGE CATEGORY',payLoad:newCategory})
    }

    const handleAmount = (newAmount)=>{
        console.log('changing amount to',newAmount);
        dispatch({type:'CHANGE AMOUNT',payLoad:newAmount})
        
    }

    const handleDate = (newDate)=>{
        console.log('changing date to',newDate); 
        dispatch({type:'CHANGE DATE',payLoad:newDate})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('submitted');
        dispatch({type:'SUBMIT'})     
    }

    const removeItem = (id,type,money,field)=>{
        console.log('delete item');     
        dispatch({type:'REMOVE',payLoad:{id,type,money,field}})
      
    }

    const calcBalance = ()=>{
        dispatch({type:'CALC BALANCE'})
    }

   
    useEffect(() => {
       calcBalance();
       localStorage.setItem("list", JSON.stringify(state));
     
      }, [state.trackerBox])

     
    return (
        <AppContext.Provider value={{...state,changeType,handleCategory,handleAmount,handleDate,handleSubmit,removeItem}}>{children}</AppContext.Provider>
      );
}
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export { AppContext, AppProvider };