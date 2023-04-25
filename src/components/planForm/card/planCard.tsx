import React, { useState } from "react";
import "./planCard.scss";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { InputSwitch } from "primereact/inputswitch";

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
export const SubscriptionPlans = ({
  plans,
  handlePlanSelect,
  selectedPlan,
  isMonthly2,
  updateMonthly,
}: any) => {
  // const handlePlanSelect = (plan: any) => {
  //   setSelectedPlan(plan);
  // };
  // const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="subscription-plans">
      <div className="plan-cards">
        {plans.map((plan: any) => (
          <PlanCard
            key={plan.title}
            plan={plan}
            isSelected={plan === selectedPlan}
            onSelect={() => handlePlanSelect(plan)}
            isMonthly={isMonthly2}
          />
        ))}
      </div>
      <div className="selected-plan">
        {/* You have selected {selectedPlan.title} ({selectedPlan.text}) */}
        <span className={isMonthly2 ? "choice" : "not-selected"}>Monthly</span>
        <InputSwitch
          className="button-switch"
          checked={!isMonthly2}
          onChange={() => updateMonthly(!isMonthly2)}
        />
        <span className={!isMonthly2 ? "choice" : "not-selected"}>Yearly</span>
      </div>
    </div>
  );
};
