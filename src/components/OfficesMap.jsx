import { useEffect, useState } from 'react'
import { MapPin } from 'lucide-react'

export default function OfficesMap() {
  const [offices, setOffices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || ''

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${baseUrl}/offices`)
        if (!res.ok) throw new Error('Failed to load offices')
        const data = await res.json()
        setOffices(data)
      } catch (e) {
        setError((e).message || 'Error loading offices')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [baseUrl])

  return (
    <section id="offices" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2"><MapPin className="h-5 w-5 text-amber-700"/> Offices & Maps</h2>
          <p className="text-sm text-stone-600">Each office includes a quick map for easy directions</p>
        </div>

        {loading && <div className="text-stone-700">Loading offices…</div>}
        {error && <div className="text-red-600">{error}</div>}

        {!loading && !error && offices.length === 0 && (
          <div className="rounded-lg border border-stone-200 bg-amber-50 p-4 text-stone-800">
            No offices added yet. Add offices via the backend to see maps here.
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offices.map(o => (
            <article key={o.id} className="rounded-lg overflow-hidden border border-stone-200 bg-white shadow-sm">
              <div className="aspect-video bg-stone-100">
                <iframe
                  title={`Map of ${o.name}`}
                  src={`https://www.google.com/maps?q=${o.lat},${o.lng}&hl=en&z=14&output=embed`}
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-4">
                <div className="text-xs uppercase tracking-wide text-amber-700 font-semibold">{o.mandal || 'Office'}</div>
                <h3 className="mt-1 font-bold text-stone-900">{o.name}</h3>
                {o.address && <p className="text-sm text-stone-700 mt-1">{o.address}</p>}
                {(o.phone || o.email) && (
                  <div className="text-sm text-stone-700 mt-2">
                    {o.phone && <div>Phone: {o.phone}</div>}
                    {o.email && <div>Email: {o.email}</div>}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
