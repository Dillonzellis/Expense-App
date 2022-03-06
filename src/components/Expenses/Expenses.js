import { useState } from "react";

import ExpensesFilter from "./ExpenseFilters/ExpensesFilters";
import ExpensesList from "./ExpensesList/ExpensesList";
import Card from "../UI/Card";
import "./Styles/Expenses.css";

const Expenses = (props) => {
  const [pickedYear, setPickedYear] = useState("2020");

  const filterExpenseHandler = (filteredExpense) => {
    setPickedYear(filteredExpense);
  };

  const sortedExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === pickedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={pickedYear}
          filteredExpense={filterExpenseHandler}
        />
        <ExpensesList items={sortedExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
