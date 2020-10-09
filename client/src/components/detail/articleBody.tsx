import React from 'react'
import { Box } from '@chakra-ui/core'

interface Props {
  body: string
}

const Comp: React.FC<Props> = ({ body }) => (
  <Box mt="5" dangerouslySetInnerHTML={{ __html: body }} />
)

export default Comp
