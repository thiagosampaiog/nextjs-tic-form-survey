import { Button } from "@/components/ui/button";
import { QuestionInput } from "../QuestionInput";
import { questions } from "../../data/questions";
import { StepProps } from "../../interface/stepProps";

export const Step = ({ buttonType, buttonText }: StepProps) => {
  return (
    <>
      <h1>{}</h1>
      {questions.map((step) => (
        <QuestionInput
          key={step.fields.map((field) => field.id).join("-")}
          id={step.fields.map((field) => field.id).join("-")}
          questionText={step.fields.map((field) => field.id).join(", ")}
        />
      ))}
      <Button type={buttonType}>{buttonText}</Button>
    </>
  );
};
