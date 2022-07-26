import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return <Component {...pageProps} />;
}

export default MyApp;
