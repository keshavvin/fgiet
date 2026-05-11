import { useEffect, useState } from 'react'
import { FaPhone, FaEnvelope, FaUserGraduate, FaUserShield, FaSignInAlt } from 'react-icons/fa'

export default function TopBar() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const dateStr = now.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
  const timeStr = now.toLocaleTimeString('en-IN')

  return (
    <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white text-xs md:text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            {dateStr}, {timeStr}
          </span>
          <a href="tel:8175002187" className="flex items-center gap-1.5 hover:text-amber-400 transition">
            <FaPhone className="text-amber-400" /> 8175002187
          </a>
          <a href="mailto:info@fgiet.ac.in" className="hidden md:flex items-center gap-1.5 hover:text-amber-400 transition">
            <FaEnvelope className="text-amber-400" /> info@fgiet.ac.in
          </a>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <a href="#" className="flex items-center gap-1 hover:text-amber-400 transition">
            <FaSignInAlt /> ERP Login
          </a>
          <span className="opacity-40">|</span>
          <a href="#" className="flex items-center gap-1 hover:text-amber-400 transition">
            <FaUserGraduate /> NIRF
          </a>
          <span className="opacity-40">|</span>
          <a href="#" className="hidden sm:flex items-center gap-1 hover:text-amber-400 transition">
            <FaUserShield /> Grievance
          </a>
          <span className="hidden sm:inline opacity-40">|</span>
          <a href="#" className="hover:text-amber-400 transition">Feedback</a>
        </div>
      </div>
    </div>
  )
}
