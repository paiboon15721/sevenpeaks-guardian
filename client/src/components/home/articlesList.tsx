import { Stack } from '@chakra-ui/core'
import React from 'react'
import { Articles } from '../../repositories/createGuardianApis'
import ArticleItem from './articleItem'

interface Props {
  articles: Articles
}

const Comp: React.FC<Props> = props => {
  const { articles } = props
  return (
    <Stack direction={['column', 'row']} spacing="18px">
      {articles.results.map(article => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </Stack>
  )
}

export default Comp
