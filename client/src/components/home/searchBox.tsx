import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  InputGroupProps,
  Button,
} from '@chakra-ui/core'
import { SearchIcon } from '@chakra-ui/icons'
import React from 'react'

interface Props extends InputGroupProps {
  newestFirst: boolean
  toggleNewestFirst: () => void
}

const Comp: React.FC<Props> = ({ newestFirst, toggleNewestFirst, ...rest }) => {
  return (
    <InputGroup {...rest}>
      <InputLeftElement
        pointerEvents="none"
        color="gray.300"
        fontSize="1.2em"
        children={<SearchIcon />}
      />
      <Input placeholder="Search articles" />
      <InputRightElement width="8rem">
        <Button
          h="1.75rem"
          size="sm"
          colorScheme="teal"
          onClick={toggleNewestFirst}
        >
          {`${newestFirst ? 'Newest' : 'Oldest'} Frist`}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default Comp
