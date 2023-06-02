import LoginForm from "dotenv/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
        <p className="mt-4 text-gray-500">
          Join the outstanding community of <b>.ease</b> and help millions of users to find the best way to learn accessibility on the web.
        </p>
        <LoginForm />
      </div>
    </div>
  );
}
