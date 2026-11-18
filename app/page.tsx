import { Hero } from "@/components/home/hero"
import { StatsBand } from "@/components/home/stats-band"
import { TimelinePreview } from "@/components/home/timeline-preview"
import { FeaturedMonuments } from "@/components/home/featured-monuments"
import { ExploreGrid } from "@/components/home/explore-grid"

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <TimelinePreview />
      <FeaturedMonuments />
      <ExploreGrid />
    </>
  )
}
