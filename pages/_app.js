import '@/styles/global.css';
import { ThemeProvider } from 'next-themes';

/**
 * @param {Object} props
 * @param {Object} props.pageProps
 * @param {React.ReactChild | undefined} props.Component
 */
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
