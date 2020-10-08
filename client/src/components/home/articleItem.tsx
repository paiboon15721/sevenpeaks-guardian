import React from 'react'
import { Box, Badge, Flex, Text, Image, Center } from '@chakra-ui/core'
import NextLink from 'next/link'
import { MdStar } from 'react-icons/md'
import { Article } from '../../repositories/createGuardianApis'
import dateHumanize from '../../utils/dateHumanize'

interface Props {
  article: Article
}

const Comp: React.FC<Props> = ({ article }) => (
  <Box p="5" borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Center>
      <Image borderRadius="md" src={article.fields.thumbnail} />
    </Center>
    <Flex align="baseline" mt={4} mb={2}>
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
    </Flex>

    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
      <NextLink href={`/articles/${article.id}`}>
        {article.fields.headline}
      </NextLink>
    </Box>
    <Flex mt={2} align="center">
      <Box as={MdStar} color="orange.400" />
      <Text ml={1} fontSize="sm">
        <b>{article.fields.starRating ? article.fields.starRating : 'N/A'}</b>
      </Text>
    </Flex>
    <Box mt={2} fontSize="sm">
      {dateHumanize(article.webPublicationDate)}
    </Box>
  </Box>
)

export default Comp
