import React from 'react'
import {
  Box,
  Badge,
  chakra,
  Button,
  Center,
  Image,
  Flex,
  Text,
} from '@chakra-ui/core'
import { MdStar } from 'react-icons/md'
import { ExternalLinkIcon, ArrowBackIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import dateHumanize from '../../utils/dateHumanize'
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
    <Center my="6">
      <Image borderRadius="md" src={article.fields.thumbnail} />
    </Center>
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

      <Box mt="2" fontWeight="semibold" as="h4" lineHeight="tight">
        <chakra.a href={article.webUrl} target="_blank">
          {article.webTitle} <ExternalLinkIcon mx="2px" />
        </chakra.a>
      </Box>
      <Flex mt={2} align="center">
        <Box as={MdStar} color="orange.400" />
        <Text ml={1} fontSize="sm">
          <b>{article.fields.starRating ? article.fields.starRating : 'N/A'}</b>
        </Text>
        <Box ml={5} fontSize="sm">
          {dateHumanize(article.webPublicationDate)}
        </Box>
      </Flex>

      {article.fields.body && (
        <Box mt="5" dangerouslySetInnerHTML={{ __html: article.fields.body }} />
      )}
    </Box>
  </Box>
)

export default Comp
