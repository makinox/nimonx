import '../styles/globals.css';
import '@makinox/makinox-ui/dist/index.css';
import '../styles/colors.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
