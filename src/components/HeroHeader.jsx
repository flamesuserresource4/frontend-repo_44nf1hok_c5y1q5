import { useState } from 'react'
import { Accessibility, Mail, Phone, MapPin, PlayCircle } from 'lucide-react'

export default function HeroHeader({ onToggleContrast, highContrast, fontScale, setFontScale }) {
  const themeBg = highContrast ? 'from-amber-100 to-stone-200' : 'from-amber-50 to-stone-100'
  const textColor = highContrast ? 'text-stone-900' : 'text-stone-800'

  return (
    <header className={`relative w-full bg-gradient-to-br ${themeBg} transition-colors duration-300`}
      style={{ fontSize: `${fontScale}%` }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold">NF</div>
          <div className={`font-extrabold ${textColor} tracking-tight text-xl sm:text-2xl`}>Naitika Foundations</div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#videos" className="text-sm font-medium text-stone-700 hover:text-stone-900">Videos</a>
          <a href="#dashboard" className="text-sm font-medium text-stone-700 hover:text-stone-900">Live Dashboard</a>
          <a href="#team" className="text-sm font-medium text-stone-700 hover:text-stone-900">Our Team</a>
          <a href="#help" className="text-sm font-medium text-stone-700 hover:text-stone-900">Help Desk</a>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleContrast}
            className="inline-flex items-center gap-2 rounded-md bg-stone-800 text-amber-50 px-3 py-2 text-sm shadow hover:bg-stone-900"
            aria-pressed={highContrast}
            aria-label="Toggle high contrast"
            title="Toggle high contrast"
          >
            <Accessibility className="h-4 w-4" />
            Contrast
          </button>
          <label className="sr-only" htmlFor="fontScale">Font size</label>
          <input
            id="fontScale"
            type="range"
            min={90}
            max={130}
            value={fontScale}
            onChange={(e) => setFontScale(parseInt(e.target.value))}
            className="h-2 w-24 cursor-pointer accent-amber-600"
            aria-label="Adjust font size"
          />
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold ${textColor} tracking-tight`}>
            Values-first education for every village in Guntur
          </h1>
          <p className="mt-4 text-stone-700 leading-relaxed">
            Our teams visit 5 villages a day to teach Ethics, Human Values, and Civic Duties to children and elders. Explore our curriculum, watch demo sessions, and follow our live impact.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#videos" className="inline-flex items-center gap-2 rounded-md bg-amber-600 text-white px-4 py-2 shadow hover:bg-amber-700">
              <PlayCircle className="h-5 w-5" /> Watch demo videos
            </a>
            <a href="#dashboard" className="inline-flex items-center gap-2 rounded-md bg-stone-900 text-amber-50 px-4 py-2 shadow hover:bg-black">
              <MapPin className="h-5 w-5" /> View live dashboard
            </a>
          </div>
          <div id="help" className="mt-6 flex flex-wrap items-center gap-4">
            <a href="mailto:naitikafoundations@edu.in" className="inline-flex items-center gap-2 text-stone-800 hover:text-stone-950">
              <Mail className="h-4 w-4" /> naitikafoundations@edu.in
            </a>
            <a href="tel:+910000000000" className="inline-flex items-center gap-2 text-stone-800 hover:text-stone-950">
              <Phone className="h-4 w-4" /> Help desk: +91 00000 00000
            </a>
            <span className="text-xs text-stone-600">Accessible interface: use Contrast and Font size controls above</span>
          </div>
        </div>
        <div className="rounded-xl border border-stone-200 bg-white/70 backdrop-blur p-4 md:p-6 shadow-sm">
          <div className="grid grid-cols-2 gap-4">
            <StatCard label="Villages today" value="5" accent="bg-amber-600" />
            <StatCard label="Learners today" value="120+" accent="bg-stone-700" />
            <StatCard label="Total sessions" value="1,240" accent="bg-amber-700" />
            <StatCard label="Volunteers" value="42" accent="bg-stone-800" />
          </div>
          <p className="mt-4 text-sm text-stone-600">Operating in Guntur. Mandal hubs coordinate teams to nearby government schools.</p>
        </div>
      </div>
    </header>
  )
}

function StatCard({ label, value, accent }) {
  return (
    <div className="rounded-lg border border-stone-200 p-4 bg-amber-50">
      <div className={`inline-block rounded px-2 py-0.5 text-xs text-white ${accent}`}>{label}</div>
      <div className="mt-2 text-2xl font-extrabold text-stone-900">{value}</div>
    </div>
  )
}
