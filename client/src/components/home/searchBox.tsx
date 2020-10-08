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
import { useArticles } from '../../stores/articles'

interface Props extends InputGroupProps {
  loading: boolean
}

const Comp: React.FC<Props> = props => {
  const {
    dispatch,
    state: { orderBy },
  } = useArticles()

  const toggleNewestFirst = () =>
    dispatch({
      type: 'TOGGLE_ORDER_BY',
    })

  return (
    <InputGroup {...props}>
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
          isLoading={props.loading}
        >
          {`${orderBy === 'oldest' ? 'Newest' : 'Oldest'} Frist`}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default Comp
