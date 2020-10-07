import { Box } from '@chakra-ui/core'
import React from 'react'
import Header from './header'

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box pt={3} px={5} mt="5.5rem" mx="auto" maxW="4xl" minH="80vh">
        {children}
      </Box>
    </Box>
  )
}

export default Layout
