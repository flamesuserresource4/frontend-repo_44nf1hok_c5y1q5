import { Mail, User, Linkedin } from 'lucide-react'

const TEAM = [
  { role: 'CEO', name: 'Nithin', email: 'nithin@naitika.edu.in' },
  { role: 'Technical Lead', name: 'Aishwarya', email: 'aishwarya@naitika.edu.in' },
  { role: 'Marketing Lead', name: 'Sunandha', email: 'sunandha@naitika.edu.in' },
  { role: 'Community Manager', name: 'Mohan Teja', email: 'mohan.teja@naitika.edu.in' },
  { role: 'Operations Manager', name: 'Sahith', email: 'sahith@naitika.edu.in' },
]

export default function TeamAndContact() {
  return (
    <section id="team" className="py-12 bg-amber-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-stone-900 mb-6">Our Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((m) => (
            <div key={m.email} className="rounded-lg border border-stone-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold">
                  {m.name.split(' ').map(s=>s[0]).join('').slice(0,2)}
                </div>
                <div>
                  <div className="font-bold text-stone-900">{m.name}</div>
                  <div className="text-sm text-stone-700">{m.role}</div>
                </div>
              </div>
              <a href={`mailto:${m.email}`} className="mt-3 inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 text-sm">
                <Mail className="h-4 w-4" /> {m.email}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-stone-200 bg-white p-6">
          <h3 className="text-xl font-bold text-stone-900">Contact & Help Desk</h3>
          <p className="text-stone-700 mt-1">Email us for partnerships, volunteering, or school visits.</p>
          <a href="mailto:naitikafoundations@edu.in" className="mt-3 inline-flex items-center gap-2 text-amber-700 hover:text-amber-800">
            <Mail className="h-5 w-5" /> naitikafoundations@edu.in
          </a>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <form className="space-y-3">
              <div>
                <label className="block text-sm text-stone-700 mb-1">Your Name</label>
                <input type="text" required className="w-full rounded-md border-stone-300" placeholder="Full name" />
              </div>
              <div>
                <label className="block text-sm text-stone-700 mb-1">Email</label>
                <input type="email" required className="w-full rounded-md border-stone-300" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm text-stone-700 mb-1">Message</label>
                <textarea rows="4" required className="w-full rounded-md border-stone-300" placeholder="How can we help?" />
              </div>
              <button type="submit" className="rounded-md bg-amber-600 text-white px-4 py-2 hover:bg-amber-700">Send</button>
            </form>
            <div className="rounded-lg border border-stone-200 p-4 bg-amber-50">
              <div className="font-semibold text-stone-900">Operating region</div>
              <div className="text-stone-700">Guntur district, Andhra Pradesh</div>
              <div className="mt-3 text-sm text-stone-700">Mandal offices launching soon to coordinate routes to nearby government schools.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
