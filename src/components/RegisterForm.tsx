import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "dotenv/utils/api";
import Input from "dotenv/components/formInputs/Input";
import { useEffect, useState } from "react";
import Link from "next/link";
import GitHubConnectButton from "dotenv/components/GitHubConnextButton";

export const registerSchema = z
  .object({
    email: z.string().email({ message: "You must put an email" }),
    last_name: z.string().min(2, { message: "The last name must have more than 2 characters" }).optional(),
    first_name: z.string().min(2, { message: "The first name must have more than 2 characters" }).optional(),
    username: z.string().min(2, { message: "The name must have more that 2 characters" }),
    password: z.string().min(6, { message: "The password must have at least 6 characters" }),
    rePassword: z.string().min(6, { message: "The password confirmation must have at least 6 characters" }),
  })
  .refine(data => data.password === data.rePassword, {
    path: ["rePassword"],
    message: "Both passwords must be the same",
  });

export type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const [error, setError] = useState<boolean>(false);
  const methods = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const handleSubmit = methods.handleSubmit;
  const addUser = api.auth.registerUser.useMutation();

  function submit(data: RegisterFormData) {
    addUser.mutate(data, {
      onSuccess() {
        window.location.href = "/auth/login";
        setError(false);
      },
      onError() {
        setError(true);
      },
    });
  }

  useEffect(() => {
    console.log("rerender occurs");
  });

  return (
    <FormProvider {...methods}>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleSubmit(submit)} className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <Input label={"Last Name"} name={"name"} type={"text"} />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <Input label={"First Name"} name={"surname"} type={"text"} />
        </div>

        <div className="col-span-6">
          <Input label={"Email"} name={"email"} type={"email"} />
        </div>

        <div className="col-span-6">
          <Input label={"Username"} name={"username"} type={"text"} />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <Input label={"Password"} name={"password"} type={"password"} />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <Input label={"Password Confirmation"} name={"rePassword"} type={"password"} />
        </div>

        <div className="mt-4 col-span-6">
          <p className="text-sm text-gray-500">
            By creating an account, you agree to our
            <Link href="/" className="mx-2 text-gray-700 underline">
              terms and conditions
            </Link>
            and
            <Link href="/" className="ml-2 text-gray-700 underline">
              privacy policy
            </Link>
            .
          </p>
        </div>

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button className="inline-block shrink-0 rounded-md border border-primary-700 bg-primary-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-primary-800 focus:outline-none focus:ring active:text-blue-500">
            Create an account
          </button>

          <GitHubConnectButton />

          <p className="mt-4 text-sm text-gray-500 sm:mt-0">
            Already have an account?
            <Link href="/auth/login" className="pl-2 text-gray-700 underline">
              Log in
            </Link>
            .
          </p>

          {error && <p className="mt-4 text-sm text-red-500 sm:mt-0">An error occurred while creating the account</p>}
        </div>
      </form>
    </FormProvider>
  );
}
