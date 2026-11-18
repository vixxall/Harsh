import React from 'react'

type Props = {
  src: string
  poster?: string
  controls?: boolean
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  className?: string
}

function getYouTubeId(url: string): string | null {
  const m = url.match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/)
  return m ? m[1] : null
}

export default function VideoPlayer({
  src,
  poster,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  className,
}: Props) {
  if (!src) return null

  const ytId = getYouTubeId(src)

  if (ytId) {
    const embed = `https://www.youtube.com/embed/${ytId}`
    return (
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <iframe
          src={embed}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
        />
      </div>
    )
  }

  return (
    <video
      src={src}
      poster={poster}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline
      className={className}
      style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
    />
  )
}
