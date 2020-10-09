import { SimpleGrid, Skeleton } from '@chakra-ui/core'
import React from 'react'

interface Props {}

const Comp: React.FC<Props> = () => (
  <SimpleGrid mt="24px" columns={[1, null, 2]} spacing="8px">
    {[...Array(20).keys()].map(v => (
      <Skeleton key={v} height="20px" />
    ))}
  </SimpleGrid>
)

export default Comp
