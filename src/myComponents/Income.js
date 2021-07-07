import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useGlobalContext } from "../Context";
export const Income = () => {
  const { income, incomeBox, expenseBox } = useGlobalContext();
  const incomeArray = incomeBox.filter((income)=>{
    return income.amount>0
})
  let chartLabel =[]
  let chartDataSets = [];
  let bgColors = [];
  for(const inc of incomeArray ){
      chartLabel = [...chartLabel,inc.type];
      chartDataSets = [...chartDataSets,inc.amount]
      bgColors = [...bgColors,inc.color]
  }
  const chartData = {
    labels: chartLabel,
    datasets: [
      {
        label: "Income",
        backgroundColor: bgColors,
        data: chartDataSets,
        hoverOffset: 6
      },
    ],
  };

  const chartOptions = {
    plugins: {
        title: {
            display: true,
            text: `$${income}`,
            font:{
                size:20,
                weight:'normal'
            }
        },
        
    },
   
  }
  console.log(chartOptions);
  return (
    <div className="income-box">
      <h3>Income</h3>
      <div className="chart">
      <Doughnut
        data={chartData}
        options={chartOptions}
      />
      </div>
      
    </div>
  );
};
