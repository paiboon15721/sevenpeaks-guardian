import React from 'react'
import { Box, Badge, chakra, Button } from '@chakra-ui/core'
import { ExternalLinkIcon, ArrowBackIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { Article } from '../../repositories/createGuardianApis'

interface Props {
  article: Article
}

const Comp: React.FC<Props> = ({ article }) => (
  <Box maxW="4xl" overflow="hidden">
    <NextLink href="/">
      <Button leftIcon={<ArrowBackIcon />} variant="link" my="3" size="lg">
        Back
      </Button>
    </NextLink>
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

      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
        <chakra.a href={article.webUrl} target="_blank">
          {article.webTitle} <ExternalLinkIcon mx="2px" />
        </chakra.a>
      </Box>
      <Box>{article.webPublicationDate}</Box>
    </Box>
  </Box>
)

export default Comp
