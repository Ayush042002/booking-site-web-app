import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import '../app/globals.css'; // Corrected path

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;