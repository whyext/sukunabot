import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/logo.jpg" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="Moderasyon ve Eğlence Platformu'nda müziğin tadını kesintisiz çıkarmak için kendi çalma listelerinizi oluşturun ve 750'den fazla desteklenen ses platformunda dinlemeye başlayın."
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@SukunaBot" />
          <meta name="twitter:creator" content="@SukunaBot" />
          <meta property="og:url" content="https://sukunabotsite.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Sukuna Bot" />
          <link
            rel="icon"
            href="/img/logo2.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="Moderasyon ve Eğlence Platformu'nda müziğin tadını kesintisiz çıkarmak için kendi çalma listelerinizi oluşturun ve 750'den fazla desteklenen ses platformunda dinlemeye başlayın."
          />
          <meta property="og:image" content="/img/logo.jpg" />
          <meta property="og:image:alt" content="Sukuna Bot" />
          <meta property="og:locale" content="tr_TR" />
          <meta
            property="og:site_name"
            content="Sukuna Bot"
          />
          <meta name="theme-color" content="#087ddd" />
          <link rel="icon" href="/img/logo.jpg" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
