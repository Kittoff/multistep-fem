import { AddOns, Plans } from "../../tools/types.js";
import FormWrapper from "../formWrapper/FormWrapper.js";

type Props = {
  selectedPlan: Plans;
  addOns: AddOns[];
};

const FinishForm = ({ selectedPlan, addOns }: Props) => {
  return (
    <FormWrapper
      title="Finishing up"
      description="Double-check everything looks OK before confirming."
    >
      <div>
        <h1>{selectedPlan.title}</h1>
        {addOns.map((addon) => (
          <h2 key={addon.title}>{addon.title}</h2>
        ))}
      </div>
    </FormWrapper>
  );
};

export default FinishForm;
