import Theme from '../styles/theme';
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id='${process.env.GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS}', 
            );
                `}
      </Script>
    
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 