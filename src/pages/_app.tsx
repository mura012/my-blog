import { AppProps } from "node_modules/next/app";
import "src/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
