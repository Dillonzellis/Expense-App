import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilters/ExpensesFilters";
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

  let expensesContent = <p>No Expenses Found.</p>;

  if (sortedExpenses.length > 0) {
    expensesContent = sortedExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={pickedYear}
          filteredExpense={filterExpenseHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
