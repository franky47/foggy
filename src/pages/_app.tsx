import { DefaultSeo } from 'next-seo'
import seo from 'src/seo.json'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
