import React from "react";
import BudgetCard from "../components/BudgetCard";

function Budgets() {
  return (
    <div>
      <h2>Monthly Budget</h2>
      <BudgetCard category="Food" spent={4200} budget={5000} />
      <BudgetCard category="Travel" spent={1500} budget={3000} />
      <BudgetCard category="Shopping" spent={2800} budget={3000} />
    </div>
  );
}

export default Budgets;
