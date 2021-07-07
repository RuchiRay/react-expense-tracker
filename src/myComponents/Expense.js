import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useGlobalContext } from "../Context";
export const Expense = () => {
  const { expense, expenseBox } = useGlobalContext();
  const expenseArray = expenseBox.filter((expense) => {
    return expense.amount > 0;
  });
  let chartLabel = [];
  let chartDataSets = [];
  let bgColors = [];
  for (const exp of expenseArray) {
    chartLabel = [...chartLabel, exp.type];
    chartDataSets = [...chartDataSets, exp.amount];
    bgColors = [...bgColors, exp.color];
  }
  const chartData = {
    labels: chartLabel,
    datasets: [
      {
        label: "Income",
        backgroundColor: bgColors,
        data: chartDataSets,
        hoverOffset: 6,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      title: {
        display: true,
        text: `$${expense}`,
        font: {
          size: 20,
          weight: "normal",
        },
      },
    },
  };

  return <div className="expense-box">
      <h3>Expense</h3>
      <div className="chart">
      <Doughnut
        data={chartData}
        options={chartOptions}
      />
      </div>
      </div>;
};
