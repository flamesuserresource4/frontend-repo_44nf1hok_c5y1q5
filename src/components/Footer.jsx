export default function Footer() {
  return (
    <footer className="bg-stone-900 text-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">© {new Date().getFullYear()} Naitika Foundations. All rights reserved.</div>
        <div className="text-sm opacity-80">Made with care for accessible, values-first education.</div>
      </div>
    </footer>
  )
}
