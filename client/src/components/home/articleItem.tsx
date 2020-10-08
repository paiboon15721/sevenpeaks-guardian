import React from 'react'
import { Box, Badge } from '@chakra-ui/core'
import NextLink from 'next/link'
import { Article } from '../../repositories/createGuardianApis'
import dateHumanize from '../../utils/dateHumanize'

interface Props {
  article: Article
}

const Comp: React.FC<Props> = ({ article }) => (
  <Box maxW="4xl" borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Box p="6">
      <Box d="flex" alignItems="baseline">
        <Badge borderRadius="full" px="2" colorScheme="teal">
          {article.pillarName}
        </Badge>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          {article.sectionName} &bull; {article.type}
        </Box>
      </Box>

      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
        <NextLink href={`/articles/${article.id}`}>{article.webTitle}</NextLink>
      </Box>
      <Box>{dateHumanize(article.webPublicationDate)}</Box>
    </Box>
  </Box>
)

export default Comp
