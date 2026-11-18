import { PageHeader } from '@/components/page-header'
import { SearchPage } from '@/components/search/search-page'

export default function SearchRoutePage() {
  return (
    <>
      <PageHeader
        eyebrow="Search"
        title="Find events, dynasties, heroes and battles"
        description="Search across India’s history by event, dynasty, personality, monument, or battle."
      />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SearchPage />
      </section>
    </>
  )
}
