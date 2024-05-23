import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet' />
        <Script id="zoho-salesiq" strategy="beforeInteractive">
        {`
          window.$zoho = window.$zoho || {};
          $zoho.salesiq = $zoho.salesiq || {ready: function(){}};
        `}
      </Script>
      <Script
        id="zsiqscript"
        src="https://salesiq.zohopublic.in/widget?wc=siq3ad3ce9b768befe69aed819e8b165c7dc68c1542dee4f7208e8a48b8210d3fb4"
        strategy="lazyOnload"
      />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
