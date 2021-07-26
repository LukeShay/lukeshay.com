import Document, { Html, Head, Main, NextScript } from 'next/document';
import GoogleAnalytics from '@/components/GoogleAnalytics';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="icon" href="/static/favicons/favicon.ico" />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <GoogleAnalytics analyticsId={process.env.NEXT_PUBLIC_ANALYTICS_ID} />
        </Head>
        <body className="text-white bg-white dark:bg-black dark:text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
