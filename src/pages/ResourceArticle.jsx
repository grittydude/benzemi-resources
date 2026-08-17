import { useRouter } from '../router'
import { ARTICLES } from '../constants'
import RootLayout from '../layouts/RootLayout'
import ArticleBody from '../components/sections/ArticleBody'
import RelatedPublications from '../components/sections/RelatedPublications'
import SiteFooter from '../components/sections/SiteFooter'

function ResourceArticle() {
  const { path } = useRouter()
  // path is e.g. /resources/valuable-engineer
  const slug = path.replace(/^\/resources\//, '')
  const article = ARTICLES[slug] || Object.values(ARTICLES)[0]

  return (
    <RootLayout>
      <main>
        <ArticleBody article={article} />
        <RelatedPublications related={article.related} />
      </main>
      <SiteFooter />
    </RootLayout>
  )
}

export default ResourceArticle
