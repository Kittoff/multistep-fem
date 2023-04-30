import AddonForm from "./components/addonForm/AddonForm";
import FinishForm from "./components/finishForm/FinishForm";
import InfoForm from "./components/infoForm/InfoForm";
import PlanForm from "./components/planForm/PlanForm";
import { useMultistepForm } from "./hooks/useMultistepForm";
import "./app.scss";
import { FormEvent, useState } from "react";

const INITIAL_INFOS_DATA = {
  name: "",
  email: "",
  phone: "",
};

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
const addOns = [
  {
    title: "Online service",
    subtitle: "Access to multiplayer games",
  },
  {
    title: "Larger storage",
    subtitle: "Extra 1TB of cloud save",
  },
  {
    title: "Customizable profile",
    subtitle: "Custom theme on your profile",
  },
];
function App() {
  const [infosData, setInfosData] = useState(INITIAL_INFOS_DATA);
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [isMonthly, setIsMonthly] = useState(true);
  const [newAddOns, setNewAddOns] = useState<any>([]);

  const updateMonthly = () => {
    setIsMonthly(!isMonthly);
  };
  const updateFields = (fields: any) => {
    setInfosData((prev) => {
      return { ...prev, ...fields };
    });
  };
  const handlePlanSelect = (plan: any) => {
    setSelectedPlan(plan);
  };

  const addOrRemove = (name: any) => {
    const newStudents = [...newAddOns];
    const index = newStudents.indexOf(name);
    if (index === -1) {
      newStudents.push(name);
    } else {
      newStudents.splice(index, 1);
    }
    setNewAddOns(newStudents);
  };

  const { step, next, isFirstStep, isLastStep, back, displaySteps } =
    useMultistepForm([
      <InfoForm {...infosData} updateFields={updateFields} />,
      <PlanForm
        plans={plans}
        handlePlanSelect={handlePlanSelect}
        selectedPlan={selectedPlan}
        isMonthly2={isMonthly}
        updateMonthly={updateMonthly}
      />,
      <AddonForm
        addOns={addOns}
        addOrRemove={addOrRemove}
        newAddOns={newAddOns}
      />,
      <FinishForm />,
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
