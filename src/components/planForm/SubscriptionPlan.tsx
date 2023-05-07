import { InputSwitch } from "primereact/inputswitch";
import { PlanCard } from "./card/planCard.js";
import { Plans } from "../../tools/types.js";

type Props = {
  plans: Plans[];
  handlePlanSelect: (plan: Plans) => void;
  selectedPlan: Plans;
  isMonthly: boolean;
  updateMonthly: (parameter: boolean) => void;
};

export const SubscriptionPlans = ({
  plans,
  handlePlanSelect,
  selectedPlan,
  isMonthly,
  updateMonthly,
}: Props) => {
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
          onChange={() => updateMonthly(!isMonthly)}
        />
        <span className={!isMonthly ? "choice" : "not-selected"}>Yearly</span>
      </div>
    </div>
  );
};
