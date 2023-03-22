import React from "react";
import FormWrapper from "../formWrapper/FormWrapper.js";
import { SubscriptionPlans } from "./card/planCard.js";

const PlanForm = () => {
  return (
    <FormWrapper
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <div>
        <SubscriptionPlans />
      </div>
    </FormWrapper>
  );
};

export default PlanForm;
