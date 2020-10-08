import React from 'react'
import NextLink from 'next/link'
import {
  chakra,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/core'
import { FaMoon, FaSun } from 'react-icons/fa'

const HeaderContent = () => {
  const { toggleColorMode: toggleMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
      <NextLink href="/" passHref>
        <chakra.a display="block" aria-label="Back to homepage">
          <Heading size="lg">The Guardian</Heading>
        </chakra.a>
      </NextLink>
      <Flex maxW="720px" align="center" color="gray.400">
        <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Switch to ${text} mode`}
          variant="ghost"
          color="current"
          ml="3"
          onClick={toggleMode}
          icon={<SwitchIcon />}
        />
      </Flex>
    </Flex>
  )
}

const Header = () => {
  const bg = useColorModeValue('white', 'gray.800')

  return (
    <chakra.header
      pos="fixed"
      top="0"
      zIndex="1"
      bg={bg}
      left="0"
      right="0"
      borderBottomWidth="1px"
      width="full"
    >
      <chakra.div height="4.5rem" mx="auto" maxW="1200px">
        <HeaderContent />
      </chakra.div>
    </chakra.header>
  )
}

export default Header
