import React, { useState } from "react";
import "./planCard.scss";

const plans = [
  {
    title: "Arcade",
    icon: "icon-1",
    text: "$8/mo",
  },
  {
    title: "Advanced",
    icon: "icon-2",
    text: "$12/mo",
  },
  {
    title: "Pro",
    icon: "icon-3",
    text: "$16/mo",
  },
];

const PlanCard = ({ plan, isSelected, onSelect }: any) => {
  const cardClass = `plan-card ${isSelected ? "selected" : ""}`;

  return (
    <div className={cardClass} onClick={onSelect}>
      <div className="plan-icon">{plan.icon}</div>
      <div>
        <div className="plan-title">{plan.title}</div>
        <div className="plan-text">{plan.text}</div>
      </div>
    </div>
  );
};
export const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  const handlePlanSelect = (plan: any) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="subscription-plans">
      <div className="plan-cards">
        {plans.map((plan) => (
          <PlanCard
            key={plan.title}
            plan={plan}
            isSelected={plan === selectedPlan}
            onSelect={() => handlePlanSelect(plan)}
          />
        ))}
      </div>
      <div className="selected-plan">
        You have selected {selectedPlan.title} ({selectedPlan.text})
      </div>
    </div>
  );
};
