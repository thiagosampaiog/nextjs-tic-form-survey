import { Input } from "@/components/ui/input";

type InputProps = {
  label: string;
  value: string;
  name: string;
  type: string;
  minLength?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormInput = ({
  onChange,
  value,
  label,
  name,
  type,
  minLength,
}: InputProps) => {
  return (
    <div className="text-gray-500 flex flex-col gap-1 justify-center min-w-50">
      <label htmlFor={name}>{label}</label>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        minLength={minLength}
        required
      />
    </div>
  );
};
