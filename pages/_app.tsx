import type { AppProps } from "next/app";

import "../styles/style.css"
import "../styles/tailwind.css";



function MyApp({ Component, pageProps }: AppProps) {

  return (
   
      <div className="font-montserrat">
        <Component {...pageProps} />
      </div>
 
  );
}

export default MyApp;
