// pages/_document.js
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";

const getCache = createEmotionCache();

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
   
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  // You can consider splitting into two different render page functions based on the environment
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        (
          <CacheProvider value={getCache}>
            <App {...props} />
          </CacheProvider>
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = createEmotionServer(getCache).extractCritical(
    initialProps.html
  );

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      emotionStyles.styles,
    ],
  };
};

export default MyDocument;
