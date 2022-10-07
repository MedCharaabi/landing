import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { IntlProvider } from "react-intl";

import fr from "../src/lang/fr.json";
import en from "../src/lang/en.json";

// import { initGA, logPageView } from 'analytics';
// Load DM Sans typeface
import 'typeface-dm-sans';

// Load other package css file
import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';

import '../styles/globals.css'
import '../styles/style.css'



export default function CustomApp({ Component, pageProps }) {
  const messages = {
    en,
    fr,
  };
  const { locale } = useRouter();




  useEffect(() => {
    // initGA();
    // logPageView();
    // Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return (
    <IntlProvider locale={locale} messages={messages[locale]} >


      <Component {...pageProps} />

    </IntlProvider>
  );
}
