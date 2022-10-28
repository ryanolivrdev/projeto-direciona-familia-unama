import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt_br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#121214" />
        <meta name="color-scheme" content="dark" />

        <meta name="author" content="Ryan Oliveira" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
