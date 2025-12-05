import { Button } from "@/components/ui/button";

type ButtonProps = {
  type: "button" | "submit" | "reset";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
};

export const FormButton = ({ type, onClick, name }: ButtonProps) => {
  return (
    <Button
      className="text-xl p-5"
      variant="outline"
      type={type}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};
