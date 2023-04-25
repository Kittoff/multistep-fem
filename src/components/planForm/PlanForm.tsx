import React from "react";
import FormWrapper from "../formWrapper/FormWrapper.js";
import { SubscriptionPlans } from "./card/planCard.js";

const PlanForm = ({
  plans,
  handlePlanSelect,
  selectedPlan,
  isMonthly2,
  updateMonthly,
}: any) => {
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
          isMonthly2={isMonthly2}
          updateMonthly={updateMonthly}
        />
      </div>
    </FormWrapper>
  );
};

export default PlanForm;
