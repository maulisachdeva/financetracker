import React from "react";

function BudgetCard({ category, spent, budget }) {
  const percent = Math.round((spent / budget) * 100);

  return (
    <div>
      <h3>{category}</h3>
      <p>₹{spent} / ₹{budget}</p>
      <div style={{ background: "#ddd", width: "100%", height: "10px" }}>
        <div style={{ background: "green", width: `${percent}%`, height: "10px" }}></div>
      </div>
      <p>{percent}%</p>
    </div>
  );
}

export default BudgetCard;
