import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { theme } from 'src/ui/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            type="image/svg+xml"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2290%22>🌁</text></svg>"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
          {process.env.NODE_ENV === 'production' &&
            !!process.env.NEXT_PUBLIC_CHIFFRE_PUBLIC_KEY &&
            !!process.env.NEXT_PUBLIC_CHIFFRE_PROJECT_ID && (
              <>
                <script
                  id="chiffre:analytics-config"
                  type="application/json"
                  dangerouslySetInnerHTML={{
                    __html: `{
                "publicKey": "${process.env.NEXT_PUBLIC_CHIFFRE_PUBLIC_KEY}",
                "pushURL": "https://push.chiffre.io/event/${process.env.NEXT_PUBLIC_CHIFFRE_PROJECT_ID}"
              }`,
                  }}
                />
                <script
                  src={`${process.env.NEXT_PUBLIC_CHIFFRE_CDN_DOMAIN}/analytics.js`}
                  crossOrigin="anonymous"
                  async
                ></script>
                <noscript>
                  <img
                    src={`https://push.chiffre.io/noscript/${process.env.NEXT_PUBLIC_CHIFFRE_PROJECT_ID}`}
                    alt="Chiffre.io anonymous visit counting for clients without JavaScript"
                    crossOrigin="anonymous"
                  />
                </noscript>
              </>
            )}
        </body>
      </Html>
    )
  }
}
