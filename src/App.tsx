import AddonForm from "./components/addonForm/AddonForm";
import FinishForm from "./components/finishForm/FinishForm";
import InfoForm from "./components/infoForm/InfoForm";
import PlanForm from "./components/planForm/PlanForm";
import { useMultistepForm } from "./hooks/useMultistepForm";
import "./app.scss";

function App() {
  const {
    currentStepIndex,
    steps,
    step,
    next,
    isFirstStep,
    isLastStep,
    back,
    displaySteps,
  } = useMultistepForm([
    <InfoForm />,
    <PlanForm />,
    <AddonForm />,
    <FinishForm />,
  ]);
  return (
    <div className="form-container">
      <div className="form-header">
        <div className="form-header-background">
          <div className="form-header-steps">{displaySteps()}</div>
        </div>
      </div>
      <form>
        {step}
        {!isFirstStep && (
          <button onClick={back} type="button">
            Go Back
          </button>
        )}
        <button type="button" onClick={next}>
          {isLastStep ? "Confirm" : "Next Step"}
        </button>
      </form>
    </div>
  );
}

export default App;
