import React from 'react'
import {incomeCategories, expenseCategories} from './data'
import { TrackerBox } from './TrackerBox'
import { useGlobalContext } from '../Context'
export const ExpenseTracker = () => {
    const {types,amount,date,balance,changeType,handleCategory,handleAmount,handleDate,handleSubmit} = useGlobalContext();
    let categoryArray = [];
    let defaultCategory = '';
    if(types==='Income')
    {
        categoryArray = [...incomeCategories]
       defaultCategory = incomeCategories[0]
    }
    else
    {
        categoryArray = [...expenseCategories]
        defaultCategory = expenseCategories[0]
    }
    return (
        <div className='main'>
            <h3>Expense Tracker</h3>
            <div className="balance">Total balance {balance}</div>
            <div className="expense-wrapper">
                <form className='expense-form' onSubmit={(e)=>handleSubmit(e)}>
                    <p>Type</p>
                    <select defaultValue={types} onChange={(e)=>changeType(e.target.value)} >
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                    </select>
                    <p>Category</p>
                    <select defaultValue = {defaultCategory}  onChange={(e)=>handleCategory(e.target.value)} >
                        {
                            categoryArray.map((categorySinge,index)=>{
                              return  <option key={index} value={categorySinge.type}>{categorySinge.type}</option>
                            })
                        }
                    </select>
                   <p>Amount</p>
                   <input type="number" value={amount} onChange ={(e)=>handleAmount(e.target.value)} />
                   <p>Date</p>
                   <input type="date" value={date} onChange = {(e)=>handleDate(e.target.value)}/>
                   <button type='submit' >Create</button>
                </form>
                <TrackerBox/>
            </div>
        </div>
    )
}