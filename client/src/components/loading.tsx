import { Box, Skeleton, SimpleGrid } from '@chakra-ui/core'
import React from 'react'

interface Props {
  number: number
}

const Comp: React.FC<Props> = ({ number }) => (
  <SimpleGrid columns={[1, null, 2]} spacing="18px">
    {[...Array(number).keys()].map(v => (
      <Box p="5" key={v} borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Skeleton height="14rem" />
        <Skeleton height="1rem" mt={4} mb={3} width="50%" />
        <Skeleton height="1rem" />
        <Skeleton height="1rem" mt={2} mb={2} width="90%" />
        <Skeleton height="1rem" width="40%" />
        <Skeleton height="1rem" mt={3} width="20%" />
        <Skeleton height="1rem" mt={2} width="30%" />
      </Box>
    ))}
  </SimpleGrid>
)

export default Comp
