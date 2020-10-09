import React from 'react'
import { Box } from '@chakra-ui/core'

interface Props {
  body: string
}

const Comp: React.FC<Props> = ({ body }) => (
  <>
    <Box mt="5" dangerouslySetInnerHTML={{ __html: body }} />
    <style global jsx>{`
      .block {
        border: 1px solid #81e6d9;
        padding: 18px;
        margin-bottom: 1rem;
        border-radius: 1rem;
      }

      .block-time {
        margin-bottom: 0.5rem;
      }

      .block-title {
        margin-bottom: 0.5rem;
      }

      img {
        margin: 1rem 0;
      }

      ul {
        margin-left: 2rem;
      }
    `}</style>
  </>
)

export default Comp
