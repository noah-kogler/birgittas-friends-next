import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html prefix="og: https://ogp.me/ns#" className="h-full">
        <Head />
        <body className="h-full p-0 bg-black">
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
