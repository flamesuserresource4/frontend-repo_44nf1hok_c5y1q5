import { useEffect, useMemo, useState } from 'react'
import { MapPin, Users, Clock } from 'lucide-react'

// This component simulates live tracking with rotating sample data.
// Later you can connect it to your backend API for real-time updates.

const sampleVillages = [
  { id: 1, name: 'Pedakakani', learners: 28, time: '10:00', status: 'Running' },
  { id: 2, name: 'Kakumanu', learners: 22, time: '11:30', status: 'Running' },
  { id: 3, name: 'Ponnur', learners: 18, time: '13:00', status: 'Scheduled' },
  { id: 4, name: 'Tenali', learners: 32, time: '15:00', status: 'Scheduled' },
  { id: 5, name: 'Mangalagiri', learners: 24, time: '16:30', status: 'Scheduled' },
]

export default function LiveDashboard() {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setTick(t => t + 1), 4000)
    return () => clearInterval(t)
  }, [])

  const rotating = useMemo(() => {
    // rotate array for a sense of motion
    const shift = tick % sampleVillages.length
    return [...sampleVillages.slice(shift), ...sampleVillages.slice(0, shift)]
  }, [tick])

  const total = rotating.reduce((acc, v) => acc + v.learners, 0)

  return (
    <section id="dashboard" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-stone-900">Live Tracking Dashboard (Guntur)</h2>
          <div className="text-sm text-stone-600">Updates every few seconds • Demo</div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <KPI icon={MapPin} label="Villages Today" value={5} />
          <KPI icon={Users} label="Learners Today" value={total} />
          <KPI icon={Clock} label="Active Sessions" value={rotating.filter(v => v.status === 'Running').length} />
        </div>

        <div className="rounded-xl border border-stone-200 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-amber-100 text-stone-800">
              <tr>
                <th className="px-4 py-3">Village</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3">Learners</th>
              </tr>
            </thead>
            <tbody>
              {rotating.map(v => (
                <tr key={v.id} className="odd:bg-white even:bg-amber-50">
                  <td className="px-4 py-3 font-medium text-stone-900">{v.name}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${v.status === 'Running' ? 'bg-emerald-100 text-emerald-700' : 'bg-stone-100 text-stone-700'}`}>{v.status}</span>
                  </td>
                  <td className="px-4 py-3 text-stone-700">{v.time}</td>
                  <td className="px-4 py-3 text-stone-900">{v.learners}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-stone-600">Planned to scale mandal-wise with local hubs and routes to nearby government schools.</p>
      </div>
    </section>
  )
}

function KPI({ icon: Icon, label, value }) {
  return (
    <div className="rounded-lg border border-stone-200 bg-amber-50 p-4 flex items-center gap-3">
      <div className="h-10 w-10 rounded-md bg-amber-600 text-white flex items-center justify-center"><Icon className="h-5 w-5" /></div>
      <div>
        <div className="text-xs text-stone-700">{label}</div>
        <div className="text-2xl font-extrabold text-stone-900">{value}</div>
      </div>
    </div>
  )
}
