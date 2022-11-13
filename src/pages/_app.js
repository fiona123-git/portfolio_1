import Theme from '../styles/theme';
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id='id=G-VMP80WQKMB`}
      />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'id=G-VMP80WQKMB', 
            );
                `}
      </Script>
      
    
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 