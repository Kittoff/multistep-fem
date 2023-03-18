import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function displaySteps() {
    return steps.map((_, index) => {
      return (
        <span className={currentStepIndex === index ? "is-active" : ""}>
          {index + 1}
        </span>
      );
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    goTo,
    displaySteps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex >= steps.length - 1,
    next,
    back,
  };
}
