import { type AppType } from "next/app";
import Head from "next/head";
import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Cristiane Maragno</title>
        <meta name="description" content="Digital garden and portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
};

export default api.withTRPC(MyApp);
