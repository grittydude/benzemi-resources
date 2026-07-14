import RootLayout from '../layouts/RootLayout'
import ArticleBody from '../components/sections/ArticleBody'
import RelatedPublications from '../components/sections/RelatedPublications'
import SiteFooter from '../components/sections/SiteFooter'

function ResourceArticle() {
  return (
    <RootLayout>
      <main>
        <ArticleBody />
        <RelatedPublications />
      </main>
      <SiteFooter />
    </RootLayout>
  )
}

export default ResourceArticle
