import React from "react";
import { AiFillDollarCircle, AiFillDelete } from "react-icons/ai";
import { useGlobalContext } from "../Context";
export const TrackerBox = () => {
  const { trackerBox,removeItem } = useGlobalContext();
  console.log(trackerBox);
  return (
    <div className='tracker-box'>
      {trackerBox.map((transaction) => {
        const  {id,color,field,money,date,type} = transaction
        return (
          <div className="transaction-wrapper" key={id}>
            <p >
              <AiFillDollarCircle className = {color} />
            </p>
            <div className="transact">
              <div className="trans-dsc">
                <p>{field}</p>
                <span>${money}</span>
                <span>{date}</span>
              </div>
              <button className="delete" onClick={()=>removeItem(id,type,money,field)} >
                <AiFillDelete />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
