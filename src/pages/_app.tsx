import { DefaultSeo } from 'next-seo'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'src/ui/theme'
import seo from 'src/seo.json'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...seo} />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
