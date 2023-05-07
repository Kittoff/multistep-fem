import React from "react";
import FormWrapper from "../formWrapper/FormWrapper.js";
import { Plans } from "../../tools/types.js";
import { SubscriptionPlans } from "./SubscriptionPlan.js";

type Props = {
  plans: Plans[];
  handlePlanSelect: (plan: Plans) => void;
  selectedPlan: Plans;
  isMonthly: boolean;
  updateMonthly: () => void;
};
const PlanForm = ({
  plans,
  handlePlanSelect,
  selectedPlan,
  isMonthly,
  updateMonthly,
}: Props) => {
  return (
    <FormWrapper
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <div>
        <SubscriptionPlans
          plans={plans}
          handlePlanSelect={handlePlanSelect}
          selectedPlan={selectedPlan}
          isMonthly={isMonthly}
          updateMonthly={updateMonthly}
        />
      </div>
    </FormWrapper>
  );
};

export default PlanForm;
