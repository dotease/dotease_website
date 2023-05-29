import {FormProvider, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import TextInput from "dotenv/components/TextInput";
import {signIn} from "next-auth/react";

export const loginSchema = z.object({
    email: z.string().email({ message: "Il faut mettre un email "}),
    password: z.string().min(6), //TODO: add regex
});

export type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
    const methods = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const handleSubmit = methods.handleSubmit;

    async function submit(data: LoginFormData) {
        await signIn("credentials", {
            ...data,
            callbackUrl: "/",
        });
    }

    return (
      <>
        <FormProvider {...methods}>
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <form onSubmit={handleSubmit(submit)}>
                <TextInput label={"Votre email"} name={"email"} type={"email"} />
                <TextInput label={"Votre mot de passe"} name={"password"} type={"password"} />

                <button type={"submit"}>Log In</button>
            </form>
        </FormProvider>
      </>
    );
}