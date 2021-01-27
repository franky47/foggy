import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  // styles: {
  //   global: () => ({
  //     body: {
  //       position: 'static',
  //     },
  //   }),
  // },
  // components: {
  //   Alert: {
  //     variants: {
  //       'left-accent': (props: Dict) => {
  //         const { theme, colorScheme: c } = props
  //         const lightBg = getColor(theme, `${c}.100`, c)
  //         const darkBg = darken(`${c}.900`, 1)(theme)
  //         const bg = mode(lightBg, darkBg)(props)
  //         return {
  //           container: {
  //             bg,
  //           },
  //         }
  //       },
  //     },
  //   },
  // },
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
})
