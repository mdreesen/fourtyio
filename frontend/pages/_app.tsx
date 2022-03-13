import 'bootstrap/dist/css/bootstrap.min.css';
import '/scss/_scss/main.scss';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
