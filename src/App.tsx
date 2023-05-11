import AddonForm from "./components/addonForm/AddonForm";
import FinishForm from "./components/finishForm/FinishForm";
import InfoForm from "./components/infoForm/InfoForm";
import PlanForm from "./components/planForm/PlanForm";
import { useMultistepForm } from "./hooks/useMultistepForm";
import "./app.scss";
import { FormEvent, useState } from "react";
import { AddOns, Data, Plans } from "./tools/types.js";
import { INITIAL_INFOS_DATA, PLANS_DATA, ADDONS_DATA } from "./tools/datas.js";

function App() {
  const [infosData, setInfosData] = useState(INITIAL_INFOS_DATA);
  const [selectedPlan, setSelectedPlan] = useState(PLANS_DATA[0]);
  const [isMonthly, setIsMonthly] = useState(true);
  const [isLabelSelected, setIsLabelSelected] = useState(false);
  const [newAddOns, setNewAddOns] = useState<AddOns[]>([]);

  const updateMonthly = () => {
    setIsMonthly(!isMonthly);
  };
  const updateFields = (fields: Partial<Data>) => {
    setInfosData((prev) => {
      return { ...prev, ...fields };
    });
  };
  const handlePlanSelect = (plan: Plans) => {
    console.log(plan);
    setSelectedPlan(plan);
  };

  const addOrRemove = (name: AddOns, event: any) => {
    const newAddons = [...newAddOns];
    const index = newAddons.indexOf(name);
    console.log("eeeeee : ", event);
    if (event.target.checked) {
      setIsLabelSelected(true);
    }
    if (index === -1) {
      newAddons.push(name);
    } else {
      newAddons.splice(index, 1);
    }
    setNewAddOns(newAddons);
  };

  const { step, next, isFirstStep, isLastStep, back, displaySteps } =
    useMultistepForm([
      <InfoForm {...infosData} updateFields={updateFields} />,
      <PlanForm
        plans={PLANS_DATA}
        handlePlanSelect={handlePlanSelect}
        selectedPlan={selectedPlan}
        isMonthly={isMonthly}
        updateMonthly={updateMonthly}
      />,
      <AddonForm
        addOns={ADDONS_DATA}
        addOrRemove={addOrRemove}
        newAddOns={newAddOns}
        isLabelSelected={isLabelSelected}
        isMonthly={isMonthly}
      />,
      <FinishForm selectedPlan={selectedPlan} addOns={newAddOns} />,
    ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    next();
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <div className="form-header-background">
          <div className="form-header-steps">{displaySteps()}</div>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        {step}
        <div className="form-buttons">
          {!isFirstStep && (
            <button className="button-back" onClick={back} type="button">
              Go Back
            </button>
          )}
          <button className="button-next" type="button" onClick={next}>
            {isLastStep ? "Confirm" : "Next Step"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
