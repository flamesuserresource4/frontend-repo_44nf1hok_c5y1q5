import { useState } from 'react'
import { Play, Filter } from 'lucide-react'

const demoData = [
  {
    id: 'video-1',
    title: 'Naitika Foundations Demo 1',
    category: 'Ethics',
    day: 'Day 1',
    url: 'https://www.youtube.com/embed/zPsoFhUDLuU?si=68awzlUi5kGZcO_H',
  },
  {
    id: 'video-2',
    title: 'Naitika Foundations Demo 2',
    category: 'Human Values',
    day: 'Day 2',
    url: 'https://www.youtube.com/embed/yDGdpWkGmFU?si=FHNWvO9hRhdXE2rz',
  },
]

export default function VideoLibrary() {
  const [category, setCategory] = useState('All')
  const [day, setDay] = useState('All')

  const categories = ['All', ...Array.from(new Set(demoData.map(v => v.category)))]
  const days = ['All', ...Array.from(new Set(demoData.map(v => v.day)))]

  const filtered = demoData.filter(v => (category === 'All' || v.category === category) && (day === 'All' || v.day === day))

  return (
    <section id="videos" className="bg-amber-50/60 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-stone-900">Demo Video Library</h2>
          <div className="flex items-center gap-3 text-stone-800">
            <Filter className="h-4 w-4" />
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-md border-stone-300 text-sm">
              {categories.map(c => <option key={c}>{c}</option>)}
            </select>
            <select value={day} onChange={(e) => setDay(e.target.value)} className="rounded-md border-stone-300 text-sm">
              {days.map(d => <option key={d}>{d}</option>)}
            </select>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(v => (
            <article key={v.id} className="rounded-lg overflow-hidden border border-stone-200 bg-white shadow-sm">
              <div className="aspect-video bg-stone-100">
                <iframe title={v.title} src={v.url} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div className="p-4">
                <div className="text-xs uppercase tracking-wide text-amber-700 font-semibold">{v.category} • {v.day}</div>
                <h3 className="mt-1 font-bold text-stone-900">{v.title}</h3>
                <button className="mt-3 inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 text-sm font-medium">
                  <Play className="h-4 w-4" /> Play
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
