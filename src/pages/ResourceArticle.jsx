import RootLayout from '../layouts/RootLayout'
import ArticleHero from '../components/sections/ArticleHero'
import ArticleBody from '../components/sections/ArticleBody'
import RelatedPublications from '../components/sections/RelatedPublications'
import SiteFooter from '../components/sections/SiteFooter'

function ResourceArticle() {
  return (
    <RootLayout>
      <main>
        <ArticleHero />
        <ArticleBody />
        <RelatedPublications />
      </main>
      <SiteFooter />
    </RootLayout>
  )
}

export default ResourceArticle
