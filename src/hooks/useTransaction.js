import { useContext } from "react";
import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "../constants/categories";
import { ExpenseTrackerContext } from "../context/context";

const useTransaction = ({ title }) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const transactionPerType = transactions.filter(({ type }) => type === title);
  const total = transactionPerType.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );
  const selectedCate =
    title === "Income" ? incomeCategories : expenseCategories;

  transactionPerType.forEach((trans) => {
    const category = selectedCate.find(s => s.type === trans.category);

    category && (category.amount += trans.amount);
  });

  const filteredCategories = selectedCate.filter(sc => sc.amount > 0);

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map(c => c.amount),
        backgroundColor: filteredCategories.map(c => c.color),
        color: "white",
      },
    ],
    labels: filteredCategories.map(c => c.type),
  };

  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: "rgba(255, 255, 255, 0.9)",
        },
      },
    },
  };

  return { filteredCategories, total, chartData, chartOptions };
};

export default useTransaction;
