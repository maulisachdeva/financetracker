import React from "react";
import GoalCard from "../components/GoalCard";

function Goals() {
  return (
    <div>
      <h2>My Goals</h2>
      <GoalCard goalName="Emergency Fund" saved={25000} target={50000} />
      <GoalCard goalName="Vacation Fund" saved={10000} target={20000} />
    </div>
  );
}

export default Goals;
