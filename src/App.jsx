import { useState } from 'react'
import HeroHeader from './components/HeroHeader'
import VideoLibrary from './components/VideoLibrary'
import LiveDashboard from './components/LiveDashboard'
import OfficesMap from './components/OfficesMap'
import TeamAndContact from './components/TeamAndContact'
import Footer from './components/Footer'

function App() {
  const [highContrast, setHighContrast] = useState(false)
  const [fontScale, setFontScale] = useState(100)

  return (
    <div className={`min-h-screen bg-stone-50`}>
      <HeroHeader
        highContrast={highContrast}
        onToggleContrast={() => setHighContrast(v => !v)}
        fontScale={fontScale}
        setFontScale={setFontScale}
      />
      <main>
        <VideoLibrary />
        <LiveDashboard />
        <OfficesMap />
        <TeamAndContact />
      </main>
      <Footer />
    </div>
  )
}

export default App
