/** @jsx h */
import { h } from "preact";
import { AppProps } from "fresh/server.ts";
import { Head } from "fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <div>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" sizes="32x32" /> */}
        {/* <link rel="icon" href="/logo.svg" type="image/svg+xml" /> */}

        {/* <meta name="twitter:site" content="@deno_land" /> */}
        {/* <meta name="twitter:creator" content="@deno_land" /> */}
        <meta name="twitter:title" content="Luke Shay" />
        <meta
          name="twitter:description"
          content="Software Engineer II at Hy-Vee that enjoys building cutting-edge web apps with new technologies."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Luke Shay" />
        <meta property="og:title" content="Luke Shay" />
        <meta
          property="og:description"
          content="Software Engineer II at Hy-Vee that enjoys building cutting-edge web apps with new technologies."
        />
        <meta
          property="og:image"
          content="https://www.gravatar.com/avatar/c57099d7997c3af5a04728e920d8e243.png?s=2048"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lukeshay.com/" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Luke Shay, Software, Software Engineer, Hy-Vee, Development, JavaScript, TypeScript, Deno, AWS, Amazon Web Services, GCP, Google Cloud Platform"
        />
        {/* <link rel="stylesheet" href="/fonts/inter/inter.css" /> */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* <link rel="stylesheet" href="/app.css" /> */}
        <link rel="stylesheet" href="/gfm.css" />
      </Head>
      <Component />
    </div>
  );
}
