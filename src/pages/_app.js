import Theme from '../styles/theme';
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
    
    
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 