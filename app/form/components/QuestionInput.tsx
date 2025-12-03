import { Input } from "@/components/ui/input";

interface questionInputProps {
  question: string;
  questionText: string;
}

export const QuestionInput = ({
  question,
  questionText,
}: questionInputProps) => {
  return (
    <>
      <label htmlFor={question}>{questionText}</label>
      <Input type="text" id={question} name={question} />
    </>
  );
};
