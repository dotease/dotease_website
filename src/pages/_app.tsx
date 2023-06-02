import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Atkinson_Hyperlegible } from 'next/font/google'
import { api } from "dotenv/utils/api";

import "dotenv/styles/globals.css";

const atkinson_Hyperlegible = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets:['latin']
})

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={atkinson_Hyperlegible.className}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
