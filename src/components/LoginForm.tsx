import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Input from "dotenv/components/formInputs/Input";
import { useState } from "react";
import { redirect } from "next/navigation";
import GitHubConnectButton from "dotenv/components/GitHubConnextButton";
import { FormattedMessage } from "react-intl";

export const loginSchema = z.object({
  email: z.string().email({ message: "Il faut mettre un email " }),
  password: z.string().min(6), //TODO: add regex
});

export type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [error, setError] = useState<boolean>(false);

  const methods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const handleSubmit = methods.handleSubmit;

  async function submit(data: LoginFormData) {
    await signIn("credentials", {
      ...data,
      callbackUrl: "/",
      onSuccess: () => {
        setError(false);
        redirect("/");
      },
      onError: () => {
        setError(true);
      },
    });
  }

  return (
    <>
      <FormProvider {...methods}>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form onSubmit={handleSubmit(submit)} className="mx-auto mb-0 mt-8 max-w-md space-y-4 text-left">
          <Input label={"email"} name={"email"} type={"email"} />
          <Input label={"password"} name={"password"} type={"password"} />

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              <FormattedMessage id={"forms.inputs.labels.no_account"} />
              <Link className="pl-2 underline" href="/auth/register">
                <FormattedMessage id={"forms.buttons.register"} />
              </Link>
            </p>

            <GitHubConnectButton />
            <button type="submit" className="inline-block rounded-lg bg-primary-600 px-5 py-3 text-sm font-medium text-white">
              <FormattedMessage id={"forms.buttons.login"} />
            </button>

            {error && <p className={"text-red-500"}> Cet utilisateur n&apos;existe pas </p>}
          </div>
        </form>
      </FormProvider>
    </>
  );
}
