import Head from "next/head";
import Header from "dotenv/components/Header";
import Link from "next/link";
import { FormattedMessage, IntlProvider } from "react-intl";
import { useAtom } from "jotai";
import { languageAtom } from "dotenv/atoms/atoms";
import { messages } from "dotenv/pages/_app";

function ErrorPage() {
  const [currentLanguage] = useAtom(languageAtom);

  return (
    <>
      <Head>
        <title>Error - 404</title>
      </Head>
      <Header />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/*@ts-ignore*/}
      <IntlProvider locale={currentLanguage} messages={messages[currentLanguage] as never}>
        <ErrorContent />
      </IntlProvider>
    </>
  );
}

function ErrorContent() {
  return (
    <main className="grid h-screen px-4 bg-white place-content-center">
      <article className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <FormattedMessage id={"pages.error.oups"} />
        </p>

        <p className="mt-4 text-gray-500">
          <FormattedMessage id={"pages.error.not_found"} />
        </p>

        <Link href={"/"}>
          <button className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-primary-600 rounded hover:bg-primary-700 focus:outline-none focus:ring">
            <FormattedMessage id={"pages.error.back_home"} />
          </button>
        </Link>
      </article>
    </main>
  );
}

export default ErrorPage;
