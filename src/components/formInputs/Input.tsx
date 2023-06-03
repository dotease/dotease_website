import { useFormContext } from "react-hook-form";
import { type ReactNode } from "react";

interface InputProps {
  label: string;
  name: string;
  type: "email" | "password" | "text" | "textbox";
  placeholder?: string;
}

function Input({ label, name, type, placeholder }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <label htmlFor={name} className="block text-xs font-medium text-gray-700">
        {label}
      </label>

      <div className={"mt-2"}>
        <input
          {...register(name)}
          type={type}
          id={name}
          placeholder={placeholder}
          className="mt-1 w-full rounded-md border-gray-200 focus:border-primary-800 shadow-sm sm:text-sm"
        />
        <div className={"w-full h-1"}>{errors[name] && <p className="text-red-500 text-xs">{errors[name]?.message as ReactNode}</p>}</div>
      </div>
    </>
  );
}

export default Input;
