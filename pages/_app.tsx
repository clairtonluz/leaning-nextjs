import "../styles/global.css";
import type { AppProps /*, AppContext */ } from "next/app";

export default ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
