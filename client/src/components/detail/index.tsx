import React from 'react'
import { Box, Center, Image } from '@chakra-ui/core'
import { Article } from '../../repositories/createGuardianApis'
import ArticleInfo from './articleInfo'
import ArticleBody from './articleBody'

interface Props {
  article: Article
}

const Comp: React.FC<Props> = ({ article }) => (
  <>
    <Center my="6">
      <Image borderRadius="md" src={article.fields.thumbnail} />
    </Center>
    <Box>
      <ArticleInfo article={article} />
      {article.fields.body && <ArticleBody body={article.fields.body} />}
    </Box>
  </>
)

export default Comp
