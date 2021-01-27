import React from 'react'
import { Box, Text, Container, Flex, Heading, HStack } from '@chakra-ui/react'
import { IconButtonOutgoingLink, OutgoingLink } from '@47ng/chakra-next'
import { FiGithub } from 'react-icons/fi'

export default function Home() {
  return (
    <Container as="main" maxW="6xl" my={12}>
      {/* -- Nav -- */}
      <Flex as="nav" my={8}>
        <Heading as="h1" fontSize="2xl">
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
        // bgGradient="linear(to-l, #7928CA,#FF0080)"
        //bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        my={24}
      >
        Generate OpenGraph images with Figma in one click
      </Heading>
      <Box as="p" textAlign="center">
        I'm building this micro-SaaS in the open,{' '}
        <OutgoingLink
          href="https://twitter.com/fortysevenfx/status/1354351589000171521"
          textDecor="underline"
        >
          follow my progress on Twitter
        </OutgoingLink>
        .
      </Box>
      <Flex as="footer" fontSize="sm" color="gray.500" my={8}>
        <Text>
          Made with ❤️ by{' '}
          <OutgoingLink href="https://francoisbest.com" textDecor="underline">
            François Best
          </OutgoingLink>
        </Text>
        <Text ml="auto">Copyright © François Best 2021</Text>
      </Flex>
    </Container>
  )
}
