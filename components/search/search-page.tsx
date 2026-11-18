'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Search as SearchIcon } from 'lucide-react'
import type { SearchDoc, SearchType } from '@/lib/content/search'
import { cn } from '@/lib/utils'

const searchCategories: SearchType[] = ['Event', 'Dynasty', 'Personality', 'Monument', 'Battle']

export function SearchPage() {
  const [query, setQuery] = useState('')
  const [type, setType] = useState<SearchType | 'All'>('All')
  const [searchDocs, setSearchDocs] = useState<SearchDoc[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    async function loadSearchDocs() {
      try {
        const response = await fetch('/api/content?type=search', { cache: 'no-store' })
        const data = await response.json()

        if (active) {
          setSearchDocs(data?.data ?? [])
        }
      } catch {
        if (active) {
          setSearchDocs([])
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    loadSearchDocs()

    return () => {
      active = false
    }
  }, [])

  const filteredDocs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return searchDocs.filter((doc) => {
      const matchesType = type === 'All' || doc.type === type
      const matchesQuery =
        !normalizedQuery ||
        [doc.title, doc.subtitle, doc.description, doc.keywords]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery)
      return matchesType && matchesQuery
    })
  }, [query, searchDocs, type])

  return (
    <div className="space-y-10">
      <div className="grid gap-4 lg:grid-cols-[1fr_220px]">
        <div className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <SearchIcon className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Search across history</p>
              <p className="text-sm text-muted-foreground">Type a topic, name, place, or era to find related pages.</p>
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-foreground" htmlFor="search-query">
              Search query
            </label>
            <input
              id="search-query"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. Haldighati, Mughal, Ashoka"
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
            />

            <label className="block text-sm font-medium text-foreground" htmlFor="search-type">
              Filter by type
            </label>
            <select
              id="search-type"
              value={type}
              onChange={(event) => setType(event.target.value as SearchType | 'All')}
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
            >
              <option value="All">All categories</option>
              {searchCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Search tips</p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
            <li>Use names, dates or locations to narrow your search.</li>
            <li>Try broad terms like <span className="font-semibold text-foreground">Mughal</span> or <span className="font-semibold text-foreground">Revolt</span>.</li>
            <li>Filter by type when you want only events, dynasties, people or battles.</li>
          </ul>
        </div>
      </div>

      <div>
        {loading ? (
          <div className="rounded-3xl border border-border bg-background p-6 text-sm text-muted-foreground">
            Loading search index from the backend...
          </div>
        ) : (
          <>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {filteredDocs.length} result{filteredDocs.length === 1 ? '' : 's'}
                </p>
                <p className="text-sm text-muted-foreground">Search results update instantly as you type.</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Showing {filteredDocs.length} of {searchDocs.length}
              </p>
            </div>

            <div className="grid gap-4">
              {filteredDocs.map((doc) => (
                <Link
                  key={doc.id}
                  href={doc.href}
                  className={cn(
                    'rounded-3xl border border-border bg-background p-6 transition hover:border-primary/70 hover:bg-primary/5',
                  )}
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="rounded-full border border-border bg-background/70 px-3 py-1">{doc.type}</span>
                    <span>{doc.subtitle}</span>
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-foreground">{doc.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{doc.description}</p>
                </Link>
              ))}
              {filteredDocs.length === 0 ? (
                <div className="rounded-3xl border border-border bg-background p-6 text-sm text-muted-foreground">
                  No results found. Try a broader search term or remove the filter.
                </div>
              ) : null}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
