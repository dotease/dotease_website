import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "dotenv/utils/api";

import "dotenv/styles/globals.css";
import { IntlProvider } from "react-intl";

import frMessages from "dotenv/translations/fr.json";
import enMessages from "dotenv/translations/en.json";
import { flattenKeys } from "dotenv/translations/translator";
import { useAtom } from "jotai";
import { languageAtom } from "dotenv/atoms/atoms";

const messages = {
  fr: flattenKeys(frMessages),
  en: flattenKeys(enMessages),
  // falc: {
  //
  // }
  // de: {
  //
  // }
};

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
  const [currentLanguage] = useAtom(languageAtom);

  return (
    <SessionProvider session={session}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/*@ts-ignore*/}
      <IntlProvider locale={currentLanguage} messages={messages[currentLanguage] as never}>
        <Component {...pageProps} />
      </IntlProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
