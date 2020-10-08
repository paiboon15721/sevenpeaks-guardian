import { SimpleGrid } from '@chakra-ui/core'
import React from 'react'
import { Article } from '../../repositories/createGuardianApis'
import ArticleItem from './articleItem'

interface Props {
  articles: Article[]
}

const Comp: React.FC<Props> = props => {
  const { articles } = props
  return (
    <SimpleGrid columns={[1, null, 2]} spacing="18px">
      {articles.map(article => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </SimpleGrid>
  )
}

export default Comp
