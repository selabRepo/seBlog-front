import Document, { Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  render() {
    return (
      <html>
        <Head />
        <link href="/static/css/reset.css" rel="stylesheet" />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default CustomDocument
