import { RESOURCES_PAGE } from '../../constants'
import PageHero from '../ui/PageHero'

function ResourcesHero() {
  const { tags, heading } = RESOURCES_PAGE.hero
  return <PageHero tags={tags} heading={heading} />
}

export default ResourcesHero
