import {z} from "zod";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import TextInput from "dotenv/components/TextInput";
import {api} from "dotenv/utils/api";

export const registerSchema = z.object({
    email: z.string().email({ message: "Il faut mettre un email "}),
    password: z.string().min(6),
    rePassword: z.string().min(6)
}).refine((data) => data.password === data.rePassword, {
    path: ["rePassword"],
    message: "Les mots de passe doivent être les mêmes"
});

export type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {

    const methods = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    const handleSubmit = methods.handleSubmit;
    const addUser = api.auth.registerUser.useMutation();

    function submit(data: RegisterFormData) {
        addUser.mutate(data, {
            onSuccess() {
                console.log("utilisateur créé");
            }
        });
    }

    return (
        <>
            <FormProvider {...methods} >
                {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                <form onSubmit={handleSubmit(submit)}>
                    <TextInput label={"Email"} name={"email"} type={"email"} />
                    <TextInput label={"Mot de passe"} name={"password"} type={"password"} />
                    <TextInput label={"Confirmation du mot de passe"} name={"rePassword"} type={"password"} />
                    <button type={"submit"}>Submit</button>
                </form>
            </FormProvider>
        </>
    );
}