import DefaultTemplate from "../components/templates/Default/Default";

import "../styles/variables.scss";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <DefaultTemplate>
      <Component {...pageProps} />
    </DefaultTemplate>
  );
}

export default MyApp;
