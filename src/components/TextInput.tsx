import {useFormContext} from "react-hook-form";
import {ReactNode} from "react";

export interface TextInputProps {
    label: string;
    name: string;
    type: "email" | "password";
}

export default function TextInput({ label, name, type }: TextInputProps) {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className={"w-full h-full flex items-center justify-start"}>
            <label htmlFor={name}>{label}</label>
            <input id={name} type={type} {...register(name)}  />
            { errors[name] && <p className={"text-red-300 font-bold"}> { errors[name]?.message as ReactNode } </p> }
        </div>
    );
}