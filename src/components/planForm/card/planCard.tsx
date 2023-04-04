import React, { useState } from "react";
import "./planCard.scss";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { InputSwitch } from "primereact/inputswitch";

const plans = [
  {
    title: "Arcade",
    icon: "./icon-arcade.svg",
    text: [{ monthly: "$9/mo" }, { yearly: "$90/yr" }],
  },
  {
    title: "Advanced",
    icon: "./icon-advanced.svg",
    text: [{ monthly: "$12/mo" }, { yearly: "$120/yr" }],
  },
  {
    title: "Pro",
    icon: "./icon-pro.svg",
    text: [{ monthly: "$15/mo" }, { yearly: "$150/yr" }],
  },
];

const PlanCard = ({ plan, isSelected, onSelect, isMonthly }: any) => {
  const cardClass = `plan-card ${isSelected ? "selected" : ""}`;

  return (
    <div className={cardClass} onClick={onSelect}>
      <div className="plan-icon">
        <img src={plan.icon} alt={plan.title} />
      </div>
      <div>
        <div className="plan-title">{plan.title}</div>
        <div className="plan-text">
          {plan.text.map((text: any) =>
            isMonthly ? text.monthly : text.yearly
          )}
        </div>
        {!isMonthly && <div className="yearly-offer">2 months free</div>}
      </div>
    </div>
  );
};
export const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  const handlePlanSelect = (plan: any) => {
    setSelectedPlan(plan);
  };
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="subscription-plans">
      <div className="plan-cards">
        {plans.map((plan) => (
          <PlanCard
            key={plan.title}
            plan={plan}
            isSelected={plan === selectedPlan}
            onSelect={() => handlePlanSelect(plan)}
            isMonthly={isMonthly}
          />
        ))}
      </div>
      <div className="selected-plan">
        {/* You have selected {selectedPlan.title} ({selectedPlan.text}) */}
        <span className={isMonthly ? "choice" : "not-selected"}>Monthly</span>
        <InputSwitch
          className="button-switch"
          checked={!isMonthly}
          onChange={() => setIsMonthly(!isMonthly)}
        />
        <span className={!isMonthly ? "choice" : "not-selected"}>Yearly</span>
      </div>
    </div>
  );
};
