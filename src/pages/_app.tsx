import { AppProps } from "node_modules/next/app";
import { Footer } from "src/components/Footer/Footer";
import "src/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="global">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
