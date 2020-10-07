import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/core'
import React from 'react'

interface Props {
  message: string
}

const Error: React.FC<Props> = props => (
  <Alert status="error">
    <AlertIcon />
    <AlertTitle>{props.message}</AlertTitle>
  </Alert>
)

export default Error
