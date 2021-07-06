import React from 'react'
import { useGlobalContext } from '../Context'
export const Income = () => {
    const {income} = useGlobalContext()
    return (
        <div className='income-box'>
            income = {income}
        </div>
    )
}
