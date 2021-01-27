import React from 'react'
import {
  Box,
  Text,
  Container,
  OrderedList,
  ListItem,
  Flex,
  Heading,
  Code,
} from '@chakra-ui/react'
import { IconButtonOutgoingLink, OutgoingLink, Svg } from '@47ng/chakra-next'
import { FiGithub } from 'react-icons/fi'

export default function Home() {
  return (
    <Container as="main" maxW="6xl" mt={[2, null, 12]}>
      {/* -- Nav -- */}
      <Flex as="nav" alignItems="center">
        <Heading as="h1" fontSize="2xl" my={0}>
          🌁 Foggy
        </Heading>
        <IconButtonOutgoingLink
          ml="auto"
          icon={<FiGithub />}
          aria-label="GitHub"
          href="https://github.com/franky47/foggy"
          size="lg"
          variant="ghost"
          rounded="full"
        />
      </Flex>
      {/* -- Hero -- */}
      <Heading
        as="h2"
        textAlign="center"
        fontSize={['5xl', null, '6xl']}
        lineHeight={[1.1, null, 1.27]}
        p={2}
        fontWeight="extrabold"
        mt={[12, null, 24]}
      >
        Generate{' '}
        <Text
          as="span"
          bgGradient="linear(to-r, purple.500,pink.500)"
          bgClip="text"
        >
          OpenGraph
        </Text>{' '}
        images with{' '}
        <Text
          as="span"
          bgGradient="linear(to-r, teal.500,cyan.500)"
          bgClip="text"
        >
          Figma
        </Text>{' '}
        in one click
      </Heading>
      <Box as="section" maxW="3xl" mx="auto">
        <Svg
          viewBox="0 0 33.8556496484357 181.2801757144611"
          width={[6, null, 8]}
          // height="181px"
          mx="auto"
        >
          <g>
            <g transform="translate(13.763652597694545 9.829492691531755) rotate(0 3.1641722265233057 80.8105951656988)">
              <path
                d="M0.07507966496050367 0.1705073084682227 C1.8112825490325426 9.88382893603147, 10.731785761183694 41.17787296641742, 10.091997050741156 57.9730638433904 C9.452208340298618 74.76825472036339, -2.946266550881319 83.69538270704962, -3.763652597694727 100.9416525703061 C-4.581038644508135 118.18792243356259, 3.9242389489661793 151.1345390924322, 5.187680769860708 161.45068302292935"
                stroke="#000000"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="12 8"
              ></path>
            </g>
            <g transform="translate(13.763652597694545 9.829492691531755) rotate(0 3.1641722265233057 80.8105951656988)">
              <path
                d="M-9.725936511546163 137.18227202992534 C-6.136913916612028 141.06962840695664, -1.3104885809268207 150.80612934499936, 3.3995849920063845 160.27939021688513"
                stroke="#000000"
                strokeWidth="1.5"
                fill="none"
              ></path>
            </g>
            <g transform="translate(13.763652597694545 9.829492691531755) rotate(0 3.1641722265233057 80.8105951656988)">
              <path
                d="M10.455731329635992 133.4647075672652 C8.527704218097105 138.37920795212176, 7.846586462695859 149.13022595749092, 3.3995849920063845 160.27939021688513"
                stroke="#000000"
                strokeWidth="1.5"
                fill="none"
              ></path>
            </g>
          </g>
        </Svg>
        <OrderedList spacing={8} fontSize="lg" fontWeight="semibold">
          <ListItem>
            Copy your Figma frame URL:
            <br />
            <Box as="video" rounded="md" controls loop mt={2} mb={4}>
              <source src="/figma-link-demo.webm" type="video/webm" />
              <source src="/figma-link-demo.mp4" type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
              <br />
              You can copy the link by right-clicking the frame &gt; Copy/Paste
              &gt; Copy link
            </Box>
          </ListItem>
          <ListItem>
            Prepend it with:
            <br />
            <Code fontWeight="normal">
              https://usefoggy.vercel.app/api/og?url=
            </Code>
          </ListItem>
          <ListItem>
            Use it for your OpenGraph image URL:
            <br />
            <Box as="pre" overflowX="auto" mt={1} fontWeight="normal">
              <Code py={1} px={2} w="100%">
                {`<meta
  property="og:image"
  content="https://usefoggy.vercel.app/api/og?url={yourFigmaURLHere}"
/>`}
              </Code>
            </Box>
          </ListItem>
          <ListItem>
            That's it ! The image will follow your design updates.
          </ListItem>
        </OrderedList>
      </Box>
      <Text textAlign="center" mt={24}>
        I'm building this micro-SaaS in the open,{' '}
        <OutgoingLink
          href="https://twitter.com/fortysevenfx/status/1354351589000171521"
          textDecor="underline"
        >
          follow my progress on Twitter
        </OutgoingLink>
        .
      </Text>
      <Box as="footer" fontSize="sm" color="gray.500" my={8}>
        <Text textAlign="center">
          Made with ❤️ by{' '}
          <OutgoingLink href="https://francoisbest.com" textDecor="underline">
            François Best
          </OutgoingLink>
        </Text>
      </Box>
    </Container>
  )
}
