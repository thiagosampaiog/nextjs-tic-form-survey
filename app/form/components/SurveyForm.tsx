"use client";

import { useState } from "react";
import { Step } from "./steps/Step";

export const SurveyForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: "",
  });

  return (
    <>
      <form>
        <div>Survey Form - Step {currentStep}</div>
        <Step
          buttonText={currentStep === 3 ? "submit" : "next"}
          buttonType={currentStep === 3 ? "submit" : "button"}
        />
      </form>
    </>
  );
};
