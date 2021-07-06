import React from 'react'
import { useGlobalContext } from '../Context'
export const Expense = () => {
    const {expense} = useGlobalContext();
    return (
        <div className='expense-box'>
            expense ={expense}
        </div>
    )
}
