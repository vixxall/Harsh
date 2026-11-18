import { PageHeader } from '@/components/page-header'
import { TimelineView } from '@/components/timeline/timeline-view'

export default function TimelinePage() {
  return (
    <>
      <PageHeader
        eyebrow="Timeline"
        title="A timeline of India’s historic eras"
        description="Explore key events across ancient, medieval and modern eras in an interactive timeline view."
      />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <TimelineView />
      </section>
    </>
  )
}
