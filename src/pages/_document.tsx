import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body
          style={{
            backgroundColor: '#fafafa',
            fontFamily: "'M PLUS 1p', sans-serif",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
