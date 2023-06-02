import LoginForm from "dotenv/components/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img alt="Night" src="/dotease_logo_fullblue.png" className="absolute inset-0 h-full w-full object-cover opacity-80" />
          <div className="hidden lg:relative lg:block lg:p-12">
            <Link className="block text-white" href="/">
              <span className="sr-only">Home</span>
            </Link>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">Welcome to .ease ✨</h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>
        </section>

        <section aria-label="main section" className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <Link className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20" href="/">
                <span className="sr-only">Home</span>
                <img className={"h-10 sm:h-12"} src="/dotease_logo_smol.svg" alt="logo dotease" />
              </Link>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">Welcome to .ease ✨</h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>
            <div className={"lg:w-[40vw] md:w-[60vw] sm:w-[80vw]"}>
              <LoginForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
